**angular-flickr-api-factory** is an angularjs module with a flickr api factory.

[![npm version](https://badge.fury.io/js/angular-flickr-api-factory.png)](https://badge.fury.io/js/angular-flickr-api-factory)
[![Bower version](https://badge.fury.io/bo/angular-flickr-api-factory.png)](https://badge.fury.io/bo/angular-flickr-api-factory)

Author: Jonathan Hornung ([JohnnyTheTank](https://github.com/JohnnyTheTank))

## Usage

1. Install via either [bower](http://bower.io/), [npm](https://www.npmjs.com/) or downloaded files:
    1. `bower install --save angular-flickr-api-factory`
    2. `npm install --save angular-flickr-api-factory`
    3. download [angular-flickr-api-factory.zip](https://github.com/JohnnyTheTank/angular-flickr-api-factory/zipball/master)
2. Add `jtt_flickr` to your application's module dependencies.
3. Include dependencies in your HTML.
    1. When using bower:
    ```html
    <script src="bower_components/angular-flickr-api-factory/src/angular-flickr-api-factory.min.js"></script>
    ```
    2. When using npm:
    ```html
    <script src="node_modules/angular-flickr-api-factory/src/angular-flickr-api-factory.min.js"></script>
    ```
    3. when using downloaded files
    ```html
    <script src="angular-flickr-api-factory.min.js"></script>
    ```
4. Use the factory `flickrFactory`

### factory methods

```js
flickrFactory.getImagesFromUserById({
    id:"<USER_ID>", // username converter: http://idgettr.com/
    lang:"<LANGUAGE>", // (optional) https://www.flickr.com/services/feeds/
}).then(function(_data){
    //on success
}).catch(function (_data) {
    //on error
});
```

```js
flickrFactory.getImagesFromUserById({
    ids:"<USER_ID_1>,<USER_ID_2>", // username converter: http://idgettr.com/
    lang:"<LANGUAGE>", // (optional) https://www.flickr.com/services/feeds/
}).then(function(_data){
    //on success
}).catch(function (_data) {
    //on error
});
```

```js
flickrFactory.getImagesByTags({
    tags:"<TAG_1>,<TAG_2>",
    tagmode:"<TAG_MODE>", // (optional) Control whether items must have ALL the tags (tagmode=all), or ANY (tagmode=any) of the tags. Default is ALL.
    lang:"<LANGUAGE>", // (optional) https://www.flickr.com/services/feeds/
}).then(function(_data){
    //on success
}).catch(function (_data) {
    //on error
});
```

## Flickr JSONP API

* Docs: https://www.flickr.com/services/feeds/docs/photos_public/
* API Playground: https://apigee.com/console/flickr
* Flickr Username Converter: http://idgettr.com/


## License

MIT