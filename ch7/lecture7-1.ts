//type inference 1
var a = 'abc';

function getB(b = 10) {
  var c = 'hi';
  return b + c;
};
//type inference 2
interface Dropdown<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

var detailedItem: DetailedDropdown<string> = {
  title: 'abc',
  description: 'ab',
  value: 'a',
  tag: 'a'
}

//Best Common  Type
var arr = [1, 2, true];

//Type Assertion 1
var ab;
ab = 20;
var bc = ab as string;

//Type Assertion 2 - DOM API
var div = document.querySelector('div');

//Type Guard
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'Make' }
}
var tony = introduce();
// console.log(tony.skill);
if ((tony as Developer).skill) {
  console.log((tony as Developer).skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
  
}
//Type Guard Function Defining
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill ! == undefined;
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
  
}