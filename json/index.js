//object -> json
let obj = {
    "name": "zhangsan",
    "age": 14,
    "skills": ["JS", "Java"]
}
// let json = JSON.stringify(obj, ["name", "skills"]); //输出到json时只输出部分属性

function toUpper(key, val)
{
    if (typeof(val) === 'string') {
        return val.trim();
    }
    return val;
}
let json = JSON.stringify(obj, toUpper); //传入函数逐个处理属性值, 包括数组中的值
console.log(typeof(json)); //output: string

//json -> object
let object = JSON.parse(json);
console.log(typeof(object)); //output: object
console.log(object.name); //output: zhangsan
