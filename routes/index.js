var express = require('express');
var router = express.Router();
var fileSystem = require('fs')
var path = require('path')
var PlayMusic = require('playmusic');
var pm = new PlayMusic();
var pass = "your" + "mama" + 101
pm.init({email: "sikz26300@gmail.com", password: pass}, function(err) {
    if(err) console.error(err);
    else console.log("Login successful")
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  
	var filePath = path.join(__dirname, 'audio/freaksAndGeeks.mp3');
    res.sendFile(filePath);
});

router.get('/play', function(req, res, next) {
		
		
//          pm.getStreamUrl("Thvfmp2be3c7kbp6ny4arxckz54", console.log);
});
router.get('/skip', function(req, res, next) {

        var filePath = path.join(__dirname, 'audio/freaksAndGeeks.mp3');
    res.sendFile(filePath);
});
router.get('/show', function(req, res, next) {

        pm.getAllTracks(function(err, library) {
        var song = library.data.items.pop();
        console.log(song);
        pm.getStreamUrl(song.id, function(err, streamUrl) {
            res.json(streamUrl)

            var sys = require('sys')
            var exec = require('child_process').exec;
            function puts(error, stdout, stderr) { sys.puts(stdout) }
            streamUrl = streamUrl.split("'")[0]
            exec("play -t mp3" + streamUrl, puts);
		
		    //pm.getStreamUrl("9d0dab05-b0fe-38bb-9eab-346db9eeff23", console.log);
        });
    });
});



module.exports = router;
