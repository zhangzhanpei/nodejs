const queryString = require('querystring');

let data = {name: '张三', age: 18};
let qs = queryString.stringify(data); //构建查询参数
console.log(qs); //output: name=zhangsan&age=18 相当于 http_build_query(['name' => '张三', 'age' => 18]);

let origin = queryString.parse(qs); //解析查询参数
console.log(origin); //output: {name: '张三', age: '18'}
