// 1. 引入
const { request, response } = require('express');
const express = require('express');

// 2. 创建应用参数
const app = express();

// 3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
    // 设置响应头,设置允许跨域
    response.setHeader('Access-control-Allow-Origin', '*')
    // 设置响应体
    response.send('HELLO AJAX');
});

app.post('/server', (request, response) => {
    // 设置响应头,设置允许跨域
    response.setHeader('Access-control-Allow-Origin', '*')
    // 设置响应体
    response.send('HELLO AJAX POST');
});

app.get('/json-server', (request, response) => {
    // 设置响应头,设置允许跨域
    response.setHeader('Access-control-Allow-Origin', '*')
    // 准备数据，但是一个对象并不能直接放进send()里发送
    // 利用JSON.stringify()将其转换为字符串
    const data = {
        name: 'keke'
    }
    let str = JSON.stringify(data)
    // 设置响应体
    response.send(str);
});

// 针对延时响应
app.get('/delay', (request, response) => {
    // 设置响应头,设置允许跨域
    response.setHeader('Access-control-Allow-Origin', '*')
    setTimeout(() => {
        // 设置响应体
        response.send('HELLO AJAX DELAY');
    }, 3000)
});

// axios
app.all('/axios-server', (request, response) => {
    // 设置响应头,设置允许跨域
    response.setHeader('Access-control-Allow-Origin', '*')
    response.setHeader('Access-control-Allow-Headers', '*')
    const data = { name: 'keke' };
    response.send(JSON.stringify(data));
});

// fetch
app.all('/fetch-server', (request, response) => {
    // 设置响应头,设置允许跨域
    response.setHeader('Access-control-Allow-Origin', '*')
    response.setHeader('Access-control-Allow-Headers', '*')
    const data = { name: 'keke' };
    response.send(JSON.stringify(data));
});

// 4. 监听端口启动服务
app.listen(8000, () => {
    console.log('服务已启动，8000 端口监听中...');
})