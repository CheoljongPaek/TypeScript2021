interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
}
class Developer2 {
  name: string;
  skill: string;
}
var developer: Developer;
var person: Person;
// developer = person; 인터페이스는 오른쪽이 더 커야, 함수는 왼쪽이 더 큰 범위여야 성립.
person = developer;
person = new Developer2;
//function
var add = function(a:number) {
  //...
};
var sum = function(a:number, b: number) {
  //...
};
sum = add;
// add = sum

//Generic
interface Empty<T> {

}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
interface NotEmpty<T> {
  data: T;
}
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
// notEmpty1 = notEmpty2;