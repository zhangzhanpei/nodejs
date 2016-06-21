const PI = Math.PI; //模块中的变量是私有的
exports.area = (r) => PI * r * r; //计算面积
exports.perimeter = (r) => 2 * PI * r; //计算周长
