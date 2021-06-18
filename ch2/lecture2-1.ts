// TS Declare of STRING
const str: string = 'hello';
// TS Declare of NUMBER
const num: number = 10;
/*----------------------------------------------------------*/
// TS Declare of Array
const arr1: Array<number> = [1,2,3];
const arr2: Array<string> = ['a', 'b', 'c'];
const arr3: number[] = [1,2,3]
// TS Declare of Tuple
const tuple: [string, number] = ['isString', 1]
// TS Declare of Object
const obj1: object = {};
const obj2: {name: string, age: number} = {
  name: 'CJPAEK',
  age: 100,
};
// TS Declare of Boolean
const choice: boolean = true;

//
interface User {
  name: string;
  readonly height: number;
  favoriteLanguage?: string;
}

const user1: User = {name: 'li', height: 10}

user1.name = 'hmm';
// user1.height = 'hmm';