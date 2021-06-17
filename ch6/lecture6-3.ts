// type limit for generic 1
interface Dropdown<T> {
  value: T;
  selected: boolean;
}

// const obj: Dropdown<number> = { value: 'abc', selected: false };

function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  
  return text;
}

logTextLength<string>(['hi']);

// type limit for generic 2: 정의된 타입 이용하기.
interface LengthType {
  length: number;
}
// T는 LengthType(부모)의 하위 타입이기때문에 LengthType에 있는 속성이 T에도 적용된다.
function logTextLength2<T extends LengthType>(text: T): T {
  text.length // T에 타입 정의? 
  return text;
}

// logTextLength2(10);
logTextLength2('a');

// type limit for generic 3: keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption('name');