//push执行后返回数组长度
//_proto_隐式链接 原型链 实例对象与原型之间的链接
//原型链最外层是Object.prototype
//Array.prototype.constructor=Aaa;//程序自动写的
//for in循环不到
/*instanceof运算符
1.可以做到类型的判断
2.对象与构造函数在原型链上是否有关系*/
/*function Aaa() {

}
Aaa.prototype={
    name:'小明',
    age:20,
    constructor:Aaa
};
//Aaa.prototype.name='小明';
//Aaa.prototype.age=20;
var a1=new Aaa();
alert(a1.constructor);*/
/*toString() object上的方法 做类型判断
系统对象下面都是自带的，自己写的对象都是通过原型链找object下面的
作用：把对象转成字符串*/
/*
var arr=[1,2,3];

Array.prototype.toString=function () {
    return this.join('+'); //重定义
};

var num=55;
alert(num.toString(16));//转换16进制

//利用toString做类型判断
var arr1=[];
Object.prototype.toString.call(arr1);//!***********以这个环境来执行toString*********
Object.prototype.toString.call(arr1)==='[Object Array]';//数组类型判断
推荐使用，其他在跨页面的时候会出错*/
