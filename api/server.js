let express = require('express');
let app = express();
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','http://localhost:8080');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS');
    if(req.method == 'OPTIONS'){
        res.end("");
    } else {
        next();
    }
});
let sliders = require('./mock/sliders');
app.get('/api/sliders',function(req,res){
    console.log('sliders,',sliders);
    res.json({
        code: 0,
        data: sliders
    });
});
app.listen(3000);