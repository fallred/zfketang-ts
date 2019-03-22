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
// 根据课程的分类获取课程列表
// http://localhost:3000/api/lessons/react?offset=0&limit=5
let lessons = require('./mock/lessons');
app.get('/api/lessons/:category',function(req,res){
    let currentLessons = JSON.parse(JSON.stringify(lessons));
    // 获取分类名称
    let category = req.params.category;
    // 偏移量
    let offset = isNaN(req.query.offset) ? 0 : parseInt(req.query.offset);
    // 每页显示条数
    let limit = isNaN(req.query.limit) ? 5 : parseInt(req.query.limit);
    if(category && category != 'all'){
        // 总数据
        currentLessons = currentLessons.filter(item => item.category == category)
    }
    // 1: 0-5 ;2: 5-10 取当前页的数据
    // 当页数据
    let list = currentLessons.slice(offset,offset+limit);
    // 后面是否还有更多
    let hasMore = currentLessons.length > offset + limit;
    setTimeout(function(){
        res.json({
            code:0,
            data: {
                list,
                hasMore
            }
        });
    },3000);
});
app.listen(3000);