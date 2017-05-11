function time1(t) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('Hello'); //成功
        }, t);
    });
}

function time2(t) {
    return new Promise((resolve, reject) => {
        if (t > 10000) {
            reject('大于10s'); //失败
        } else {
            setTimeout(() => { 
                resolve('Node.js'); 
            }, t);
        }
    });
}

//定义异步函数
async function print1(t) {
    let h = await time1(t); //await 一个 Promise 对象
    console.log(h);
}

async function print2(t) {
    let n = await time2(t);
    console.log(n);
}

//这两个 print 同时开始执行
print1(2000);
print2(3000);

//time1 和 time2 并行执行，需要等到所有异步方法返回结果才算执行完[执行时间看最慢的方法]，res 是按输入顺序返回结果组合的结果数组
Promise.all([time1(2000), time2(3000)]).then(function(res) {
    console.log(res);
});

//time1 和 time2 并行执行，只要有一个异步方法有结果则返回[执行时间看最快的方法]，后面返回的结果都被抛弃
Promise.race([time1(2000), time2(3000)]).then(function(res) {
    console.log(res);
});

console.log('wait...');
