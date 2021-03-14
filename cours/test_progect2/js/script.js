/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ],
    addSortMovies: (movies) => {
        movieDB.movies.push(movies);
        movieDB.movies.sort();
    },

};

const app = {
    start: {

    },
    updatePromoList: (arr) => {
        const promoList = document.querySelector('.promo__interactive-list');
        promoList.innerHTML = "";
        arr.forEach((film, i) => {
            if (film.length > 12) {
                film = film.slice(0, 12) + '...';
            }         
            promoList.insertAdjacentHTML("beforeend", `<li class="promo__interactive-item">${i + 1}) ${film}<div class="delete" data-number="${i}"></div></li>`);

        });
    },

    rremoveADV: () => {
        document.querySelector('.promo__adv').remove();
        document.querySelector('.promo__content').style.width = '100%';
    },
};

const addForm = document.querySelector('.add');
const btn = addForm.querySelector('button'),
      inputAdding = addForm.querySelector('.adding__input');
      
btn.addEventListener('click', (e) => {
    e.preventDefault();
    movieDB.addSortMovies(inputAdding.value);
    app.updatePromoList(movieDB.movies);
});

app.rremoveADV();
app.updatePromoList(movieDB.movies);

const deleteItem = document.querySelectorAll('.promo__interactive-item');
for (let item of deleteItem ) {
    item.addEventListener('click', (e) => {
        const number = e.target.getAttribute('data-number');
        movieDB.movies.splice(number, 1);
    });
}
