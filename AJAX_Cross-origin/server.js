const { request, response } = require('express');
const express = require('express');

const app = express();

app.get('/home', (request, response) => {
    /* // 设置响应头,设置允许跨域
    response.setHeader('Access-control-Allow-Origin', '*') */
    // 设置响应体
    response.sendFile(__dirname + '/index.html');
});

app.get('/data', (request, response) => {
    response.send('here is data');
});

//jsonp
app.all('/jsonp-server', (request, response) => {
    //response.send('console.log("hello jsonp")');
    const data = {
        name: 'keke'
    }
    let str = JSON.stringify(data);
    //end不加特殊响应头
    response.end(`handle(${str})`)
})

//用户名是否存在
app.all('/check-uname', (request, response) => {
    //response.send('console.log("hello jsonp")');
    const data = {
        exist: 'keke',
        msg: 'existed username'
    }
    let str = JSON.stringify(data);
    response.send(`handle(${str})`)
})

//CORS
app.all('/cors-server', (request, response) => {
    //设置响应头,可以单独设置，也可以通配（*）
    //response.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5000");
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.send('HELLO CORS')
})

app.listen(9000, () => {
    console.log('服务已启动...');
})