/* enum - type of number */
enum Shoes {
  Nike,
  Adidas
}
Shoes.Nike; // 0

/* enum - type of string */
enum Shoes2 {
  Nike = '나이키',
  Adidas = "아디다스"
}
Shoes2.Nike; // '나이키'

/* example1 */
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답');
    
  }
  if (answer === Answer.No) {
    console.log('오답');
  }
}
askQuestion(Answer.Yes);