

var express = require('express'),
config = require('./config/config');

var app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json({
  limit: '500mb'
}));

app.use(bodyParser.urlencoded({
  limit: '500mb',
  parameterLimit: 1000000,
  extended: true 
}));

module.exports = require('./config/express')(app, config);

// db.sequelize
//   .sync()
//   .then(function () {
//     if (!module.parent) {
//       app.listen(config.port, function () {
//         console.log('Express server listening on port ' + config.port);
//       });
//     }
//   }).catch(function (e) {
//     throw new Error(e);
//   });

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});
