function fetchItems(): string[] {
  const items = ['a', 'b', 'c'];
  return items;
}
let result = fetchItems();
console.log(result);

function fetchItems1(): Promise<string[]> {
  const items2: string[] = ['a', 'b', 'c'];
  return new Promise(function (resolve) {
    resolve(items2);
  });
}

fetchItems1();
