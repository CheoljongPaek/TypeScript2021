//타입을 마치 함수의 파라미터의 개념으로 : 제네릭
/*
function logText(text) {
  console.log();
  return text;
}

logText('하이');
logText(10);
logText(true);
*/

/*
function logText<T>(text: T): T {
  console.log(text);
  return text;
}
logText('hi');
logText<string>('hi');
*/

/*
function logText(text: string) {
  console.log(text);
  // text.split('').reverse().join('');
  return text;
}

function logNumber(num:number) {
  console.log(num);
  return num;
}

logText('a');
logText(10);
logNumber(10);
logText(true);
*/

/* union problem
function logText(text: string | number) {
  console.log(text);
  return text;
}

logText('a');
logText(10);
*/

//generic
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>('abc');
str.split('');

const login = logText<boolean>(true);

//2
interface Dropdown {
  value: string;
  selected: boolean;
}

// const obj: Dropdown = {value:'abc', selected: false}

interface Dropdown2<T> {
  value: T;
  selected: boolean;
}

const obj2: Dropdown2<string> = {value:'abc', selected: false}