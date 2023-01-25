var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res) {
  console.log(req.query.shop_name);

  var options = {
    'method': 'GET',
    'url':'https://dapi.kakao.com/v2/local/search/keyword.json?query='+encodeURIComponent(req.query.shop_name), 
    'headers': {
      'Authorization': 'KakaoAK 0845e8f01b3294ccb9a3dec709cb6a35'
    }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    let info = JSON.parse(body);
    // console.log(info.documents);

    res.send(info.documents);
  })
});


module.exports = router;
