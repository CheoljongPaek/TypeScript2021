//TS Declare of Parameter
function sum(a: number, b: number) {
  return a + b;
}

sum(10, 20);

//TS Declare of function return value
function add(a: number, b: number): number {
  //return value is necessary with its proper type.
  return a + b;
}
/*----------------------------------------------------------*/
// TS limits the features of parameters
function sum1(a: number, b: number): number {
  return a + b;
}
//sum1(1, 2, 3) // Expected 2 arguments, but got 3
/*----------------------------------------------------------*/
//Optional Parameter
function log(greeting: string, name?: string) {
  return `${greeting} ${name}`;
}
log('hello'); // hello
log('hi', 'CJPAEK'); // hi CJPAEK