//map 字典, 如 json 格式
var m = new Map();
m.set('name', 'zhangsan'); //添加键值
m.set('age', 20);
m.set(1, 'one'); //可以使用数字键, 这就是和对象的区别, 对象的属性名称只能是 string 类型
m.has('age'); //是否存在某个key
m.get('age'); //获取某个键值
m.delete('name'); //删除键值


//set 集合, 所有元素都是唯一的
var s = new Set();
s.add(1); //添加集合元素
s.add(2);
s.add(3);
s.delete(1); //删除元素
// console.log(s);


//map 和 set 的遍历
//for ... of
for (let i of s) {
    console.log(i);
}

//forEach
m.forEach(function(val, key, set) {
    console.log(key + ' => ' + val);
});
