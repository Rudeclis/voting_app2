var express = require('express');
var app = express();
var fs = require("fs");

var test = fs.readFileSync('testFile', 'utf8')

var testObject = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [{
        label: '# of Votes',
        data: [0, 0, 0],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            
        ],
        borderWidth: 1
    }]
}

var testJSON = JSON.stringify(testObject);

fs.open('testFile', 'w', 0666, function( e, id ) {
  fs.write( id, testJSON, null, 'utf8', function(){
    fs.close(id, function(){
      fs.readFile("testFile", 'utf8', function(err, data){
        if(err) throw err
        var object = JSON.parse(data)
        console.log(object.labels)
        })
      })
    });
  });








app.get("/voting", function (req, res){
  res.sendFile('/home/ubuntu/workspace/voting/votingPage.html')
  
})
app.get('/', function (req, res) {
  res.sendFile('/home/ubuntu/workspace/voting/index.html');
});

app.listen(8080, function () {
  console.log('listening');
  
});

