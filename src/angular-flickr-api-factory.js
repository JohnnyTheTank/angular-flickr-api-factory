"use strict";

angular.module("jtt_flickr", [])
    .factory('flickrFactory', ['$http', 'flickrSearchDataService', function ($http, flickrSearchDataService) {

        var flickrFactory = {};

        flickrFactory.getImagesFromUserById = function (_params) {

            var searchData = flickrSearchDataService.getNew("imagesFromUserById", _params);

            return $http({
                method: 'JSONP',
                url: searchData.url,
                params: searchData.object,
            });
        };

        flickrFactory.getImagesFromGroupOfUsersByIds = function (_params) {

            var searchData = flickrSearchDataService.getNew("imagesFromGroupOfUsersByIds", _params);

            return $http({
                method: 'JSONP',
                url: searchData.url,
                params: searchData.object,
            });
        };

        flickrFactory.getImagesByTags = function (_params) {

            var searchData = flickrSearchDataService.getNew("imagesByTags", _params);

            return $http({
                method: 'JSONP',
                url: searchData.url,
                params: searchData.object,
            });
        };

        return flickrFactory;
    }])
    .service('flickrSearchDataService', function () {
        this.getApiBaseUrl = function (_params) {
            return "https://api.flickr.com/services/feeds/photos_public.gne";
        };

        this.fillDataInObjectByList = function (_object, _params, _list) {

            angular.forEach(_list, function (value, key) {
                if (angular.isDefined(_params[value])) {
                    _object.object[value] = _params[value];
                }
            });

            return _object;
        };

        this.getNew = function (_type, _params) {
            var flickrSearchData = {
                object: {
                    jsoncallback:'JSON_CALLBACK',
                    format: "json"
                },
                url: "",
            };

            switch (_type) {
                case "imagesFromUserById":
                    flickrSearchData = this.fillDataInObjectByList(flickrSearchData, _params, [
                        'lang', 'id'
                    ]);

                    flickrSearchData.url = this.getApiBaseUrl();
                    break;

                case "imagesFromGroupOfUsersByIds":
                    flickrSearchData = this.fillDataInObjectByList(flickrSearchData, _params, [
                        'lang', 'ids'
                    ]);

                    flickrSearchData.url = this.getApiBaseUrl();
                    break;

                case "imagesByTags":
                    flickrSearchData = this.fillDataInObjectByList(flickrSearchData, _params, [
                        'lang', 'tags', 'tagmode'
                    ]);

                    flickrSearchData.url = this.getApiBaseUrl();
                    break;
            }

            return flickrSearchData;
        };
    });