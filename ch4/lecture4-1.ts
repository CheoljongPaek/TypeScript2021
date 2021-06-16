/* Union Type - | */
function logMessage(value: string | number) {
  if (typeof value === "string") {
    value.toString();
  }
  if (typeof value === "number") {
    value.toLocaleString();
  }
  throw new TypeError('value must be string or number');
}
logMessage('hello');

let something: string | number | boolean;

/*-------------------------------------------------------------*/
interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}
//someone.name which is a common property is only applied.
function askSomeone(someone: Developer | Person) {
  // someone.name
  // someone.skill - impossible
}
askSomeone({name: 'developer', skill: 'develop'});
askSomeone({name: 'developer', age: 10});

/*-------------------------------------------------------------*/
/* Intersection Type - & */
var case1: string | number | boolean;
var case2: string & number & boolean;

function askSomeone2(someone: Developer & Person) {
}
askSomeone2({name: 'developer', skill: 'develop', age: 10});
