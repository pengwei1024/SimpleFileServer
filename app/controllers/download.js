var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/', router);
};


router.get('/download.html', function (req, res, next) {
	var queryParam = req.query;
	if(queryParam != undefined){
		res.setHeader('content-Type','application/octet-stream');
		res.setHeader('content-Disposition', `attachment;filename=${queryParam.file_name}`)
		res.download('freedom/upload/'+queryParam.file_name);
	}
});



router.post('/download.html', function (req, res) {
	var queryParam = req.body.file_name;
	if(queryParam != undefined){
		res.setHeader('content-Type','application/octet-stream');
		res.setHeader('content-Disposition', `attachment;filename=${queryParam}`)
		res.download('freedom/upload/'+queryParam);
	}
});
