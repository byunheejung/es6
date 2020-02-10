// // es5
// var codyA = new Object();
// codyA.living = true;
// codyA.age = 33;
// codyA.gender = 'male';
// codyA.getGender = function() {return cody.gender;};
// console.log(codyA);
// var Person = function(living, age, gender){
//     this.living = living;
//     this.age = age;
//     this.gender = gender;
//     this.getGender = function() {return this.gender;};
// }
// var cody = new Person(true, 33, 'male');
// console.log(cody);
// var Person = function person(living, age, gender){
//     this.living = living;
//     this.age = age;
//     this.gender = gender;
//     this.getGender = function() {return this.gender;};
//     /* new 키워드와 함께 생성자 함수를 호출하면 undefined 대신 "this"가 반환된다. */
// }
// // Person 객체의 인스턴스를 만들어 cody에 저장한다.
// var cody = new Person(true, 33, 'male');
// // cody는 Person()의 객체이자 인스턴스다.
// console.log(typeof cody); // object
// console.log(cody); // cody 가 포함한 속성과 값이 기록된다.
// console.log(cody.constructor); //Person 함수가 기록된다.
// var myNumber = new Number(23);    //객체
// var myNumberLiteral = 23;    // 원시 숫자값, 객체가 아님
// var myString = new String('male');    //객체
// var myStringLiteral = 'male';    //원시 문자열값, 객체가 아님
// var myBoolean = new Boolean(false);    //객체
// var myBooleanLiteral = false;    // 원시 불리언값, 객체가 아님
// var myObject = new Object();
// var myObjectLiteral = {};
// var myArray = new Array('foo', 'bar');
// var myArrayLiteral = ['foo', 'bar'];
// var myFunction = new Function("x", "y", "return x*y");
// var myFunctionLiteral = function(x,y) {return x*y};
// var myRegExp = new RegExp('\bt[a-z]+\b');
// var myRegExpLiteral = /\bt[a-z]+\b/;
// console.log(myNumber.constructor, myNumberLiteral.constructor);
// var objectFoo = {same : 'same'};
// var objectBar = {same : 'same'};
// //false 
"use strict";