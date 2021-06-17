class Person2 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    console.log('생성 완료');
    this.name = name;
    this.age = age;
  }
}

const seho2 = new Person('세호', 30); // 생성 완료