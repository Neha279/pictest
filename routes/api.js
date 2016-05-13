var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a api resource');
});


router.get('/getFeed', function (req, res, next) {

    console.log('getFeed.. ')	 
    request('https://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&nojsoncallback=1', function (error, response, body) {
      if (!error && response.statusCode == 200) {
      	body = body.replace('jsonFlickrFeed(', '');
	      body = body.replace('})', '}');
		    body = body.replace(/\\'/g, "'");
      	res.json(body); 
      }
      else res.json(error);
    });

});

router.get('/getFeedWithTag/:tags', function (req, res, next) {

    console.log('getFeedWithTag.. ')	;
    var tags = req.params.tags; 
    request('https://api.flickr.com/services/feeds/photos_public.gne?tags='+tags+'&lang=en-us&format=json&nojsoncallback=1', function (error, response, body) {
      if (!error && response.statusCode == 200) {
      	body = body.replace('jsonFlickrFeed(', '');
	      body = body.replace('})', '}');
		    body = body.replace(/\\'/g, "'");
      	res.json(body); 
      }
      else res.json(error);
    });

});

module.exports = router;
