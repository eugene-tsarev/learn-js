const data = {
    'изучить в будущем': [
        'git https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/typeof',
        'тип данных Symbol',
    ]
    'Подготовка к работе': {
        'Как проходить данный курс': {
            'советы': [
                'Не смотреть лекции залпом',
                'переписывать и разбирать код',
                'вести конспект'
            ]
        },
        'Настройка рабочего пространства': {
            'редактор': 'vscode',
            'сочетания клавиш vscode (для линукс)': {
                'открыть терминал': 'ctrl + `',   
            },
            'примечания': [
                'можно перетаскивть вкладки',
                'можно использовать встроеный терминал'
            ],
            'вкладки левой панели': [
                'файлы',
                'поиск позволяет найти в коде классы и методы и др.',
                'git система контроля версий',
                'поиск ошибок в коде',
                'плагины'
            ],
            'примечание': 'список плагинов прекреплен к уроку',
            'плагины': {
                'Beautify': 'позволяет отформатировать код щелкнув правой кнопкой мыши и нажав format document',
                'Code runer': 'позволяет запускать  код прямо в редакторе',
                'Import cost': 'позволяет показывать размер подключаемого в скрипте файла',
                'JavaSkript(ES6) code stipets': 'позволяет быстро раскрывать некоторые конструкции',
                'Live Server': 'позволяет быстро запускать сервер на котором будет работать сайт',
                'ReactJs code snippets': 'ппозволяет удобно работать с react',
                'Emmet': {
                    '!': 'быстро создать структуру документа',
                    '.class>button>div': 'создать div с классом,внутри которого button, внутри которого div',  
                }
            },
            'примечание': 'также понадобится nodejs',
        },
        'JSHint': {
            'установка': 'npm i -g #глобально# jshint',
            'настройка': 'для настройки необходимо создать в корне проекта файл .jshintrc',
            'рекомендуемо содержимое файла .jshint.rc':{
                "camelcase" : true,
                "indent": 2,
                "undef": true,
                "quotmark": false,
                "maxlen": 120,
                "trailing": true,
                "curly": true,
                "strict": false,
                "browser": true,
                "devel": true,
                "jquery": true,
                "esversion": 9,
                "node": true
            } 

        }
    },
    'команды js': {
        'alert(value)': 'вывести сообщение на экран',
        'console.log': 'вывести сообщение в консоль',
        'confirm("Вопрос")': 'возвращает true или false в зависимости от ответа пользователя',
        'prompt("Вопрос", "Дефолтный ответ")': 'возвращает строку с ответом пользователя',
        'document.write(value)': 'выводит содержимое на странице стирая все что на ней было ???',
        'typeof(value)': 'проверка типа данных иногда приводит к ошибкам https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/typeof',
    },
    'Основы JavaScript': {
        'что такое Js': {
            'подключение скрипта на html странице': '<script src="js/script.js"></script>',
            'совет': 'подключать скрипт в конце страницы перед тэгом body',
        },
        'переменные и строгий режим': {
            'имя переменной может состоять из букв, цифр, символа доллара ($), и нижнего подчеркивания (_). Первый символ не должен быть цифрой': ' ',
            'примечание': 'рекомендуется использовать в названиях переменных camelCase',
            'способы объявления переменной': {
                'let': 'стандартное объявление переменной',
                'const': 'константа(переменную нельзя измнять). Рекомендуется использовать везде где возможно',
                'var': 'переменная создается еще до её объявления, устаревший формат',
            },
            'use strict': 'строгий режим позволяет избавляться от неточностей в старых версиях языка', 
        },
        'типы данных': {
            'простые типы': {
                'числа(int, float)': {
                    'пример': 'let = 123;',
                    'специальные значения': {
                        'Infinity': 'бесконечность можно получить при делении на 0',
                        'nan': 'Non a number можно получить при неправильной математической операции',
                    }
                },
                'строки(string)': {
                    'пример': 'let persone = "text"',
                },
                'Логический тип(boolean)': 'true, false',
                'null': 'не существует',
                'undefined': 'существует но значения нет',
                'Symbol': '',
                'Bigint': 'большое число',
            },
            'комплексные (объекты)': {
                'Специальные объекты': {
                    'Массивы': '',
                    'Функции(function)': '',
                    'Объект Даты': '',
                    'Регулярные выражения': '',
                    'Ошибки': '',
                },
                'Обычные объекты': {},
            },
        },
        'Интерполяция': {
            'применение': 'Для склейки строк, вместо использования оператора +',
            'пример использования': 'const category = "cat";  console.log(`https://test/${category}.html`);',

        },
        'Git': {
            'Ресурсы для изучения git':[
                'https://githowto.com/ru',
                'https://learngitbranching.js.org/?locale=ru_RU'
            ],
            'Команды': {
                'git init': 'инициализация проекта',
                'git config --local user.name': 'установка имени пользователя который ьудет использовать этот репозиторий. Флаг --local необходим для изменения переменной name только в данном проекте, --global изменит имя глобально',
                'git config --local user.email': ' ',
                'git status': 'узнать статус репозитория. Untracked files это файлы за которыми git не следит',
                'git add -A': 'добавить файлы в индекс. Флаг -A (all) означает добавить все файлы. *.css означает добавить все файлы с расширением css',
                'git commit -a -m"description" ': 'создание контрольной точки. флаг m(message) добавляет описание',
                'git log': 'просмотреть какие коммиты когда и кем были выполнены',
                'git checkout <file>': 'сбросить состояние до предыдущего коммита',
                'git remote add origin <url>': 'Добавить удаленный репозиторий. URL можно найти на сайте github на вкладке code',
                'git push -u origin master': 'добавить комит в удаленный репозиторий',
                'git clone <URL>': 'клонировать репозиторий на пк',
                'git pull': 'обновить проект',
            },
            'статусы репозитория': {
                'файлы созданы': '',
                'файлы добавлены в индекс': '',
                'commit': 'создана контрольная точка к которой можно вернуться'
            },
            'файл .gitignore': 'содержит список файлов которые необходимо игнорировать',
            'gitKraken': 'gui программа для работы с репозиториями git'


        }
    }
};