const fs = require('fs')

//追加写文件
fs.appendFile('./message.txt', '追加写文件\n', (err) => {
    if (err) throw err;
    console.log('追加写文件成功');
});

//异步写文件
fs.writeFile('./message.txt', 'Hello, Node.js!\n', (err) => {
    if (err) throw err;
    console.log('异步写文件成功');
});

//同步写文件
fs.writeFileSync('./message.txt', '同步写文件!\n');

//异步读文件
fs.readFile('./message.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

//同步读文件
let fileContent = fs.readFileSync('./message.txt', 'utf8');
console.log(fileContent);
