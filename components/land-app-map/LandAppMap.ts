/// <amd-dependency path="proj4" name="proj4" />

import * as angular from "angular";
import * as ol from "openlayers";
import {LandAppMapController} from "./land-app-map-controller";
import {Component} from "../component/Component";

declare var proj4; // to suppress TS warnings

export interface ILandAppMapScope {
    message: string;
    componentUrl: string;
    map: any;
}

export class LandAppMap extends Component {
    public templateUrl: string = 'components/land-app-map/land-app-map.html';
    public restrict: string = 'E';
    public scope = {}; // isolate scope
    public link: (scope: ILandAppMapScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
    public controllerAs: string = 'mapCtrl';
    public controller = LandAppMapController;
    public name: string = 'land-app-map';

    constructor($http: ng.IHttpService, $templateCache: ng.ITemplateCacheService) {
        super($http, $templateCache, 'land-app-map', true);
        window['proj4'] = proj4;
        //proj4.defs('EPSG:27700', '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +datum=OSGB36 +units=m +no_defs');
        proj4.defs("EPSG:27700","+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs");

        LandAppMap.prototype.link = (scope: ILandAppMapScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
            this.scope = scope;

            var epsg27700Extent = [1393.0196, 13494.9764, 671196.3657, 1230275.0454];
            var epsg27700Projection = new ol.proj.Projection({
                code: 'EPSG:27700',
                extent: epsg27700Extent
            });

            var matrixIds = new Array(14);
            for (var z = 0, i = 13; z < 14; z++, i--) {
                matrixIds[z] = "EPSG:27700:" + z; // generate resolutions and matrixIds arrays for this WMTS
            }

            //noinspection JSCheckFunctionSignatures
            var topo = new ol.layer.Tile(<olx.layer.TileOptions>{
                extent: epsg27700Extent,
                source: new ol.source.WMTS({
                    attributions: [new ol.Attribution({
                        html: '&copy; <a href="http://www.ordnancesurvey.co.uk/">Ordnance Survey</a>'
                    })],
                    url: "https://api.ordnancesurvey.co.uk/mapping_api/service/wmts?apikey=7XTyNJ0sXvUoiOgkcwcqJ8aSkFgHOD4H",
                    layer: 'Zoom Map Auto',
                    matrixSet: 'EPSG:27700',
                    format: 'image/png',
                    projection: epsg27700Projection,
                    tileGrid: new ol.tilegrid.WMTS(<olx.TileWMSOptions>{
                        origin: [0.0, 1376256.0],
                        resolutions: [896.0, 448.0, 224.0, 112.0,
                            56.0, 28.0, 14.0, 7.0, 3.5, 1.75,
                            0.875, 0.4375, 0.21875, 0.109375
                        ],
                        matrixIds: matrixIds
                    }),
                    style: ''
                })
            });


            var ukCenter = ol.proj.fromLonLat(<ol.Coordinate>[-2.547855, 54.00366], <ol.proj.ProjectionLike>"EPSG:27700");

            var view = new ol.View({
                extent: epsg27700Extent,
                center: ukCenter,
                maxZoom: 20,
                minZoom: 7,
                zoom: 9
            });

            var mapOptions: olx.MapOptions = {
                target: 'map',
                layers: [],
                view: view
            };

            scope.map = new ol.Map(<olx.MapOptions>{
                target: 'map',
                layers: [
                    topo
                     //new ol.layer.Tile({
                     //    source: new ol.source.OSM()
                     //})
                ],
                loadTilesWhileAnimating: true,
                view: view,
                controls: []
            });

            //// helper code to inject css
            //var url = scope.componentUrl + '/land-app-map.css';
            //if ($templateCache.get(url)) {
            //    this.makeStyle('land-app-map.css', $templateCache.get(url).toString());
            //    console.log('found style in templatecache');
            //} else {
            //    $http({method: 'get', url: scope.componentUrl + '/land-app-map.css', cache: true}).then((response: any) => {
            //        this.makeStyle('land-app-map.css', response.data);
            //        console.log('got style using $http');
            //    });
            //}
        }
    }

    public static Factory() {
        var directive = ($http: ng.IHttpService, $templateCache: ng.ITemplateCacheService) => {
            return new LandAppMap($http, $templateCache);
        };
        directive['$inject'] = ['$http', '$templateCache'];
        return directive;
    }


}