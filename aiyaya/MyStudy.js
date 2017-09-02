//对象
/*var book = {
	name: "javascript指南",
	price: 8
}
//访问对象
console.log(book.name);
console.log(book['price']);*/

/*function plus(x){
	return x+1;
}
var square = function(x){
	return x*x;
}
var res = square(plus(2));*/
/*a = [1,67,9,10,1,2];
console.log(a.sort());*/
/*var x = .3 - .2;
var y = .2 - .1;
console.log(x==y);
*/
/*
*时间
*/
/*var then = new Date(1993,11,20);
var later = new Date(1993,12,20,17,10,20);
var now = new Date();
var elapsed = now-then;
console.log(later.getFullYear());*/
//字符串直接量
/*var s = "hello,world";
s.toUpperCase();
console.log(s)*/
/*var o = {x:1}; //定义一个对象
o.x = 2;
o.y = 3;
console.log(o);

var a = [1,2,3];
a[0] = 0;
a[3] = 4;*/
/*var a = ['a','b','c'];
var b = [];
for(var i = 0; i < a.length; i++){
	b[i] = a[i];
}*/
//比较两个数组的函数
/*function equalArrays(a,b){
	if(a.length != b.length) console.log(1);
	for(var i = 0; i < a.length; a++){
		if(a[i] !== b[i]) console.log(2);
		console.log(3);
	}
}
var a = [1,2,3,7];
var b = [1,2,3];
equalArrays(a,b);*/
/*function say667() {
  // 局部变量num最后会保存在闭包中
  var num = 42;
  var say = function() { console.log(num); }
  num++;
  return say;
}
var sayNumber = say667();
sayNumber(); // 输出 43*/
/*function a(){
	var i=0;
	function b(){
		alert(++i);
}
return b;
}
//var c=a();
a();*/
/*var n = 17;
binary_string = n.toString(2);
octal_string = n.toString(8);
console.log(n);
console.log(binary_string);
console.log(octal_string);*/
/*var n = 12345.6789;
console.log(n.toFixed(0)); //123456
console.log(n.toFixed(1)); //12345.6
console.log(n.toFixed(2)); //12345.67
*/
/*var n = parseInt('3 hello');
console.log(n);
*/
/*var o = {x:1,y:2};
console.log(o.toString());*/
/*var d = new Date();
console.log(d.valueOf());*/
/*for(var i = 0;i < 10; i++){
	console.log(i);
}*/
/*var scope = 'global';
function checkscope(){
	scope = 'local';
	myscope = 'local2';
	return [scope,myscope];
}
console.log(checkscope());*/
/*function test(o){
	var i = 0;
	if(typeof(o) == 'object'){
		var j = 0;
		for(var k = 0; k < 10; k++){
			console.log(k); //0 1 2 3 4 5 6 7 8 9
		}
		console.log(k);//10
	}
	console.log(j);//0
}
var o = [1,2,3];
test(o);*/
/*var scope = 'global';
function test(){
	//console.log(scope); //undefined
	var scope = 'local'; 
	//console.log(scope); //local
}
test();
console.log(scope);*/
/*var n = 1;
m = 2;
this.z = 3;
delete n;
delete m;
delete this.z;*/
//var 0 = {x:1, y:{z:3}};
/*var point = {x:1, y:2};
console.log('x' in point)*/
/*var data = [7,8,9];
console.log(0 in data); //true
console.log(3 in data); //false
console.log(7 in data) //false*/
/*var d = new Date();
d instanceof Date;
d instanceof Object;
d instanceof Number;
*/
/*var o = {x:0};
var p = null;
console.log(o&&o.x);*/
/*var data = [1,2,3];
var i = 2;
data[i++] *= 2;*/
//console.log
/*x>0?x:-x;
console.log()*/
/*var a = [1,2,3,4,45,5,5,5,]; 
delete(a[0]);*/
/*var o = {x:1, y:2};
delete(o.x);*/
/*for(var i=0,j=10; i < j;i++,j--){
	console.log(i+j);
}*/
/*var name = 'aiyaya';
greeting = "hello"+name;
console.log(greeting);*/
/*var n=0
while(n<10){
	console.log(n);
	n++;
}*/
/*var a = [1,2,3,4,5,6,7];
var b = [];
var n = 0;
for(b[n++] in a){
	//console.log(a[n]);
	//n++;
}*/
/*var a = [0,1,2,3,90,0,90];
for(var i=0; i<7; i++){
	if(a[i]=90) break;
}*/
/*function summ(x){
	if(typeof(x) != 'Number') throw Error('必须为数字');
	return x+x;
}
console.log(summ('hahha'));*/
/*try{
	//suma(3,4);
	console.log(1)
}
catch(e){
	alert(e);
	console.log(e);
}
finally{

}*/
/*var a1 = 2017;
var a2 = 'hello world';
var a3 = null;

var b = {m:20};
var c = [1,2,3];*/
/*var m = {a:20};
var n = m;
n.a = 19;
console.log(m.a); //19*/
/*var a = 20;
var b = a;
b = 19;
console.log(a); //20*/
/*console.log(a);
var a = 20;*/
/*function test(){
	console.log(a);
	var a = 90;
}
test();*/
/*var color = 'blue';

function changeColor() {
    var anotherColor = 'red';

    function swapColors() {
        var tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
    }

    swapColors();
}

changeColor();
*/
/*var name = 'aiyaya1';
function test(){
	var name = 'aiyaya2';
	console.log(name);
	function inner(){
		//var name = 'aiyaya3';
		console.log(name);
	}
	inner();
	//console.log(name);
}
test();*/
//console.log(name);
/*name="lwy";  
function t(){  
    var name="tlwy";  
    function s(){  
        var name="slwy";  
        console.log(name);  
    }  
    function ss(){  
        console.log(name);  
    }  
    s();  
    ss();  
}  
t();  */
//var a = new Date();
/*var a = Object.create(Object.prototype);
var b = Object.create('');*/
//用数组形式表示一个对象
/*var a ={
	x:1,
	y:2,
	z:3
}*/

/*var addr = '';
for(var i = 0; i++; i<5){
	addr += custom['address'+i];
}*/

//返回一个继承自原型对象P的属性的新对象
/*function inherit(p){
	if(p == null) throw TypeError();
	var t = typeof(p);
	if(t != 'object' && t != 'function()'){
		throw TypeError();
	}
	var m = Object.create(p);
	return m;
	//console.log(m)
}
//inherit(a); 
var o = {};
o.x = 1;
var p = inherit(o);
p.y = 2;
var q = inherit(p);
q.x = 'hhhh';*/
/*var o = {
	x:1,
	y:2,
	z:3
}
for(p in o){
	console.log(p);
}*/
/*
*把p中可以枚举的属性复制到o中
*并返回o
*如果o和p中有同名属性覆盖
*/
/*function extend(p,o){
	for(s in p){
		o[s] = o[s];
	}
	return o;
}
var b = { x: 'yayya'};
extend(a,b);
console.log(a);
console.log(b);*/
/*var a = [];
var b = ['hh',1,67,null];
var c = new Array(8,8,9,10,'p');
*/
/*var a = [1,2,3,4,4,5,6,6,7,8,8];
//遍历数组
for(var i = 0; i<a.length; i++){
	console.log(a[i]);
}*/
/*
 *创建乘法
*/


/*function calc(m,n){
	var a = new Array(10);
	for(var i = 0; i<a.length; i++){
		a[i] = new Array(10);
	}
  a[m][n] = m*n;
  console.log(a[m][n]);
}
calc(6,6);*/
/*var a = [1,'j','/','','9','0'];
a.sort(function(){

});
var b = {
	a:1,
	b:2
}*/
//foeeach()方法
/*var a = [1,2,3,45,5,6,6,7,8,8,9];
var sum = 0;
a.forEach(function(value){
	sum += value;
})*/
//在数组中查找所有出现的x并返回一个包含匹配索引的数组
/*function test(a,x){
 var arr = [];
 for(var i = 0; i<a.length; i++){
    var b = a.indexOf(x);
    console.log(b)
    arr.push(b);

 }
 return arr;
 console.log(arr)
}
var a = [1,2,3,4,5,4,3,3,3,3,6,7,8,83,3,3];
test(a,3);
*/
/*function test(a,x){
 var arr = [];
 var len = a.length;
 var pos = 0;
 while(pos<len){
 	var b = a.indexOf(x);
 	arr.push(b);
 	pos++;
 }
 return arr;
}
var a = [1,2,3,4,5,4,3,3,3,3,6,7,8,83,3,3];
test(a,'3');
*/
/*var a = [1,2,3,4,4,5,6,6,7,7,7,7,7];
console.log(a.indexOf(6));
function test(){

}*/
/*var a = {}; //定义a为一个对象
for(var i = 0; i<10; i++){
	a[i] = i*i;
}
a.length = i;*/
/*var a = 'hello world';
var n = a[3];*/
//var strict = function(){return !this;}();
/*var calc = {
	a:1,
	b:1,
	m:function(){
		//console.log(this)
		return this.a+this.b;
	}
}
calc.m();*/
/*var o = {
	m: function(){
		var self = this;
		console.log(this === o); //true

		f();

		function f(){
			console.log( this === o); //false
			console.log( self === o); //true
		}
	}
};
o.m();*/
//将对象中o中可枚举的属性放在数组a中
/*function test(o,a){
	console.log(arguments);
	if(a === undefined) a=[];
	for(pro in o) a.push(pro);
		return a;
	console.log(a);
}
o={
	x:1,
	y:2,
	z:3
}
test(o);*/
/*function f(x,y,z){
	if(arguments.length != 3){
		throw Error('错误的参数个数');
	}
}
f(5);
*/
//实参对象
/*function max(){
	max = 0;
	for(var i = 0; i<arguments.length; i++){
		if(arguments[i]>max) max = arguments[i];
	}
	console.log(arguments)
	return max;
}
n = max(1,2,3,4,4,5,5,5,65,66,7,7,8,77777,45);*/
/*function test(x){
	console.log(x);
	arguments[0] = 9;
	console.log(x);
}
test(80);*/
/*function square(x){
	return x*x;
}
var s = square;
s(5);*/
/*var a = [function(x){return x*x;},15];
console.log(a[0](a[1]));*/
/*var a = [1,5,23,2,2,67,56,'u'];
console.log(a.sort(function(x,y){
	return y-x;
}))*/
//计算阶乘并将结果保留在函数的属性中
/*function factorial(n){
	for(i=1; i<n; i++){
		n *= (n+1);
	}
	return n;
	console.log(n);
}
factorial(8);*/
/*function factorial(n){
	if(n=1){
		n=1;
	}else{
n = n*factorial(n-1);
	}
}
factorial(2);*/
/*function factorial(n){
    return n > 1 ? n * factorial(n-1) : 1;
    console.log(n);
}(5);*/
/*console.log(factorial(5));*/
/*var scope = "global scope";
(function checkscope(){
	var scope = "local scope";
	function f(){
		return scope;
		console.log(scope);
	}
	return f;
	console.log('test')
}());*/
/*test();*/
//console.log(checkscope()()); //locale scope
/*var a = new RegExp();*/
//实现一个能表示值的范围的类
/*function range(from,to){
	this.from = from;
	this.to = to;
}
range.prototype = {
	//一个方法
	includes:function(){ return this.from <= x && x <= this.to;},
	foreach:function(){f}{
		for(var i = Math.ceil(this.from); i<this.to; i++)
			f(i);
	},
	toString:function(){return this.to}

}*/
//setTimeout(function(){alert('hello')},2000);
function inherit(p){
	if(p == null) throw TypeError();
	var t = typeof(p);
	if(t != 'object' && t != 'function()'){
		throw TypeError();
	}
	var m = Object.create(p);
	return m;
	//console.log(m)
}
/*function range(from,to){
	//返回以range.method为原型的一个对象
	var r = inherit(range.method);

	r.from = from;
	r.to = to;
  
  return r;
}
var t = new Date();*/
//构造函数
/*function range(from,to){
	this.from = from;
	this.to = to;
}
range.prototype = {
	includes: function(x){
		return this.from<=x && this.to>=x;
	},
	foreach: function(){
		console.log('hahhahha');
	},
	b:function(){
		console.log('b');
	}
}
var a = new range();*/
//var F = function(){};
//构造函数
/*function Panda(){
	this.name = 'pangda'; //this指代实例对象
}
//类的属性和方法也可以定义在构造函数的prototype上
Panda.prototype.weigth = function(){
	console.log('50kg');
}
var a = new Panda;
console.log(a.name);
*/
/*var panda = {
	name: "pangda",
	weigth: "50kg"
}
var a = Object.create(panda);*/
//var score;
//var score;
/*function classify(score){
	//var score = 87;
	var n = parseInt(score/10);
	//console.log(n);
	switch(n){
		case 9: console.log('100-90分');
		break;
		case 8: console.log('90-80分');
		break;
		case 7: console.log('80-70分');
		break;
		case 6: console.log('70-60分');
		break;
		case 5: console.log('60-50分');
		break;
		case 4: console.log('50-40分');
		break;
		case 3: console.log('40-30分');
		break;
		case 2: console.log('30-20分');
		break;
		case 1: console.log('20-10分');
		break;
	}
}
classify(89);
classify(70);*/
//计算一个数组中出现次数最多的值
//并且打印他的位置
/*function total(arr){
	var n = arr.length;
	forEach()
}*/
 /*var arr = ['a','x','b','d','m','a','k','m','p','j','a'];
     //定义一个result对象
    var result={};
   //item为数组中每一项的值，index为索引
    arr.forEach(function(item,index){
        //将arr数组的值，作为result对象的键key
        var key = result[item];
        if(key){
            //key.num为字母出现的次数
            key.num+=1;
            console.log(key);
            //key.position[]存放出现的位置
            key.position.push(index);
        }else{
            result[item]={num:1,position:[index]};
        }
    });
    //获取排序后最大的键名
    var maxChar = Object.keys(result).sort(function(a,b){
        return result[a].num < result[b].num;
    })[0];

    alert('出现次数最多的字母是：'+maxChar+'，共出现了'+ result[maxChar].num +'次，它在数组中的位置是：'+ result[maxChar].position);*/
   /* function total(arr){
    	var res = {};
    	arr.forEach(function(item,index){
    		var key = res[item];
    	})
    }*/

    /*  console.log('EC0');
    function funcEC1(){
        console.log('EC1');
        function funcEC2(){
            console.log('EC2');
            var funcEC3 = function(){
                console.log('EC3');
            };
        }
        funcEC2();
    }
    funcEC1();*/
/*var a = "global var";

function foo(){
    console.log(a);
}

function outerFunc(){
    var b = "var in outerFunc";
    console.log(b);
    
    function innerFunc(){
        var c = "var in innerFunc";
        console.log(c);
        foo();
    }
    
    innerFunc();
}


outerFunc()*/
/*
global var
 var in outerFunc
  var in innerFunc
global var
*/
/*function foo(i) {
  if (i < 0) return;
  console.log('begin:' + i);
  foo(i - 1);
  console.log('end:' + i);
}
foo(2);*/
/*function foo1(a){
    console.log(a)
    function a(){} 
}
foo1(20)*/
/*function foo3(a){
    var a = 10
    function a(){}
    console.log(a)
}
foo3(20) //'10'*/
/*var a = 100;
function test(){
	console.log(a);
}
test();*/
//window.location = 'http://www.baidu.com';
/*function disPlayTime(){
	var elt = document.getElementById("clock");
	var now = new Date();
	elt.innerHTML = now.toLocaleTimeString();
	setTimeout(disPlayTime,1000); 
}
window.onload = disPlayTime;*/
//定时器应用函数
/*function invoke(){

}*/
/*location = 'http://www.baidu.com';*/
/*history.go(-2);*/
/*function foo(x) {
    var tmp = 3;
    function bar(y) {
        console.log(x + y + (++tmp));
    }
    bar(10);
}
foo(2)*/
/*function foo(x) {
    var tmp = 3;
    return function (y) {
    	console.log(x);//2
    	console.log(y);//10
        console.log(x + y + (++tmp));
    }
}
var bar = foo(2); // bar 现在是一个闭包
bar(10);*/
/*function foo(x) {
var tmp = 3;
return function (y) {
    console.log(x + y + tmp);
    x.memb = x.memb ? x.memb + 1 : 1;
    console.log(x.memb);
    }
}
var age = new Number(2);
console.log(age);
var bar = foo(age); // bar 现在是一个引用了age的闭包
bar(10);*/
/*do {
	var name = prompt('what is your name?');
	var correct = confirm("You entered "+ name );
}while(correct)
 alert("hello"+name);*/
 //var args = dialogArgument
/* var ui = ['input','prompt','heading'];*/
/**
  *
  *
**/
/*function getEle(){
	var elements = {};
	console.log(arguments);
	for(var i = 0; i<arguments.length; i++){
		var id = arguments[i];
		var elet = document.getElementById(id);
		console.log(elet)
		if(elet == null)
			throw new Error('不存在Id的值');
		elements[id] = elet;
		}
		console.log(elements);
}
getEle('ty','hj');
*/
/*function test(){
	var ele = document.getElementById('test').querySelectorAll('li');
	for(var i = 0; i<ele.length; i++){
		//console.log('第一个'+i)
		//var a = i;
		ele[i].onclick = function(){
			/*console.log('i'+i)
			console.log('a'+a)*/
			//console.log(i)
			/*console.log(this)
			console.log(this.i);*/
	/*	}
	}
}
test();*/
/*function test(){
	var ele = document.getElementById('test').querySelectorAll('li');
	for(var i = 0; i<ele.length; i++){
		ele[i].onclick = function(){
			return function(){
				console.log(i);
			}
		}
	}
}
test();*/
//onsole.log(f1)
/*function f1(arg){
	console.log(arg);
	console.log(arguments);
}
f1(2,3,4,5,7);*/
/*function Foo(){
	this.name = 'aiyayay';
	this.age = 18;

	console.log(this);
}
f = new Foo();*/
//console.log(f)
/*console.log(a); //function a(){}
function a(){}; */
/*function test(a){
	console.log(a);
	console.log(arguments);
}
test(8);*/
/*var a = 10;
function fn(){
	console.log(a);
}
function bar(f){
	var a = 20;
	f();
}
bar(fn);//10*/
/*var obj = {
	a: 1,
	b: 2,
	fn: function(){
		console.log(this); //Object {a: 1, b: 2, fn: function}
		function fn1(){
			console.log(this);  //window
		}
		fn1();
	}
}
obj.fn();*/
/*var a = 10;         //1.进入全局上下文环境
var fn;
var bar = function(x){
	var b = 5;
	console.log(arguments)
	fn(x+b);  //进入fn
}
fn = function(y){
	var c = 5;
	console.log(c+y);
}
bar(10);  //2.进入bar函数上下文环境*/
/*var a = 10;
var b = 20;
function fn(){
	var a = 100;
	console.log(a); //100
	function bar(){
		var a = 1000;
		console.log(a) //1000
	}
	return bar();
}
fn();*/
/*var a = 20;
function fn(){
	var b = 10;
	console.log(a+b); //30
}
fn();*/
/*var x = 10;
function fn(){
	console.log(x); //10
}
function show(f){
	var x = 20;
	(function(){
		f();  
	})();
}
show(fn);*/
/*function fun(n,o) {
    console.log(o);
        return {
            fun:function(m) {
                return fun(m,n);
            }
        };
}
var a = fun(0); a.fun(1);  a.fun(2);  a.fun(3);  
var b = fun(0).fun(1).fun(2).fun(3);
var c = fun(0).fun(1);  c.fun(2);  c.fun(3);*/
/*function f() { 
	var num = 1;
		function g() { 
			console.log(num); 
		} 
	num++; 
	g(); //2 
  }
f();

(function() { 
var m = 0; 
function getM() { 
return m; 
} 
function seta(val) {
 m = val; 
 } 
 window.g = getM; 
 window.f = seta; })(); 
 f(100); 
 console.info(g()); *///100
//递归
/*function fac(number){
	if(number == 1){
		return number;
	}
	else{
  	return number*fac(number-1);
	}
}
console.log(fac(6));*/
/*var number = new Array(10,20);*/
//数组
/*var sentences = 'Happiness is a way station between too much and too little'
var words = sentences.split(" ");
for(var i = 0; i<words.length; i++){
	console.log("word:"+i+words[i]);
}*/
/*var num = [];
for(var i = 0; i<10 ; i++){
	num[i] = i;
}
var samenum = num;
console.log(samenum);*/
//深复制
/*function copy(arr1,arr2){
	for(var i = 0; i < arr1.length; i++){
		arr2[i] = arr1[i];
	}
}
var numbs = [];
for(var i = 0; i<20; i++){
	numbs[i] = i;
}
var samenum = [];
numbs[0] = 200;
copy(numbs,samenum);

console.log(samenum[0]);*/
/*var colors = ['red','pink','yellow','green','blue'];
/*console.log(colors);
var colors2 = colors.join('1');
console.log(colors2)*/
/*var fruits = ['apple','pear','peach','watermelon'];
var res = colors.concat(fruits);
var res2 = colors.splice(0,2)
console.log(res2)*/
//在数组的第一个索引之前添加数据
/*var num = [1,2,3,4,5,6,7];
function fn(arr,a){
  arr[0] = a;
  len = arr.length++
	for(var i = 2; i<len; i++){

		arr[i-1] = arr[i];
		//console.log(arr[1])
		console.log(i,arr[i])
	}
	
}
fn(num,12);*/
/*var nums = [1,2,3,4,5,6,7];
var newnum = 12;
nums.unshift(newnum);
console.log(nums)*/
/*function fn(arr,a){
	var len = arr.length;
	for(var i = len; i >= 0; --i){
		arr[i] = arr[i-1];
	}
	arr[0] = a;
}
fn(nums,newnum);
console.log(nums);*/
//从数组开头删除元素
//var nums = [1,2,3,4,5,6,7,8,9];
/*function fn(arr){
	var len = arr.length;
	for(var i = 0; i<len; ++i){
		arr[i] = arr[i+1];
	}

}
nums.shift();
console.log(nums); //[2, 3, 4, 5, 6, 7, 8, 9, undefined]*/
/*nums.reverse();
console.log(nums);*/
/*function square(num){
	console.log(num,num*num);
}
var nums = [1,2,3,4,5,6];
nums.forEach(square);*/
/*var nums = [1,2,3,4,5,6,7,8,9];
function isEven(num){
	return num % 2 == 0;
}
var even = nums.every(isEven);
if(even){
	console.log('所有数据都是奇数');
}
else{
	console.log('并不是所有数据都是奇数');
}*/
/*function add(a,b){
 return a*b;
}
var nums = [1,2,3,4,5,6];
var res = nums.reduce(add);
console.log(res); //720
console.log(nums)*/
/*function curve(grade){
	return grade += 5;
}
var grades = [77, 65, 81, 92, 83];
var newgrades = grades.map(curve);
console.log(newgrades) */
/*function first(word) {
	return word[0];
}
var words = ["for","your","infomation"];
var acc = words.map(first);
console.log(acc.join("")); //fyi*/
/*function isEven(num){
	return num % 2 == 0;
}
var arr = [1,2,3,4,5,6,7,8,9];
var even = arr.filter(isEven);*/
/*for(var i = 0; i<arr.lenth; i++){
	arr[i].filter(isEven);
}
*/
/*function passing(num){
	return num >= 60;
}
var grades = [];
for(var i = 0; i < 20; i++){
	grades[i] = Math.floor(Math.radom()*101);
}
var passGrades = grades.filter(passing);*/
//建立一个10*5的数组
/*var row = 10;
var col = 5;
var arr = [];
var b = [];
for(var i = 0; i<row; i++){
	arr[i] = [];
}
for(var j = 0; j<col; j++){
	b[j] = arr; 
}
console.log(b)*/
//高端方法
/*Array.matrix = function(numrows, numcols, initial){
	var arr = [];
	for(var i = 0; i<numrows; ++i){
		var column = [];
		for(var j = 0; j<numcols; ++i ){
			column[j] = initial; 
		}
		arr[i] = column;
	}
return arr;
}
var nums = Array.matrix(5,5,0);
console.log(nums);
*/
/*var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
var total = 0;
var average = 0.0;
for(var row = 0; row<grades.length;++row){
	for(var col = 0; col<grades[row].length; ++col){
		total += grades[row][col];
	}
	average = total/ grades[row].length;
	console.log(average)
}*/
/*
 *创建一个记录学生成绩的对象
 *提供一个添加成绩的方法
 *以及一个显示学生平均成绩的方法
 */
/*function averGrade(gradeArr){
	for(var i = 0; i < gradeArr.length; i++){
		var sum += gradeArr[i];
	}
	var averGra = sum/ gradeArr.length;
	return averGra;
}*/
//添加成绩的方法
/*function addGrade(grade){
	var len = arguments.length;
	//console.log(arguments);
	var arr = new Array();
	for(var i = 0; i<len ; i++){
		//console.log(arguments);
	arr.push(arguments[i]);
  }
console.log(arr)
}
addGrade(12,34,45,67);
//显示平均成绩
function averyGrade(grade){
	var sum = 0;
	for(var i = 0; i<grade.length; i++){
		 sum +=  grade[i];
	}
	//console.log(sum)
	var aver = sum/grade.length;
	console.log(aver);
}
var grade = [89,90,78];
averyGrade(grade);*/
/*function studentGrade(){
	this.grade = [];
	this.addGrade = function(grade){
		var len = arguments.length;
	  //console.log(arguments);
	  //var arr = new Array();
	  for(var i = 0; i<len ; i++){
		//console.log(arguments);
	  this.grade.push(arguments[i]);
   }
   console.log(this.grade)
   
	}
	this.averGrade = function(grade){
		console.log(this.grade)
		var sum = 0;
	  for(var i = 0; i<this.grade.length; i++){
		  sum +=  this.grade[i];
	  }
	  //console.log(sum)
	  var aver = sum/ this.grade.length;
	  console.log(aver);
	}
}
var a = new studentGrade();
a.addGrade(78,89,90);
a.averGrade(this.grade);*/
/*function test(a){
	console.log(a);
	console.log(arguments);
}
test(8);*/
/*function fn() {
    return function () {
        alert('示例1');
    }
}
fn()();*/
/*;(function () {
    alert('示例2');
})();*/
/*~function fn() {
    alert('示例3')
}();*/
/*var n = 10;
function fn(){
    alert(n); //undefined
    var n = 9;
    alert(n); //9
}
fn();*/
/*function greet() {
    name = 'Hammad';
    return function () {
        console.log('Hi ' + name);
    }
}
 
greet()*/
//console.log(12)
/*
进入全局代码，创建全局执行上下文，全局执行上下文压入执行上下文栈
全局执行上下文初始化
执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 执行上下文被压入执行上下文栈
checkscope 执行上下文初始化，创建变量对象、作用域链、this等
checkscope 函数执行完毕，checkscope 执行上下文从执行上下文栈中弹出
执行 f 函数，创建 f 函数执行上下文，f 执行上下文被压入执行上下文栈
f 执行上下文初始化，创建变量对象、作用域链、this等
f 函数执行完毕，f 函数上下文从执行上下文栈中弹出*/
/*var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        console.log(scope);
    }
    return f;
}
 
var foo = checkscope();
foo(); //*/
/*实现列表类*/
function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = []; //初始化一个空数组来保存列表元素
	//this.clear = clear;
	this.find = find;
	/*this.toString = toString;
	this.insert = insert;*/
	this.append = append;
	this.remove = remove;
	this.length = length;
	this.toString = toString;
	this.insert = insert;
	this.clear = clear;
	this.contains = contains;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.hasNext = hasNext;
	this.hasPrev = hasPrev;
	/*this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.hasNext;
	this.hasPrev;
	this.length = length;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.contains = contains;*/
}
/*给列表添加元素*/
function append(ele){
	this.dataStore[this.listSize++] = ele;
}
/*从列表中找到需要删除的元素*/
/*function find(ele){
	for(var i = 0 ; i<this.listSize; i++){
		if(this.dataStore[i] == ele){
			return i;
			
		}else{
			return -1;
		}
	}
	
}*/
/*删除列表中的元素*/
/*function remove(ele){
	//console.log(this)
	var foundAt = this.find(ele);
	console.log('foundAt'+foundAt)
	if(foundAt >= -1){
		console.log(ele)
    this.dataStore.splice(foundAt,arguments.length)
		//--this.listSize;
		console.log('删除之后'+this.dataStore)
		return true;
	}
	return false;
}
//长度
function length(){*/
	//console.log(this)
	//return this.listSize;
	//console.log('长度是'+this.listSize);
	//return this.listSize;
	//alert('hahha')
/*}
*///显示列表中的元素
/*function toString(){
	console.log('所有数据是'+this.dataStore);
}*/
//向列表中某个元素之后插入一个元素
/*function insert(ele,after){
	var pos = this.find(after);
	console.log(after)
	console.log(pos)
	if(pos>-1){
		this.dataStore.splice(pos+1, 0, ele);
		++this.listSize;
		console.log('插入之后'+this.dataStore)
		return true;
	}
	return false;
}
//清空列表里所有元素
function clear(){
	delete this.dataStore;
	this.dataStore.length = 0;
	this.listSize = this.pos = 0;
}*/
//判断给定值是否在列表中
/*function contains(ele){
	for(var i = 0; i<this.dataStore.length; i++){
		//console.log(1)
		if(this.dataStore[i] == ele){
			console.log(ele+' is contained');
		}else{
			//console.log('There is no such an element');
		}
	}
}
//遍历列表
function front(){
	this.pos = 0;
	//console.log(this.dataStore)
	return this.pos;
}
function end(){
	this.pos = this.dataStore.length-1;
}
function prev(){
	--this.pos;
}
function next(){
	if(this.pos < this.listSize){
		++this.pos;
	}
	return this.pos;
}
function currPos(){
	return this.pos;
}
function moveTo(postion){
	this.pos = postion;
}
function getElement(){
	console.log(this.dataStore[this.pos]);
	console.log(this.pos)
	return this.dataStore[this.pos];
}
function hasNext(){
	return this.pos < this.listSize;
}
function hasPrev(){
	return this.pos >= 0;
}
var testList = new List();
testList.append('a');
testList.append('b');
testList.append('c');*/
//console.log(testList.dataStore)
//testList.find('a');
//testList.remove('a');
//testList.insert('aiyaya','b');
//testList.length();
//testList.toString();
//testList.contains('bb');
//console.log(testList.dataStore)
/*var arr = ['a','b','c','d'];
arr.splice(0,1);
console.log(arr)*/
/*var names = new List();
names.append('aiyaya');
names.append('Eason');
names.append('waterson');
names.append('jack');
names.front();
names.getElement();*/
/*names.next();
names.getElement();
names.next();
//names.getElement();
names.front();
names.getElement();
*/
/*
*一个基于列表的应用
*影碟清单
*/
//var movies = read(fiml.txt).split("\n");
/*var fso = new ActiveXObject("Scripting.FileSystemObject");
var f = fso.opentextfile('film.txt',1,true);
var movies = f.Read();*/
/*var movies = ['不能说的秘密','蓝色大门','肖申克的救赎','小男孩'];

var movieList = new List();
for(var i = 0; i<movies.length; i++){
  console.log(movies[i])
	movieList.append(movies[i]);
  //alert('test')
}*/
//console.log(movieList)
//展示
/*function display(list){
	console.log(list);
	console.log(list.front()) //0
	console.log(list.currPos()) //0
	console.log(list.length()) //4
	console.log(list.next()) //undefined
	console.log(list.hasNext())*/
	/*for(list.front(); list.currPos()<list.length(); list.next()){
		console.log(list.getElement())
	}*/
	//alert(123)
/*}
*////display(movieList);
//栈的实现
function Stack(){
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
}
//入栈操作push
function push(ele){
	this.dataStore[this.top++] = ele;
}
function pop(){
	return this.dataStore[--this.top];
}
function peek(){
	return this.dataStore[this.top-1];
}
function clear(){
	this.top = 0;
}
function length(){
	return this.top;
}
/*var s = new Stack();
s.push('a');
s.push('b');*/
//console.log(s.dataStore)
//通过栈实现数制间的相互转换
/*function numChange(num,a){
	var s = new Stack();
	do{
		s.push(num%a);
		num = Math.floor(num /= a);
	}while(num=0);
	var converted = "";
	while(s.length() > 0){
		converted += s.pop();
	}
	console.log(converted);
	return converted;
}
//var num = new Stack();
var num1 = numChange(9,2);*/
//括号是否匹配
function match(equation){
	var a = new Stack();
	
	str = equation.toString().split('');

	console.log(str);

  for(var i = 0; i<str.length; i++){

  	switch(str[i]){

  		case '(': a.push(str[i]);console.log(a.dataStore); break;
  		
  		case ')': a.pop(str[i]);console.log(a.dataStore); break;

  		console.log(a.dataStore);

  		default: ;
  	}
  }

	if(a.length = 0){
		console.log('匹配成功')
	}else{
		console.log("匹配不成功");
	}
}
//match('1+(2*8)');
var a = new Stack();
a.push('(');
a.push('7');
a.pop('(')
console.log(a.dataStore);
function candy(tang){
	var a = new Stack();
	var b = new Stack();
	var str = tang.toString().split('');
	//console.log(str);
	for(var i = 0; i<str.length; i++){
		a.push(str[i])
	}
	//console.log(a.dataStore);
	for(var j = 0; j<a.length; j++){
		while(a.dataStore[i] != 'C'){
			b.push(a.dataStore[i])
		}
		/*if(a.dataStore[j] == 'C'){
			a.pop();
		}else{
			b.push(a.dataStore);
		}*/
	}
	console.log(b.dataStore)
	console.log(a.dataStore)

}
//candy('ABCABBCC')
/*arr = [1,2,3,4,5,6,7,8,9,0];
*/
//队列结构的实现
function queue(){
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;

}
//enqueue方法向队尾增加一个元素
function enqueue(ele){
	this.dataStore.push(ele);
}
//dequeue方法删除队首的元素
function dequeue(){
	return this.dataStore.shift();
}
//获取队尾和队首的元素
function front(){
	return this.dataStore[0];
}
function back(){
	return this.dataStore[this.dataStore.length-1];
}
//显示队列内所有的元素
function toString(){
	var str = "";
	for(var i = 0; i<this.dataStore.length; i++){
		str += this.dataStore[i] + "\n";
	}
	return str;
}
//判断是否为空
function empty(){
	if(this.dataStore.length == 0){
		return true;
	}else{
		return false;
	}
}
var q = new queue();
q.enqueue(1)
function Dancer(name,sex){
	this.name = name;
	this.sex = sex;
}
var dancers = new Dancer();
/*
 基数排序
 先按照最高位排序
 往低位递推
*/
/*function distrubt(nums,queues,n){
	//queues.toString();
	for(var i = 0; i<n ; i++){
		//console.log(queues)
		queues.enqueue(nums[i]);
	}
	console.log(queues.dataStore)
	var a = new 
	for(var i = 0; i<n ;i++){
		queues.dataStore[i]
	}
}
var nums = new Array(98,78,67,56,45,32);
queues = new queue();
distrubt(nums,queues,6);*/
function distribute(nums, queues, n, digit){
	for(var i = 0; i < n; ++i){
		if(digit == 1){
			queues[nums[i]%10].enqueue(nums[i]);
		}
		else{
			queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
		}
	//console.log(queues.dataStore)
	}
}
//从队列中收集数字
function collect(queues,nums){
	var i = 0;
	for(var digit = 0; digit<10; ++digit){
		while(!queues[digit].empty()){
			nums[i++] = queues[digit].dequeue();
		}
	}
}
/*function dispArray(arr){
	for(var i = 0; i < arr.length; ++i){

	}
}*/
var queues = [];
for(var i = 0; i < 10; ++i){
	queues[i] = new queue();
}
//console.log(queues)
var nums = [];
for(var i = 0; i < 10; ++i){
	nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
distribute(nums, queues, 10, 1);
collect(queues, nums);
//console.log(nums)*/
/*
优先队列
*/
function Patient(name, code){
	this.name = name;
	this.code = code;  //优先级
}
/*重新定义出队列方法*/
function dequeues(){
	var entry = 0;
	for(var i = 1; i < this.dataStore.length; ++i){
		if(this.dataStore[i].code < this.dataStore[entry].code){
			entry = i;
		}
	}
	return this.dataStore.splice(entry,1);
}
/*双向队列的实现*/
function Deque(){
	this.dataStore = [];
	//this.enqueue = enqueue;
	this.deenqueue = deenqueue; //队首添加一个元素
	//this.dequeue =3 dequeue;
	this.dedequeue = dedequeue; //队尾删除一个元素
	//this.front = front;
	//this.back = back;
	//this.toString = toString;
	//this.empty = empty;

}
//队首添加一个元素
function deenqueue(ele){
	console.log(this.dataStore.length)
	if(this.dataStore.length == 0){
		this.dataStore[0] = ele;
	}else{
		for(var i = this.dataStore.length-1; i>-1; --i){
			this.dataStore[i+1] = this.dataStore[i]; 
		}
		console.log(this.dataStore)
	}
	
	this.dataStore[0] = ele;
}
/*var a = new Deque();
a.dataStore = [1,2,3,4];
console.log(a.dataStore)
a.deenqueue(2);
console.log(a.dataStore)*/
var a = new Deque();
var word = "apple";
var wordarr = word.split("");
console.log(wordarr)
for(var i = 0; i< wordarr.length; i++){
	a.deenqueue(wordarr[i]);
}



function dedequeue(){
	/*this.dataStore.pop();*/
	this.dataStore.splice(this.dataStore.length-1);
}
var b = new Deque();
b.dataStore = [1,2,3,4];
b.dedequeue();


/*function ceshi(arr,ele){
	console.log(arr.length) =
	for(var i = arr.length-1; i>-1; --i){
		arr[i+1] = arr[i]
	}
	arr[0] = ele;
}
var arr = [1,2,6]
ceshi(arr,0);
console.log(arr)*/
/*
新建一个Node类
包含两个属性element和next
*/
function Node(){
	this.element = element;
	this.next = null;
}
/*链表类*/
function LList(){
	this.head = new Node();
	this.find = find;
	this.insert = insert;
	this.remove = remove;
	this.display = display;
}
/*
find方法查找给定数据
并且返回所在位置
*/
function find(ele){
	var currNode = head;
	if(currNode.element != ele){
		currNode = currNode.next;
	}
	return currNode;
}
/*插入操作 在指定某个节点之后插入某元素*/
function insert(ele, item){
	//var currNode = this.find(ele);
  var currNode = this.find(item);
  var newNode = new Node();
  newNode.element = ele;
  newNode.next = currNode.next;
  currNode.next = newNode;
}
/*找到某个节点的前一个节点*/
function findPrevious(ele){
	var currNode = new Node();
	if()
}
function remove(ele){
	var currNode = this.find(ele);

}

