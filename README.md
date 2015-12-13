**angular-flickr-api-factory** is an angularjs module with a flickr api factory.

Author: Jonathan Hornung ([JohnnyTheTank](https://github.com/JohnnyTheTank))

## Usage

1. Install via [bower](http://bower.io/) :
    1. `bower install --save angular-flickr-api-factory`
2. Add `jtt_flickr` to your application's module dependencies.
3. Include dependencies in your HTML.
    1. When using bower:

    ```html
    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/angular-flickr-api-factory/src/angular-flickr-api-factory.js"></script>
    ```

4. Use the factory `flickrFactory`.

### factory methods

```js
flickrFactory.getImagesFromUserById({
    id:"<USER_ID>", // username converter: http://idgettr.com/
    lang:"<LANGUAGE>", // (optional) https://www.flickr.com/services/feeds/
}).success(function(_data){
    //on success
}).error(function (_data) {
    //on error
});
```

```js
flickrFactory.getImagesFromUserById({
    ids:"<USER_ID_1>,<USER_ID_2>", // username converter: http://idgettr.com/
    lang:"<LANGUAGE>", // (optional) https://www.flickr.com/services/feeds/
}).success(function(_data){
    //on success
}).error(function (_data) {
    //on error
});
```

```js
flickrFactory.getImagesByTags({
    tags:"<TAG_1>,<TAG_2>", // username converter: http://idgettr.com/
    tagmode:"<TAG_MODE>", // Control whether items must have ALL the tags (tagmode=all), or ANY (tagmode=any) of the tags. Default is ALL.
    lang:"<LANGUAGE>", // (optional) https://www.flickr.com/services/feeds/
}).success(function(_data){
    //on success
}).error(function (_data) {
    //on error
});
```

## Flickr JSONP API

* Docs: https://www.flickr.com/services/feeds/docs/photos_public/
* API Playground: https://apigee.com/console/flickr
* Flickr Username Converter: http://idgettr.com/


## License

MIT