// Define interface
interface User {
  age: number;
  name: string;
}

// interface for variable
const student: User = {
  age: 33,
  name: '세호'
}

// interface for function
function getUser(user: User) {
  console.log(user);
};

const cat = {
  name: 'miu',
  age: 5
}
getUser(cat);
/*--------------------------------------------------------------------*/
// interface for the structure of function
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;

sum = (a, b) => {
  return a + b;
}
/*
  const sum2 = (a: number, b: number): number => {
    return a + b;
  }
*/

/*--------------------------------------------------------------------*/
// interface for indexing
// StringArray[index: number] = string
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
arr[0]; // 'a'

/*--------------------------------------------------------------------*/
// interface for dictionary
// StringRegexDictionary[key: string] = RegExp
interface StringRegexDictionary {
  [key: string]: RegExp
}

var obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

/*--------------------------------------------------------------------*/
// Extension of interface
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

var cat2: Developer = {
  name: 'miu',
  age: 5,
  language: 'Korean',
}

/*--------------------------------------------------------------------*/
/*--------------------------------------------------------------------*/
/*--------------------------------------------------------------------*/
// interface VS alias type

interface Person1 {
  name: string;
  age: number;
}
// interface : generate new type + extends possible
var cat3: Person1 = {
  name: 'miu',
  age: 5,
}

type Person2 = {
  name: string;
  age: number;
}
//alias type shows its info when mouseup the 'Person2' : it just gives a name. + cannot extend
var cat3: Person2 = {
  name: 'miu',
  age: 5,
}
