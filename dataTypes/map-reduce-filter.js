let arr = [1, 2, 3, 4];

//map方法, 逐个取出元素进行处理
let res = arr.map(function (n) {
    return n * n;
});

//reduce方法, 传入元素处理, 并将结果传入下一个元素做累积计算
//这里map赋初值为{}
let res = arr.reduce(function (map, n) {
    if (map[n] !== undefined) {
        map[n] += 1;
    } else {
        map[n] = 1;
    }
    return map;
}, {});

//filter方法, 逐个处理元素, 保留条件为true的元素
let res = arr.filter(function (n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
});
