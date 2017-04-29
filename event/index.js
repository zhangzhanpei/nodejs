const Event = require('events');

const myEvent = new Event();

//定义事件并且触发 ok 事件
myEvent.on('ok', () => {
    console.log('ok');
});

myEvent.emit('ok');

//定义一次性事件, 并且是异步的
myEvent.once('event', a => {
    setImmediate(() => {
        console.log(a);
    });
});

myEvent.emit('event', 'Hello World'); //第一次触发会打印 Hello World
myEvent.emit('event', 'Ahhhhhhhhhh'); //这里的不会有输出

myEvent.on('error', (err) => {
    console.error('出错啦!!!');
});

myEvent.emit('error', new Error('whoops!'));
