const express = require('express');
const bodyParser = require('body-parser');
const login = require('./src/interfaces/login');
const menu = require('./src/interfaces/menu');
const test = require('./src/interfaces/test');
const article = require('./src/interfaces/article');
const cashflow = require('./src/interfaces/cashflow');

const vertoken = require('./src/tools/token');
const expressJwt = require('express-jwt').expressjwt;

const app = express();

app.use(express.static('upload'));

app.use(expressJwt({
    secret: 'hello_token',
    algorithms: ['HS256']
}).unless({
    //用户第一次登录的时候不需要验证token
    path: ['/api1/login']  //不需要验证的接口名称
}));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//解析token获取用户信息
app.use(function (req, res, next) {
    var token = req.headers['authorization'];
    if (token == undefined) {
        return next();
    } else {
        vertoken.getToken(token).then((data) => {
            req.data = data;
            return next();
        }).catch((error) => {
            return next();
        })
    }
});


app.use(login);
app.use(menu);
app.use(test);
app.use(article);
app.use(cashflow);

//token失效返回信息
app.use(function (err, req, res, next) {
    if (err.status == 401) {
        // return res.status(401).send('token失效')
        //可以设置返回json 形式  
        res.json({ status: 401, message: 'token失效' })
    }
})


app.listen(3001,()=>{
    console.log('3001端口已启用');
})