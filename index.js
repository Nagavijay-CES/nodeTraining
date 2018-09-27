var express= require('express');

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

console.log('Application Running successfully - Please Visit : http://127.0.0.1:1234');