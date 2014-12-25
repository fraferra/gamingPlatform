var express = require('express');
var router = express.Router();
require('shelljs/global');
var sys = require('sys')
var exec = require('child_process').exec;
var child;



/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' })
});



/* POST Hello World page. */
router.post('/test', function(req, res) {
	var myData = req.body;

    
    var version = exec('node -v').output;

	var fs = require('fs');


	var outputFilename = 'my.json';

	fs.writeFile(outputFilename, JSON.stringify(myData, null, 4), function(err) {
	    if(err) {
	      console.log(err);
	    } else {
	      console.log("JSON saved to " + outputFilename);
	    }
	}); 



	exec("packer build" + outputFilename);


	function puts(error, stdout, stderr) {sys.puts(stdout)}
	exec("packer build " + outputFilename, puts);




    res.render('helloworld', { title: myData.name })
});


module.exports = router;
