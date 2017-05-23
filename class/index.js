//js定义一个类
class User
{
    //构造函数
    constructor(name)
    {
        this.name = name;
    }

    //普通方法, 方法都是没有 function 关键字的
    hello()
    {
        console.log(this.name);
    }
}

let zhangsan = new User('zhangsan'); //实例化一个对象
zhangsan.hello();

class Man extends User //继承父类
{
    constructor(name)
    {
        super(name); //调用父类构造函数
    }
}

let m = new Man('oole');
m.hello();
