

var express = require('express'),
config = require('./config/config');

var app = express();


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

app.use(express.urlencoded({ limit: '500mb', extended: true }))
app.use(express.json({limit: '500mb'}))

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});
