var express = require('express');
const path = require('path');
var app = express();
const getLdFlag = require('./launchDarkly');
var featureBoolean = false;

//Check feature every 5 mins
setInterval(function() {
    getLdFlag().then(function(result){
        featureBoolean = result
        console.log('testing: ' + featureBoolean);
    })
}, 1000 * 5);

//app.use(express.static(path.join(__dirname, 'public')));
app.use("/public", express.static(__dirname + "/public"));

app.get('/', function (req, res) {

  if(!featureBoolean){
    res.sendFile(path.join(__dirname, '/index.html'));
  } else {
    res.sendFile(path.join(__dirname, '/index2.html'));
  }
  
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  //console.log('testing: ' + getLdFlag());

});
//https://medium.com/@adnanrahic/hello-world-app-with-node-js-and-express-c1eb7cfa8a30