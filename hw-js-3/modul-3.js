1.3


2.3
/* Задание
Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

name - имя владельца, значение 'Генри';
phone - телефон, значение '982-126-1588';
email - почта, значение 'henry.carter@aptmail.com'.
 */
const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  owner:{
    name:'Генри',
  }
  };


3.3

/* Задание
Дополни код присвоив объявленным переменным выражения 
обращения к соответствующим свойствам обьекта apartment. */
const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  };
  
  // Пиши код ниже этой строки
  const aptRating = apartment.rating;
  const aptDescr = apartment.descr;
  const aptPrice = apartment.price;
  const aptTags = apartment.tags;
  // Пиши код выше этой строки

  4.3
 /*  Задание
Дополни код присвоив объявленным переменным выражения обращения
 к соответствующим свойствам обьекта apartment.

ownerName - имя владельца;
ownerPhone - телефон владельца;
ownerEmail - почта владельца;
numberOfTags - количество элементов массива в свойстве tags;
firstTag - первый элемент массива в свойстве tags;
lastTag - последний элемент массива в свойстве tags. */

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Генри',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

// Пиши код ниже этой строки
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];
// Пиши код выше этой строки

5.3
/* Задание
Дополни код присвоив объявленным переменным выражения обращения к 
соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».
 */
aptRating - рейтинг;
aptDescr - описание;
aptPrice - цена;
aptTags - теги.

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

// Пиши код ниже этой строки
const aptRating = apartment['rating'];
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];
// Пиши код выше этой строки

6.3
/* Задание
Дополни код обновив значения свойств объекта apartment:

цену в свойстве price на 5000;
рейтинг квартиры в свойстве rating на 4.7;
имя владельца во вложенном свойстве name на 'Генри Сибола';
массив тегов в свойстве tags добавив в конец строку 'trusted'.
 */
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = 'Генри Сибола';
apartment.tags.push('trusted');

7.3
/* Задание
Добавь объекту apartment несколько новых свойств:

area - площадь в квадратных метрах, число 60;
rooms - количество комнат, число 3;
location - местоположение квартиры, обьект со следующими вложенными свойствами;
country - страна, строка 'Ямайка';
city - город, строка 'Кингстон'.
 */
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country : 'Ямайка',
  city :'Кингстон',
};

8.3
/* Задание
Дополни код объявления объекта так, чтобы у него были 
свойства name, price, image и tags со значениями из переменных с аналогичными именами. 
Обязательно используй синтаксис коротких свойств. */

const name = 'Ремонтный дроид';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  // Пиши код ниже этой строки
name,
  price,
  image,
  tags


  // Пиши код выше этой строки
};

9.3

/* Задание
Дополни код объявления объекта credentials так, чтобы в результате у него 
были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.

Значением свойства email должна быть строка 'henry.carter@aptmail.com', 
а значением свойства password - строка 'jqueryismyjam'.
 */
const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Пиши код ниже этой строки
 [emailInputName] :'henry.carter@aptmail.com',
 [passwordInputName] : 'jqueryismyjam'
  
  
  // Пиши код выше этой строки
};

10.3

/* Задание
Перебери объект apartment используя цикл for...in и запиши 
в массив keys все его ключи, а в массив values все значения его свойств. */
const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const keys = ['descr', 'rating', 'price'];
const values = ['Просторная квартира в центре', 4, 2153];
// Пиши код ниже этой строки
for ( const key in apartment){
   console.log(keys);
 
  console.log('Value: ', apartment[key]);
}

11.3
/* Задание
Выполни рефакторинг решения предыдущего задания добавив 
в цикл for...in проверку на собственное свойство.
 */
const keys = [];
const values = [];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Просторная квартира в центре';
apartment.rating = 4;
apartment.price = 2153;
for (const key in apartment) {
  // Пиши код ниже этой строки
if (apartment.hasOwnProperty(key)) {
  keys.push(key);
  values.push(apartment[key]);
}
  // Пиши код выше этой строки
}

12.3
/* Задание
Напиши функцию countProps(object), которая считает и возвращает 
количество собственных свойств объекта в параметре object. 
Используй переменную propCount для хранения количества свойств объекта.
 */
function countProps(object) {
  let propCount = 0;
  // Пиши код ниже этой строки
  
  return Object.keys(object).length;
   
  
  // Пиши код выше этой строки
  return propCount;
}
13.3
/* Задание
Перебери объект apartment используя метод Object.keys() и цикл for...of. 
Запиши в переменную keys массив ключей собственных свойств объекта apartment, 
и добавь в массив values все значения его свойств.
 */
const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const values = [];
// Пиши код ниже этой строки
const keys = Object.keys(apartment);
for (const key of keys) {
  values.push(apartment[key]);
}

14.3

/* Задание
Выполни рефакторинг функции countProps(object) используя 
метод Object.keys() и, возможно, цикл for...of.
 */
function countProps(object) {
  // Пиши код ниже этой строки
 
  let propCount = 0;
return Object.keys(object).length;
  
  return propCount;
  // Пиши код выше этой строки
}
15.3
/* Задание
Запиши в переменную keys массив ключей собственных 
свойств объекта apartment, а в переменную values массив всех значений его свойств. 
Используй методы Object.keys() и Object.values().
 */
const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
// Пиши код ниже этой строки
const keys = Object.keys(apartment);
const values = Object.values(apartment);

16.3
// Задание
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника,
//  а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. 
//  Используй переменную totalSalary для хранения общей суммы зарплаты.

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки
  const values = Object.values(salaries);
for (const value of values) {
  totalSalary += value;
}
  // Пиши код выше этой строки
  return totalSalary;
}

17.3
/* Задание
Перебери массив объектов colors используя цикл for...of. 
Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения 
свойств rgb из всех объектов массива colors. */

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки
 for (const color of colors){
   hexColors.push(color.hex);
   rgbColors.push(color.rgb);
 }

 18.3
 