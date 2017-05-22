const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'OHAI> '
});

rl.prompt(); //提示语

rl.on('line', (input) => { //触发换行事件
    switch(input.trim()) {
        case 'Hello':
            console.log('World!');
            break;
        default:
            console.log('Haha!!!');
            break;
    }
}).on('close', () => { //触发退出事件
    console.log('exit');
    process.exit(0);
});
