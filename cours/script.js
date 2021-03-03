"use strict"; // строгий режим
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

const category = 'cat';

console.log(`https://test/${category}.html`);


// -------------- Операторы -------------- //
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

console.log( personalMovieDB);

// -------------- Условия -------------- //

let num = 50;
(num === 50) ? console.log('Ok') : console.log('Error'); //тернарный оператор. Подразумевается, что конструкция должна возвращать значение. Нельзя использовать внутри циклы условия break и т.д.

switch (num) {  //строгое сравнение(num === 50)
    case 49:
        console.log('Неверно');
        break; // не проверять остальные case 
    case 50:
        console.log('Верно');
    default: // если не выполнился не один case
        console.log('Не в этот раз')
};

// -------------- Циклы -------------- //

while (num < 55) {
    console.log(num);
    num++;
}

do { //Цикл выполнится хотябы один раз
    console.log(num);
    num++;
}
while (num < 55);

for(let i = 0; i < 7; i++){
    if (i===6){
        break; // прервать цикл
    }
    if (i===4){
        continue; // позволяет пропустить итерацию но не прерывает цикл
    }
    console.log(i);
}

// -------------- Функции -------------- //

//имя функции должно быть глаголом с припиской того над чем выполняется действие в формате camelCase

let num = 0; //глобальная переменная
function showMessage(text) {//function declaration создается до начала выполнения скрипта, можно выызвать перед объявлением.
    console.log(text);
    let num = 10; // локальная переменная, видна только внутри функции
    console.log(num); // 10

}
showMessage('text');
console.log(num); // 0 обращение к глобальной переменной

let logger = function() { //function qxpression создается только тогда, когда до нее доходит поток кода, можно вызват только после объявления.
    console.log("Hello");
};

const calc = (arg1, arg2) => {return arg1 + arg2}; //стрелочная функция
const calc2 = arg => Math.sqrt(arg); // сокращенная запись

// -------------- Методы и свойства строк и чисел -------------- //

const str = "test";
str.length // 4 длина строки
str[2] = d; //так не работает
console.log(str.toUpperCase); //переводит строку в верхний регистр
console.log(str.toLowerCase); //нижний
console.log(str.indexOf('s')); // поиск в строке возвращает -1 если элемент не найден
const text = 'Hello world';
console.log(text.slice(6, 9)); // вырезать с 6 по 10 символ. С отрицательными аргументами ищет с конца строки
//Math - библиотека математических методов
const num = 12.2;
console.log(Math.round(num)); //округление
console.log(parseInt())// из строки в число
*/

// --------------Практика. создаем приложение -------------//

let numberOfFilms;

function start() {
    do{
            numberOfFilms = parseInt(prompt('Сколько фильмов вы уже посмотрели?', '2'));
        }
    while( numberOfFilms == '' /*пользователь вводит пустую строку*/|| numberOfFilms == null /*пользователь отменяет действие*/|| isNaN(numberOfFilms)/*пользователь вводит не число*/);
}

start();

let personalMovieDB = {
    'count': numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};

function rememberMyFilms(){
    for (let i = 0; i<numberOfFilms; i++) { //можно использовать i-- для возврата на предыдущую итерацию
        let film,
            rating;

        while (true) {
            film = prompt('Один из просмотренных фильмов');
            if( film == null || film.length > 50 || film == '' ) {
                alert('Введите название менее 50 символов');
            }
            else{
                break;
            }
        }

        do {
            rating = parseInt(prompt('Оцените его по шкале от 1 до 10'));
        }
        while ( rating > 10 || rating < 0 || rating == '' || rating == null || isNaN(rating));

        personalMovieDB.movies[film] = rating;
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDB.count < 10){
        console.log('просмотрено довольно мало фильмов');
    } else if (personalMovieDB >=10 && personalMovieDB <= 30){
        console.log('Вы классический зритель');
    }
    else if (personalMovieDB > 30){
        console.log('Вы киноман');
    } else{
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function writeYorGeners(){
    for(let i = 0; i < 3; i++){
        let genres = prompt(`Ваш любимый жанр под номером ${i+1}`);
        if ( genres == null || genres.length > 50 || genres == '' ){
            i--;
        } else {
            personalMovieDB.genres[i] = genres;
        }
    }
}

writeYorGeners();

function showMyDB() {
    if(personalMovieDB.privat === false){
        console.log( personalMovieDB);
    }
}

showMyDB();