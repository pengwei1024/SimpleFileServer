var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/', router);
};


router.get('/download.html', function (req, res, next) {
	var queryParam = req.query;
	if(queryParam != undefined){
		res.download('freedom/upload/'+queryParam.file_name, queryParam.file_name);
	}
});

router.get('/attach/:fileName', function (req, res, next) {
	if(req.params.fileName){
		res.download('freedom/upload/'+req.params.fileName, req.params.fileName);
	}
});



router.post('/download.html', function (req, res) {
	var queryParam = req.body.file_name;
	if(queryParam != undefined){
		res.download('freedom/upload/'+queryParam, queryParam);
	}
});
