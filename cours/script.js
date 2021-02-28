/*
let und;
console.log(und);
const obj = {
    name: 'john',
    age: 25,
    isMarried: false
};
//console.log(obj.name);
console.log(obj['name']);

let arr = ['plum.png', 6, 'apple.bmp'];
console.log(arr[0]);

const answers = [];

answers[0] = '0';
answers[1] = '1';
answers[2] = '2';
document.write(answers);
*/ 

const category = 'cat';

console.log(`https://test/${category}.html`);


// Операторы
console.log('test' + 4); // Test4
console.log(+'4'); // Число 4 (унарный плюс)
let test = 40;
console.log(test += 2); // 42

let incr = 41,
    decr=43;
console.log(++incr); // 42 префиксная форма, сначала прибавляем 1 а затем выводим в консоль
console.log(--decr); // 42 префиксная форма, сначала отнимаем 1 а затем выводим в консоль

console.log(incr++); // 42 постфиксная форма, форма, сначала выводим в консоль а затем прибавляем 1
console.log(decr--); // 42 постфиксная форма, сначала выводим в консоль а затем отнимаем 1

console.log(incr); // 43
console.log(decr); // 41

console.log(5%2); // 1  остаток от деления
console.log(42 == '42'); // true не строгое сравнение
console.log(42 === '42'); // false строгое сравнение
console.log(true && false); // false оператор логическое и 
console.log(true || false); // true оператор логическое или
console.log(!false); // true оператор отрицание
console.log(42 != '42'); // false 
console.log(42 !== '42'); // true
