/*--------------------------------------------*/
//제네릭을 이용해서 하나의 인터페이스로 여러가지 타입을 커버가능.
interface DropdownItem<T> {
  value: T;
  selected: boolean;
}
/*--------------------------------------------*/
const emails: DropdownItem<string>[] = [
  {value: 'naver.com', selected: true},
  {value: 'gmail.com', selected: false},
  {value: 'hanmail.net', selected: false}
];

const numberOfProducts: DropdownItem<number>[] = [
  {value: 1, selected: true},
  {value: 2, selected: false},
  {value: 3, selected: false}
];

function createDropdownItem(item: DropdownItem<string|number>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

emails.forEach(function(email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
})

numberOfProducts.forEach(function(product) {
  const item = createDropdownItem(product);
  const selectTag = document.querySelector('#product-dropdown');
  selectTag.appendChild(item);
})