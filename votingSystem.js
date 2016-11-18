console.log(("test"))
var $ = require('jQuery');
$(document).ready(function(){
                /*var fs = require("fs")
                
                fs.readFile('testFile', 'utf8', function (err, data) {
                        if(err) throw err
                        console.log(data);
                    });
               
                
                var data1 = {
                    "labels":["Red","Blue","Yellow"],
                    "datasets":[{"label":"# of Votes","data":[0,0,0],"backgroundColor":["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)"],"borderColor":["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)"],"borderWidth":1}]}
                
                for(var i = 0; i < data1.labels.length; i++){
                        var $something= $('<input/>').attr({ type: 'button', name:'btn1', value: data1.labels[i], class: 'votingButton', id: 'button' + (i+1)});
                        $(".allButtons").append($something);
                        console.log("working");
                    }
                
                function callChart(){
                     var ctx = document.getElementById("myChart");
                    var myChart = new Chart(ctx, {
                        type: 'pie',
                        data: data1,
                        options: {
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero:true
                                    }
                                }]
                            },
                            maintainAspectRatio: false,
                            responsive:false
                        }
                    });
                }    
                
               
                
                
                $(".votingButton").click(function(){
                    var votesNumber = this.id.slice(this.id.length - 1) - 1
                    data1.datasets[0].data[votesNumber]++
                    callChart()
                })
               */ 
            });