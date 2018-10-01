var express= require('express');
// var http = require('http');
var data ;

// /*Normal HTTP  */
// http.createServer(function(req,res){
    
//     if(req.url == '/home'){
//         data = 'This is home page';
//     }
//     else if(req.url == '/dashboard'){
//         data ='Hey it is dashboard page';
//     }
//     res.end(data);
    
// }).listen(5678)



// console.log('>>>>  HTTP Application Running successfully - Please Visit : http://127.0.0.1:5678');
// /*HTTP ENDS */

/* ============================================================================================================= */

/*With Express Server Framework  */

app = express();

var data  = 'Welcome Nagavijay';

app.get('/',function(req,res){
    res.send(data +' - Please use this (http://127.0.0.1:1234/dashboard) link to access dashboard Page');
})

app.get('/dashboard',function(req,res){
      res.send(data +', Now you are in Dashboard page')
})

// Assigning Port 
app.listen(1234);
/*Express Server Framework ENDS */
console.log('>>>>> Express.js Application Running successfully - Please Visit : http://127.0.0.1:1234');