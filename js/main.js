'use strict';
// выше обзяательная запись стандарта es6 
// (при задании переменных необходимо указывать var или let )



// var mainList = {
//     shopGoods: [],
//     employers: {},
//     open: false
// }

// var i = 0;
// do {
//     var a = prompt ("Товар для продажи? № " + (i + 1));
//     if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
//         console.log('All Right!');
//         mainList.shopGoods[i] = a;
//         i++;
//   }   else {
//            alert('Вводить буквы надо!!!');
//   }
// } 
// while (i < 5);
// console.log(mainList);

// ----------------------------------------------Заново
console.log(leftBorderWidth);
var leftBorderWidth = 1;
// переменная имяПеременной = присваиваем 1
// имя переменной не должно повторять eror, alert
// следим за регистром переменных
let second = 2;
// новый стандарт es 6
const pi = 3.14;
// константа
// разница объявления переменной через var и let в том что при var перменная 
// уже как-бы создана и если выводить её значение перед заданием переменной 
// то выдаст undefined? что будет значить что переменная существует, у лет выдаст ошибку is not defined
// после объявления переменных выводит - выдает всё нормально и там и там
// это ускоряет код - при объявлении let - существует в пределах какого-либо действия


// ------------------------------------------------какие переменные бывают
// 1)
var number = 5;
// переменная число целое дробное может быть
// если число поделить на ноль то получим инфинити 
console.log(4/0);
// если произвести операцию с числом не подлежащее математической
// логике то получим not a number NaN - пример число поделим на строку
// пример
console.log('string'*9);

// 2) 
var string = "Hello";
// тип данных строка

// 3) 
// с введением нового стандарта появился новый тип данных символ - symbol
var sym = Symbol();
// на практике встречается редко

// 4)
var boolean = true;
// логический тип данных да или нет

// 5)
null;
// философский тип данных
// это когда в коде чего-то не существует
// пример
// console.log(something)
// вывод не существующего - выдаст ошибку - это и есть null

// 6)
undefined;
// пример
let yo;
console.log(yo);
// вывод не заданной переменной - выдаст underfined 

// 7)
// комплексный тип данных
var obj = {};
// функции объекта - методы
// пример
let person = {
  name: 'John',
  // ключ и значение - ключ
  // переменная со строкой именем 
  age: 25,
  isMarried: false
}
// теперь достаем при помощи команды console.log значения
// при помощи точки достаем значение .name
console.log(person.name);
// таким образом получаем значение первого совйства объекта
// есть и второй способ который не получишь с помощью точки
console.log(person["name"]);

// создадаим массив---------------------------------
// в нем каждому значению объекта присваивается порядковый номер
let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
// объявляем массив - в квадратных скобках три разных картиники - три элемента массива
// массив может содержать все виды переменных - неоднородных
// выводим элемент массива
console.log(arr[2]);
// нумерация начинается с нуля


// основная команда разработчиков - console.log
// -------------------------------------------------------------------------------------
// alert("Hello World!");
// некрасивое модальное окошко - все скрипты останавливаются

// следующая команда 
// confirm("Are You Here?");
// две кнопки ок и отмена
// зададим нажатие на кнопку в переменную
// let answer = confirm("Are you Here?");
// console.log(answer);
// получаем булиновое значение true или false при нажатии на кнопки ок или отмена


// следующая команда
// окно для ввода данных
let answer = prompt("Есть ли Вам 18?", "Да");
// вся информация которая приходит от пользователя будет в виде строк
// значение Да - установлено по умолчанию в строке чтобы облегчить ввод пользователя
// console.log(answer);
// проверим тип данных присылаемым пользователем
// console.log(typeof(answer));
// всегда будет строка

// частный случай объектов
console.log(typeof(arr));
// выдаст объект вместо строки
console.log(typeof(null));
// официальная ошибка null - тип данных получит значение объекта, когда он и есть null


// операторы
console.log("arr" + "- object");
// получается строка
console.log(4 + "- object");
// получается также строка
// 4 + - object - это конкатенация
// Если хотим получать числовое значение то надо поставить плюс УНАРНЫЙ ПЛЮС
// let answer = +prompt("Есть ли Вам 18-ть?", "Да");
// console.log(typeof(answer)); 
// даже при вводе букв выдаст тип данных number
// а если поставить плюс у строчного элемента, пример ниже
console.log(4 + +"- object");
// то получим NaN - not a number - не логические действия


// операторы инкремент и дикримент
// i++
// i--
// создаем две переменные
// короткая запись через запятую
let decr = 10,
    incr = 10;
    // увеличиваем и уменьшаем на единицу
decr--;
incr++;
console.log(decr);
console.log(incr);
// перфиксная форма возрващает измененное значение
// постфиксное форма возвращает старое значение
// следовательно то же самое можно записать вот так:
console.log(--decr);
console.log(++incr);
// выше будут отображены новые значения
// ниже буддут отображены старые значения
console.log(decr--);
console.log(incr++);

// оператор выводит остаток от деления двух числе
console.log(5%2);

// оператор присваивания =

// оператор проверки равенства ==
console.log("2" == 2);
// сверху будет всё ок, т.к. значение одинаково

// три раза === срогая проверка по типам данных
console.log("2" === 2);
// будет false - разные типы данных

// логические операторы и и или - &&  и ||
let isChecked = true,
    isClose = true;
console.log(isChecked && isClose);
// выдааст true т.к. имеют одинаковые значения true
// меняем одно на false и будет false т.к. значения не равны
// .оператор && возвращает только тогда правду когда все элементы являются правдивыми


// опаратор или || 
let isChecked = false,
  isClose = false;
console.log(isChecked || isClose);
// таким образом получим false в других случаях будет true 
// с помощью этих операторов проверяем открыты ли окна, отмечены ли чекбоксы
// можем менять значения переменных через занк !
// тогда при смене значений в console/log при помощи ! будет выдан результат true
console.log(isChecked || !isClose);
// isClose стал true;

// прядок выполнения операций


// --------------------------------------------------------git 
// система контроля версий git
// качаем git с официального сайта
// устанавливаем в нашу папку с проектом - git командой из консоли: git init
// после создаем файл ReadableStreamReader.md
// команда для создания: echo >> README.md
// ниже создаем пользователя для репозитория - локально или глобально
// git config --local или --global user.name "Rob"
// далее присуждаем ему email
// git config --local URLSearchParams.email bonusdiez@mail.ru
// после этого git готов к работе
// ------------------------------------------------------
// 3-и состояния файла
// когда он просто создан и есть - никак не связан с bunjv
// когда в нем происходят изменения - когда следить з измнениями
// когда изменения записываются - гит может вернуться к изначаьному фалу
// ---------------------------------------------------------
// все файлы хотим отслеживать - направить в индекс
// команда git add -A
// A = All отслеживать все файлы
// проверить статус файлов попавших в индекс
// консоль поначалу покажет, что никаких комитов не было, 
// то есть никакой из файлов ещё н перешел из второго состояния в третье
// проверка файлов остояние git status
// переводим в третье сосотяние
// команда git commit -a -m "это наш первый коммит"
// -m - это сообщение чтобы отслеживать коммит
// после того как изменили файл пушим проект
// команда
// git add *.html - если изменения коснулись html файлов 
// проверяем командой git status как там чего
// после этого делаем коммит к примеру второй
// команда git commit -a -m "Второй коммит"
// отследит все изменения позволяте команда git log
// --шифт + инсёрт выведет красивую запись лога
// --или же запись git log --pretty=format
// git log --help вызов документации по гит
// очитска строки команда clear

// заливаем на github
// команда для созданного репозитория на гитхабе
// git remote add origin https: //github.com/bonusdiez/js-lesson.git
// remote - означает удаленный репозиторий
// add - добавляем репозиторий
// по уомлчанию origin - можно изменять, к примеру на test
// берем следующую команду на гитхабе
// git push -u origin master
// команда push используется для переноса файлов на внешний remote диск
// ключ -u запоминает куда по умолчанию пушить наши файлы
// master - наша главная ветка
