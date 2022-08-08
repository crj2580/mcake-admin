const jwt = require('jsonwebtoken');
const jwtScrect = 'hello_token';  //签名

const setToken =function(userName,password){
        return new Promise((resolve,reject)=>{
            const token = jwt.sign({ userName, password }, jwtScrect, { expiresIn: '24h' });
            resolve(token);
        })
}

const getToken = function(token){
    return new Promise((resolve,reject)=>{
        if (!token) {
            console.log('token是空的')
            reject({
                error: 'token 是空的'
            })
        }
        else {
            //第二种  改版后的
            var info = jwt.verify(token.split(' ')[1], jwtScrect);
            resolve(info);  //解析返回的值（sign 传入的值）
        }
    })
}


module.exports = {
    setToken,
    getToken
}