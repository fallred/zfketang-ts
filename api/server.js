let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let session = require('express-session');
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','http://localhost:8080');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS');
    // 允许跨域传递cookie
    res.setHeader('Access-Control-Allow-Credentials','true');
    if(req.method == 'OPTIONS'){
        res.end("");
    } else {
        next();
    }
});
app.use(bodyParser.json());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'zhufeng'
}));
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
let users = [];
app.post('/api/reg', function(req,res){
    let user = req.body;//{username:'18023456734',password:'123456'}
    user.id = users.length > 0?users[users.length -1].id + 1 : 1;
    users.push(user);
    res.json({
        code:0,
        data:{
            user,
            success: '注册成功'
        }
    });
});

app.post('/api/login', function(req,res){
    let user = users.find(item=>item.username == req.body.username && item.password == req.body.password)
    if (user) {
        // 把登录成功的用户存放到会话中去
        req.session.user = user;
        res.json({
            code:0,
            data:{
                user,
                success: '登录成功'
            }
        });
    } else {
        res.json({
            code:1,
            data: {
                success: '登录失败'
            }
        });
    }
});
app.listen(3000);