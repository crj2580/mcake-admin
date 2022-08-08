/*
 *
 * 　　┏┓　　　┏┓+ +
 * 　┏┛┻━━━┛┻┓ + +
 * 　┃　　　　　　　┃
 * 　┃　　　━　　　┃ ++ + + +
 *  ████━████ ┃+
 * 　┃　　　　　　　┃ +
 * 　┃　　　┻　　　┃
 * 　┃　　　　　　　┃ + +
 * 　┗━┓　　　┏━┛
 * 　　　┃　　　┃
 * 　　　┃　　　┃ + + + +
 * 　　　┃　　　┃
 * 　　　┃　　　┃ +  神兽保佑
 * 　　　┃　　　┃    代码无bug
 * 　　　┃　　　┃　　+
 * 　　　┃　 　　┗━━━┓ + +
 * 　　　┃ 　　　　　　　┣┓
 * 　　　┃ 　　　　　　　┏┛
 * 　　　┗┓┓┏━┳┓┏┛ + + + +
 * 　　　　┃┫┫　┃┫┫
 * 　　　　┗┻┛　┗┻┛+ + + +
 *
 *
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-07-26 13:06:50
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */


const express = require('express');
const vertoken = require('../tools/token');
const router = express.Router();

router.post('/api1/login',(req,res)=>{
    const {userName,password} = req.body;
    if(userName=='admin'&& password == '123456'||userName=='visitor'&& password == '123456'){
      vertoken.setToken(userName,password).then(token=>{
        res.end(JSON.stringify({
          code: 200,
          message: '登录成功',
          data: {
            token: token
          },
        }))
      });
    }else{
        res.json(
          {
            code: 400,
            message: '账号密码错误',
          }
        )
    }
});

router.get('/api1/userinfo',(req,res)=>{
  res.json({
    code: 200,
    message: '获取用户信息成功',
    data: {
      id: 1,
      name: req.data.userName,
      role: req.data.userName,
      avatar: '',
    },
  })
})

module.exports = router;