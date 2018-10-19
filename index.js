const express= require('express');
const jwt = require('jsonwebtoken'); // JWT to create token based on given result.
const app = express(); 
const bodyParser = require('body-parser'); // Body Parser to parse the body data into JSOn format before processing the request.

/*With Express Server Framework  */

app.use(bodyParser.json()); // This functiona will call on evert time you hit API, Then it parse the data into json format.

var data  = 'Welcome Nagavijay';
app.get('/',function(req,res){
    res.send(data +' - Please use this (http://127.0.0.1:1234/dashboard) link to access dashboard Page');
});

app.get('/dashboard',function(req,res){
    
      res.send(data +', Now you are in Dashboard page');
});

// A Post method with authentication, Token is mandatory

app.post('/home',authGaurd,function(req,res){
    // Here we can verify wether the token is available or not
    
    jwt.verify(req.token,'secretKey',function(err,data){
            if(err){
                res.send(err.message);
            }
            else{
                res.end('Success : Token Accepted.');
            }
    })
});

app.post('/login',function(req,res){

    var userData = req.body;
    
    //jwt.sign creates a token using the provided JSON data

    jwt.sign({userData},'secretKey',{expiresIn: '120s'}, function(err,token){
        console.log(token);
        res.json({token});
    })

})

//Authentication checker

function authGaurd(req,res,next){
    
    var bearer = req.headers['authorization']; // Collects Authorization - token from header of the request data

    if(typeof bearer != 'undefined'){
        var bearerTkn = bearer.split(' ')[1];

        req.token = bearerTkn;
        //Next method, To proceed with call back.

        next();

    }else{
        res.send('Please provide token to proceed...');
    }

}

// Assigning Port 
app.listen(1234);

/*Express Server Framework ENDS */
console.log('>>>>> Express.js Application Running successfully - Please Visit : http://127.0.0.1:1234');