// 주석
// 한줄주석 : // code
// 여러줄 주석 : /* code */

// console.log("data");

// 식별자
// 상수 : SNAKE_KASE (대문자 스네이크 케이스)
// 변수명 : camelCase (카멜 케이스)
// 모듈 : PascalCase (파스칼 케이스)
// 파이썬의 식별자 특수기호 : _
// 자바스크립트는 : $, _
// _name : private variable, function
// $target : selector를 변수로 사용할때

var $target = 1; // jquery : javascript framework
console.log($target);

// var name = "doojin";
// console.log(name);

// var a = 1.1;
// var b = 2;
// console.log(a + b, typeof a);

// 연산자
// +, -, *, /, %, ++, --
// var number = 5;
// var result = number++; // 뒤에 ++ 연산자가 사용이 되면 값을 대입후에 1을 증가
// console.log(number, result);  // number : 6, result : 5
//
// var number = 5;
// var result = ++number;
// console.log(number, result);  // number : 6, result : 6

// 데이터 타입
// var a = 1;          //Number
// var b = 1.9;        //Number
// var c = "data";     //String
// var d = [1,2,3];    //Object
// var e = {a:1, b:2}; //Object
// var f = true;       //boolean
// console.log(typeof a,typeof b,typeof c,typeof d,typeof e,typeof f);

// null, undefined, NaN
// null : 값이 없음을 지정
// undefined : 값이 지정되지 않음
// NaN : 존재하지 않는 데이터의 형태

var a = null;
console.log(a);

var b;
console.log(b);

var c = 0/0;
// console.log(c);

// 비교연산자
// >, <, >=, <=, !=, !==, ==, ===
// 결론부터 이야기하면 무조건 === 를 쓰세요.

// ==은 데이터 값만 비교
console.log(1 == 1);    //true
console.log(1 == "1");  //true

// ===은 데이터 값과 데이터 타입을 모두 비교
console.log(1 === 1);   //true
console.log(1 === "1"); //false

// NaN
// 비교연산을 사용하지 않습니다.
// 비교연산에서 NaN이 한번이라도 언급되면 무조건 false 를 리턴합니다.
console.log(NaN === NaN);

// 할당연산자
// +=, -=, *=, /=, %= ...
var a = 1;
a += 2;
console.log(a);

// 논리 연산자
// &&(and), ||(or)
console.log(true && false); // false
console.log(true || false); // true

// 조건문
if(false){
    console.log("hello");
}else if(true){
    console.log("dss");
}else{
    console.log("world");
}

// false로 간주되는 데이터
// null, undefined, NaN, 0, ""

// true로 간주되는 데이터
// [], {}

// 문제 1. 점수를 입력하면 학점이 출력되는 코드를 작성.
// TODO: if, else if, else
// 결과가 A, B, C, D, F 로 나오면 됩니다.
var point = 78;
var result = null;
if (point >= 90) {
    result = "A";
}else if (point >= 80) {
    result = "B";
}else if (point >= 70) {
    result = "C";
}else if (point >= 60) {
    result = "D";
}else{
    result = "F";
}
console.log(result);

// 반복문
// while, for, do while
var a = 10;
while(true){
    a ++;
    if(a === 12){
        continue;
    }
    if(a > 15){
        break;
    }
    console.log(a);
}

// for(초기값; 조건; 변수값변경)
for(var i = 0; i<5; i++){
    console.log(i);
}


// 배열
var arr = ['a','b','c','d','e'];
console.log(arr[2]);
console.log(arr.length);
arr.push('f'); // python - append
console.log(arr);
arr.unshift('z');
console.log(arr);
var result = arr.pop();
console.log(arr, result);

var result = arr.splice(2,3); // 2번에서 1개 자르기
console.log(arr, result);

// 객체 - object
var obj = {};
obj.name = "doojin";
obj['familyName'] = "park";
console.log(obj);

for(var key in obj){
    console.log(key, obj[key]);
}

var user = {

    name: 'doojin',
    age: 45,
    addr: 'seoul',

    skill: function(){
        console.log('coding');
    }
};


// 모듈 패턴
// OOP - 추상화, 캡슐화

// Module이라는 객체가 이미 선언이 되어 있으면 Module 객체
// Module 변수에 대입이 되고, 없으면 {} 빈 객체각 대입
var Module = Module || {};

// function에서 Module args로 받습니다.
// _Module 모듈에 setName, getName함수를 추가해줍니다.
// Module에서 setName, getName함수를 호출이 가능
(function(_Module){

    var _name = 'doojin';
    var _disp = function(){
        console.log(_name);
    };

    _Module.getName = function(){
        return _name;
    };

    _Module.setName = function(name){
        _name = name;
    };

})(Module);

console.log(Module.getName());

// 함수
// 호이스팅 - hoisting
function sum(num1, num2){
    return num1 + num2;
}
var result = sum(1, 2);
console.log(result);

var minus = function(num1, num2){
    return num1 - num2;
};
var test = 1;

// 스코프
var a = "dss1";
function disp(){
    a = "dss2";
    console.log(a); // dss2
}
disp();
console.log(a); // dss2

var a = "dss1";
function disp(){
    var a = "dss2";
    console.log(a); // dss2
}
disp();
console.log(a); // dss1

// 즉시실행함수, 익명함수
// 자바스크립트는 프론트엔드 언어입니다.
// 프론트엔드 언어는 코드가 다 노출 됩니다.
// 여러분이 브라우져에서 함수를 마음대로 가져다가 쓸수 있습니다.
// 이를 방지 하기 위해 즉시실행함수, 익명함수를 사용합니다.
// 문자열 사용시 ''를 이용해주세요. 이유는 html과 함께 사용을 많이 합니다.
// html에서 ""를 사용하기때문에 ''를 사용해줘야 에러를 줄수 있습니다.
(function(){
    var name = 'doojin';
    var disp = function(){
        console.log(name);
    };
    disp();
})();

var name = 'doojin';
var disp = function(){
    console.log(name);
};
disp();

(function(){

}());

// callback
// 콜백함수
// 함수의 아규먼트로 함수를 받아서 모든 코드를 실행한 후에
// 아규먼트로 받은 함수를 실행
function getData(callback, num1, num2){
    var result = num1 + num2;   // code
    callback(result);           // 코드가 끝나고 특정 함수를 실행
}

function disp(result){
    console.log(result);
}

function sqrt(result){
    console.log(result*result);
}

getData(sqrt, 2,3);


// 클로져(팩토리패턴으로 객체 생성), 프로토타입, es6 문법
