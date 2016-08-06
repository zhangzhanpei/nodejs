//格式化输出当前日期时间Y-m-d H:i:s
function formatDate()
{
    let today = new Date;
    return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
}
console.log(formatDate());

let d = new Date;
let ms = d.getTime(); //时间戳，js的时间戳精确到毫秒
console.log(Date.parse('2016-08-05')); //日期转时间戳
