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

for(let value in obj){ //перебор элементов объекта

}

for (let value of arr) { //перебор массива
  
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

let logger = function() { //function qxpression создается только тогда, 
                            //когда до нее доходит поток кода, можно вызват только после объявления.
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



// -------------- Colback функции -------------//

function learnJS(lang, calback){
    console.log(`Я учу: ${lang}`);
    calback();
}

learnJS('javaScript', function(){ // анонимная функция
    console.log('Я прошел этот урок');
});

// --------------Практика. создаем приложение -------------//

let numberOfFilms;

function start() {
    do{
            numberOfFilms = parseInt(prompt('Сколько фильмов вы уже посмотрели?', '2'));
        }
    while( numberOfFilms == '' //пользователь вводит пустую строку//|| numberOfFilms == null //пользователь отменяет действие//|| isNaN(numberOfFilms)/*пользователь вводит не число//);
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

// -------------- Объекты. Деструктуризация объектов(ES6) -------------- //

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    makeTest: function(){ // название с использованием camelCase глаголСуществительное
        console.log("Test");
    }
    }
};

options.makeTest(); // вызов метода
const {border, bg} = options.colors; // Деструктуризация объекта. Создается переменная border и bg в которую соответственно помещаются свойства объекта colors вложеного в options

// console.log(Options.name); //получить доступ к свойству объекта

delete options.name; // удалить свойство объекта

for (let key in options) {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    if (typeof(options[key] === 'object')) {
        for (let i in options[key]) {
            console.log(`   Свойство ${i} имеет значение ${options[key][i]}`);            
        }
    }
}


const property = Object.keys(options); // получить массив из свойств
console.log(property.length); // вывести длину


// -------------- Массивы и псевдомассивы -------------- //

const arr = [1,2,3,6,8];
arr.pop(); // удаляет последний элемент массива
arr.push('10'); // Добавляет элемент в конец массива


const str = prompt('', '');
const products = str.split(', '); // сформировать из строки массив
products.sort(); // сортирует строки в алфавитном порядке


for (let value of arr) { //перебор массива
    console.log(value);
}

arr.forEach(function(item, i, arr) { // пройти по элементам массива и применить функцию на каждом из этих элементов. item - элемент массива, i - порядковый номер, arr ссылка на сам массив
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

console.log(arr);

// -------------- Передача данных по ссылке или по значению (ES6 - 9) -------------- //
// примитивные типы данных (такие как строки и числа) передаются по значению
const obj = {
    a: 5,
    b: 1
}

const copy = obj; // в переменную copy передается ссылка на объект obj 
copy.a = 10;
console.log(obj.a); // 10

const add = {
    d: 17,
    e: 20
}
const third = Object.assign(obj, add); // Объеденить 2 объекта 
const clone = Object.assign({}, third);

const oldArray = ['a', 'b', 'c', 'd', 'e'];
const newArray = oldArray;    // копирование ссылки на массив
const newArrayValue = oldArray.slice(); // копирование значений массива
const spredArray = [...oldArray]; // копирование значений с использованием спред оператора

newArray[0] = 'F';
newArrayValue[0] = 'F';

console.log(newArray); 
console.log(newArrayValue);
console.log(oldArray);

const unitedArr = [...oldArray, ...newArray, ...newArrayValue, 'test1', 'test2']; // спред оператор 
console.log(unitedArr);

const spredObj = {
    one: 1,
    two: 2
};

const newSpredObj = {...spredObj}; // поверхностное копирование свойств объекта (не копирует вложеные объекты) с использованием спред оператора (ES9)

// -------------- Основы ООП. Прототипно ориентированное наследование -------------- //

const solder  = {
    health: 400,
    armor: 500,
    sayHello: function() {
        console.log("Hello");
    }
};

const john = Object.create(solder); // создаем объект john который будет прототипно наследоваться от solder
//const john = {
//    health: 100
//};

//john.__proto__ = solder; // устаревшая конструкция, не использовать
Object.setPrototypeOf(john, solder); // установить прототип для john от solder

ohn.sayHello();
*/
// -------------- Практика используем объекты -------------- //

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        this.manyFilms();
        this.rememberMyFilms();
        this.detectPersonalLevel();
        this.writeYorGeners();
    },

    manyFilms() {
        do{
            this.count = parseInt(prompt('Сколько фильмов вы уже посмотрели?', '2'));
        }
        while( this.count == '' || this.count == null || isNaN(this.count));
    },

    rememberMyFilms() {
        for (let i = 0; i<this.count; i++) { //можно использовать i-- для возврата на предыдущую итерацию
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
    
            this.movies[film] = rating;
        }
    },

    detectPersonalLevel: function() {
        if(this.count < 10){
            console.log('просмотрено довольно мало фильмов');
        } else if (this.count >=10 && this.count <= 30){
            console.log('Вы классический зритель');
        }
        else if (this.count > 30){
            console.log('Вы киноман');
        } else{
            console.log('Произошла ошибка');
        }
    },

    writeYorGeners: function() {
        for(let i = 0; i < 3; i++){
            let genres = prompt(`Ваш любимый жанр под номером ${i+1}`);
            if ( genres == null || genres.length > 50 || genres == '' ){
                i--;
            } else {
                this.genres[i] = genres;
            }
        }
        this.genres.forEach((item, i) => {
          console.log(`Любимый жанр ${i + 1} это ${item}`);
        });
    },

    toggleVisibleMyDB: function() {
        this.privat = this.privat ? false : true;
    },

};

const PersonalMovieDB = new Object(personalMovieDB);
//PersonalMovieDB.start();

// -------------- Динамическая типизация -------------- //
// Возможность одного типа даннных превращаться в другой

// To string

console.log(typeof(String(4)));
console.log(typeof(5 + ''));

const num = 5;
console.log('https://vk.com/catalog' + num);
const fontSice = 26 + 'px';

// To Number

console.log(typeof(Number('4')));
console.log(typeof(+'4'));
console.log(typeof(parseInt('4', '5')));

// To boolean
//0, '', null, undefined, NaN - false
console.log(typeof(Boolean('4')));
console.log(typeof(!!('4')));

// -------------- задачи -------------- //

let x = 5; alert(x++); // Сначало возвращает значение x  а потом увеличивает
test = [] + false //- null + true; // пустой массив буде преведен к пустой строке. При сложении с boolean получится srring.  Сложение string  с  null: не математическая операция - NaN. NaN + true = NaN
console.log(typeof(test));

let y = 1;
x = y = 2; // 2  

[] + 1 + 2; // '12'

'1'[0]; // '1'
console.log(2 && '1'); // string 2
console.log( !!( 2 && '1' ) ); //true
