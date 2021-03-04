// 1.3
/* const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  };
console.log(apartment); */

// 2.3
// /* Задание
// Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

// name - имя владельца, значение 'Генри';
// phone - телефон, значение '982-126-1588';
// email - почта, значение 'henry.carter@aptmail.com'.
//  */
// // const apartment = {
// //     imgUrl: 'https://via.placeholder.com/640x480',
// //     descr: 'Просторная квартира в центре',
// //     rating: 4,
// //     price: 2153,
// //     tags: ['premium', 'promoted', 'top'],
// //   owner:{
// //     name:'Генри',
// //   }
// //   };


// 3.3

// /* Задание
// Дополни код присвоив объявленным переменным выражения 
// обращения к соответствующим свойствам обьекта apartment. */
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
  
//   // Пиши код ниже этой строки
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Пиши код выше этой строки

//   4.3
//  /*  Задание
// Дополни код присвоив объявленным переменным выражения обращения
//  к соответствующим свойствам обьекта apartment.

// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags. */

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Пиши код ниже этой строки
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Пиши код выше этой строки

// 5.3
// /* Задание
// Дополни код присвоив объявленным переменным выражения обращения к 
// соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».
//  */
// /* aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги. */

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Пиши код ниже этой строки
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Пиши код выше этой строки

// 6.3
// /* Задание
// Дополни код обновив значения свойств объекта apartment:

// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на 'Генри Сибола';
// массив тегов в свойстве tags добавив в конец строку 'trusted'.
//  */
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Генри Сибола';
// apartment.tags.push('trusted');

// 7.3
// /* Задание
// Добавь объекту apartment несколько новых свойств:

// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка 'Ямайка';
// city - город, строка 'Кингстон'.
//  */
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country : 'Ямайка',
//   city :'Кингстон',
// };

// 8.3
// /* Задание
// Дополни код объявления объекта так, чтобы у него были 
// свойства name, price, image и tags со значениями из переменных с аналогичными именами. 
// Обязательно используй синтаксис коротких свойств. */

// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Пиши код ниже этой строки
// name,
//   price,
//   image,
//   tags


//   // Пиши код выше этой строки
// };

// 9.3

// /* Задание
// Дополни код объявления объекта credentials так, чтобы в результате у него 
// были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.

// Значением свойства email должна быть строка 'henry.carter@aptmail.com', 
// а значением свойства password - строка 'jqueryismyjam'.
//  */
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Пиши код ниже этой строки
//  [emailInputName] :'henry.carter@aptmail.com',
//  [passwordInputName] : 'jqueryismyjam'
  
  
//   // Пиши код выше этой строки
// };

// 10.3

// /* Задание
// Перебери объект apartment используя цикл for...in и запиши 
// в массив keys все его ключи, а в массив values все значения его свойств. */
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = ['descr', 'rating', 'price'];
// const values = ['Просторная квартира в центре', 4, 2153];
// // Пиши код ниже этой строки
// for ( const key in apartment){
//    console.log(keys);
 
//   console.log('Value: ', apartment[key]);
// }

// 11.3
// /* Задание
// Выполни рефакторинг решения предыдущего задания добавив 
// в цикл for...in проверку на собственное свойство.
//  */
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;
// for (const key in apartment) {
//   // Пиши код ниже этой строки
// if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
//   // Пиши код выше этой строки
// }

// 12.3
//  Задание
// Напиши функцию countProps(object), которая считает и возвращает 
// количество собственных свойств объекта в параметре object. 
// Используй переменную propCount для хранения количества свойств объекта.
//  
// function countProps(object) {
//   let propCount = 0;
  // Пиши код ниже этой строки

//   return Object.keys(object).length;

  // Пиши код выше этой строки
//   return propCount;
// }
// 13.3
// /* Задание
// Перебери объект apartment используя метод Object.keys() и цикл for...of. 
// Запиши в переменную keys массив ключей собственных свойств объекта apartment, 
// и добавь в массив values все значения его свойств.
//  */
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }

// 14.3

 /* Задание
/*  Выполни рефакторинг функции countProps(object) используя 
 метод Object.keys() и, возможно, цикл for...of. */

// function countProps(object) {
  // Пиши код ниже этой строки
 
//   let propCount = 0;
// return Object.keys(object).length;
  
//   return propCount;
  // Пиши код выше этой строки
// }
// 15.3
// Задание
// Запиши в переменную keys массив ключей собственных 
// свойств объекта apartment, а в переменную values массив всех значений его свойств. 
// Используй методы Object.keys() и Object.values().
//  
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
 // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// 16.3
// Задание
 // Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника,
 //  а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. 
 //  Используй переменную totalSalary для хранения общей суммы зарплаты.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
   // Пиши код ниже этой строки
//   const values = Object.values(salaries);
// for (const value of values) {
//   totalSalary += value;
// }
   // Пиши код выше этой строки
//   return totalSalary;
// }

// 17.3
 /* Задание
 Перебери массив объектов colors используя цикл for...of. 
 Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения 
 свойств rgb из всех объектов массива colors. 
 */
 /* const colors = [
   { hex: '#f44336', rgb: '244,67,54' },
   { hex: '#2196f3', rgb: '33,150,243' },
   { hex: '#4caf50', rgb: '76,175,80' },
   { hex: '#ffeb3b', rgb: '255,235,59' },
 ];

 const hexColors = [];
 const rgbColors = [];
    Пиши код ниже этой строки
  for (const color of colors){
    hexColors.push(color.hex);
    rgbColors.push(color.rgb);
  } */

//  18.3
 /* Задание
Напиши функцию getProductPrice(productName) которая принимает
один параметр productName - название продукта.Функция ищет объект продукта с
таким именем(свойство name) в массиве products и возвращает его цену(свойство price).
Если продукт с таким названием не найден, функция должна возвращать null.
 */
/* const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Пиши код ниже этой строки
  let productPrice = 0;
  for (const product of products) {
    if (productName === product.name) {
      productPrice = product.price;
      return productPrice; console.log(productPrice);
    }
  }
  return null; console.log(null);
}
  
     */

19.3
 /* Задание
Напиши функцию getAllPropValues(propName) которая принимает один
параметр propName - имя(ключ) свойства.Функция должна вернуть массив всех значений свойства
с таким именем из каждого объекта в массиве products.Если в объектах нет свойства с таким именем,
  функция должна вернуть пустой массив.     */
/* 
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
  const propValue = [];
  for (const product of products) {
    for (const key in product) {
      if (key === propName) {
        propValue.push(product[key]);
      }
    }
  }
  return propValue;
  // Пиши код выше этой строки
}

или 
  const propValues = [];
    
 for (const product of products) {
        if (Object.keys(product).includes(propName)) {

        propValues.push(product[propName]);
      }
}
return propValues;
  // Пиши код выше этой строки
} */

/* 
20.3
Задание
Напиши функцию calculateTotalPrice(productName) которая
принимает один параметр productName - название товара.Функция должна
вернуть общую стоимость(цена * количество) товара с таким именем из массива products.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
let totalPrice = 0;
  for (const product of products){
    if (productName === product.name){
      totalPrice = (product.price * product.quantity);
      return totalPrice;
    }
  }
  return 0;
  // Пиши код выше этой строки

  or 

  for (const product of products) {
        if (productName === product.name) {
            return product.price * product.quantity;
        }
    }
  
  return 0;
   */


/*   21.3
Задание
  Пришел трёхдневный прогноз максимальных температур и мы
  считаем среднюю температуру за три дня(meanTemperature).
  Замени объявления переменных yesterday, today и tomorrow одной
  операцией деструктуризации свойств объекта highTemperatures
 
  const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки
const {yesterday, today, tomorrow} = highTemperatures;


// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;
 */
 /*  22.3
Задание
  В прогнозе максимальных температур также может быть необязательное
  свойство icon - иконка погоды.Замени объявления переменных yesterday, today, tomorrow
  и icon одной операцией деструктуризации свойств объекта highTemperatures.Задай значение по
  умолчанию для icon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.

  const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки
  const { yesterday, today, tomorrow,
    icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } = highTemperatures;


// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;
 */

  /* 23.3
Задание
  Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией
  деструктуризации свойств объекта highTemperatures.Задай значение по умолчанию
  для highIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.

  const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

const {
  yesterday: highYesterday, today: highToday, tomorrow: highTomorrow,
  icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
      } = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
 */
/* 
  24.3
Задание
  Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..

  const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки

for (const {hex, rgb}of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
} */

 /*  25.3
Задание
  Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами,
    а также необязательными иконками.Замени объявления всех переменных одной операцией
  деструктуризации свойств объекта forecast.Задай значение по умолчанию для иконок,
    переменных todayIcon и tomorrowIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
  
  const forecast = {
  today: {
     low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Пиши код ниже этой строки
const {today:{
  high:highToday,
   low:lowToday, 
      icon: todayIcon='https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},
    tomorrow:{
     high:highTomorrow,
     low:lowTomorrow,
      icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } } = forecast;
   */
/*   26.3
Задание
  Функция calculateMeanTemperature(forecast) принимает один параметр
  forecast - объект температур на два дня следующего формата.
  // Пиши код ниже этой строки
function calculateMeanTemperature(forecast) {
   const {today:{
  high:todayHigh,
   low: todayLow} ,
     tomorrow:{
     high:tomorrowHigh,
     low:tomorrowLow } }= forecast;

  // Пиши код выше этой строки
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
} */
/* 
  27.3
Задание
  В переменной scores хранится массив результатов тестирования.
  Используя распыление и методы Math.max() и Math.min() дополни код так,
    чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.
  const scores = [89, 64, 42, 17, 93, 51, 26];
// Пиши код ниже этой строки
const bestScore = Math.max(...scores);
  const worstScore = Math.min(...scores);
 */
  /* 28.3
  Задание
  В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп.
  Используя распыление дополни код так, чтобы:

В переменной allScores хранился массив всех результатов от первой до третьей группы.
В переменной bestScore был самый высокий общий балл.
  В переменной worstScore был самый низкий общий балл.

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Пиши код ниже этой строки
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
  const worstScore = Math.min(...allScores); */
  
 /*  29.3
  Задание
  В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию
  которые хранятся в переменной defaultSettings.
  Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.

  const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Пиши код ниже этой строки
const finalSettings = {
    ...defaultSettings, ...overrideSettings
  };
   */
 /*  30.3
  Задание
Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

text - текст задачи.
category - категория задачи.
priority - приоритет задачи.
  Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data.
  В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

  В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать.
Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию,
хранящиеся в одноимённых локальных переменных.

function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  // Пиши код ниже этой строки
const task1 = {
completed,category,priority};
  const task2 = {...task1, ...data};
  return task2;
  // Пиши код выше этой строки
} */

/*   31.3

  Задание
  Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов,
    считала и возвращала их сумму.
  
  // Пиши код ниже этой строки
function add(...args) {
  let sum = 0;
  for (const arg of args){
  sum += arg;
  }
  return sum;// Пиши код выше этой строки
} */

 /*  32.3
Задание
  Функция addOverNum() считает сумму всех аргументов.Измени параметры и тело функции addOverNum() так,
    чтобы она считала сумму только тех аргументов, которые больше чем заданное число.
  Это число должно быть первым параметром функции.

  // Пиши код ниже этой строки
function addOverNum(firstNumber, ...args) {
  let total = 0;

  for (const arg of args) {
    if ( arg > firstNumber)
    total += arg;
  }

  return total;
  // Пиши код выше этой строки
  } */
  
 /*  33.3
Задание
Функция findMatches() принимает произвольное количество аргументов.
Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

Дополни код функции так, чтобы она возвращала новый массив matches,
  в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

  Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив[1, 2],
  потому что только они есть в массиве первого аргумента.
    

  function findMatches(firstArg, ...args) {
  const matches = []; // Не изменяй эту строку

    for (const arg of args) {
 
      if ( firstArg.includes(arg)) {
          matches.push(arg); }
}
  // Пиши код выше этой строки
  return matches;
} */


/* 34.3

Задание
Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки
по аналогии с getBooks() и addBook(bookName).

Метод removeBook(bookName) будет удалять книгу по имени.Возвращает строку 'Удаляем книгу <имя книги>',
  где < имя книги > это значение параметра bookName.

Метод updateBook(oldName, newName) будет обновлять название книги на новое.
Возвращает строку 'Обновляем книгу <старое имя> на <новое имя>', где < старое имя > и < новое имя > это
значения параметров oldName и newName соотвественно.

  // Пиши код ниже этой строки
  books: ['Последнее королевство', 'Страж снов'],
  getBooks() {
    return 'Возвращаем все книги';
  },
  addBook(bookName) {
    return `Добавляем книгу ${bookName}`;
  },
  removeBook(bookName) {
   return `Удаляем книгу ${bookName}` ;
  },
  updateBook(oldName, newName) {
   return `Обновляем книгу ${oldName} на ${newName}`;
  }
  // Пиши код выше этой строки
};
 */

/* 35.3
Задание
Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books.
Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент.

 const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
  const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);

    return this.books;
    // Пиши код выше этой строки
  }, 
}; */

/* 36.3

Задание
К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - добавления,
  удаления, поиска и обновления зелий.Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.

  const atTheOldToad = {
  potions : [],

  // Пиши код выше этой строки
}; */
/* 
37.3
Задание
Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
 getPotions() {
   return this.potions;}
  // Пиши код выше этой строки
}; */


/* 38.3
Задание
Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  addPotion(potionName) {
  return this.potions.push(potionName);
  },
}; */

/* 39.3
Задание
Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  removePotion(potionName) {
    // Пиши код ниже этой строки
    const indexPotion =  this.potions.indexOf(potionName);
    this.potions.splice(indexPotion, 1);
    return this.potions
    // Пиши код выше этой строки
  },
};
 */
/* 
40.3
Задание
Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName,
  в массиве зелий в свойстве potions.

  const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
  const indexPotion = this.potions.indexOf(oldName);
    this.potions.splice(indexPotion, 1, newName);

    return this.potions;
    // Пиши код выше этой строки
  },
}; */



/* 41.3
Задание
Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

{
  name: 'Дыхание дракона',
  price: 700
}
Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions. */
const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
    getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
     for (const potion of this.potions) {
      if (potion.name === potionName) {
        potion.quantity += 1;
        return;
      }
     }
    this.potions.push(potionName);
  },
  removePotion(potionName) {

    const { potions } = this;

    for (let i = 0; i < potions.length; i += 1) {
      const potion = potions[i];

      if (potionName === potion.name) {

        potions.splice(i, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {

     const { potions } = this;
    for (let i = 0; i < potions.length; i+= 1){
      const potion = potions[i];
      if (oldName === potion.name) {
         this.potions[i].name = newName;

          return this.potions;

      }
    }
  },
  
};


