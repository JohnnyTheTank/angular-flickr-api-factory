var app = angular.module("app", ['jtt_flickr']);
app.controller('controller', ['$scope', 'flickrFactory', function($scope, flickrFactory) {

    flickrFactory.getImagesFromUserById({
        id:"67221971@N06", // username converter: http://idgettr.com/
        lang:"de-de", // (optional) https://www.flickr.com/services/feeds/
    }).then(function(_data){
        console.info("images from user by id", _data);
    });

    flickrFactory.getImagesFromGroupOfUsersByIds({
        ids:"67221971@N06,23802654@N08", // username converter: http://idgettr.com/
        lang:"de-de", // (optional) https://www.flickr.com/services/feeds/
    }).then(function(_data){
        console.info("images from group of user by ids", _data);
    });

    flickrFactory.getImagesByTags({
        tags:"fcbayern",
        tagmode:"any",
        lang:"de-de", // (optional) https://www.flickr.com/services/feeds/
    }).then(function(_data){
        console.info("images by tags", _data);
    });

}]);
