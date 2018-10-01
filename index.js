
var http = require('http');
var data ;

/*Normal HTTP  */
http.createServer(function(req,res){
    
    if(req.url == '/home'){
        data = 'This is home page';
    }
    else if(req.url == '/dashboard'){
        data ='Hey it is dashboard page';
    }
    res.end(data);
    
}).listen(5678)

console.log('>>>>  HTTP Application Running successfully - Please Visit : http://127.0.0.1:5678');
