let money = prompt('Ваш бюджет?');
let name = prompt('Название вашего магазина?');
let time = 19;

let mainList = {
  budget: money,
  shopName: name,
  shopGoods: [],
  employers: {},
  open: false
};

for (let i = 0; i < 3; i++) {
  let a = prompt('Какой типо товаров будем продавать?');
  
  if ((typeof (a)) === 'string' && (typeof (a)) === null && a != '' && a.length < 50) {
    console.log('все верно!')
    mainList.shopGoods[i] = a;
  } else if ((typeof (a)) === 'string' && (typeof (a)) === null && a != '' && a.length < 50) {
    console.log('все верно!')
    mainList.shopGoods[i] = a;
  } else if ((typeof (a)) === 'string' && (typeof (a)) === null && a != '' && a.length < 50) {
    console.log('все верно!')
    mainList.shopGoods[i] = a;
};

if (time < 0) {
  console.log('Такого быть не может!');
} else if (time > 8 && time < 20) {
  console.log('Пора работать!');
} else if (time < 24) {
  console.log('слишком поздно,э!');
} else {
  console.log('В сутках только 24 часа');
}
};

// mainList.shopGoods[0] = prompt('Какой типо товаров будем продавать');
// mainList.shopGoods[1] = prompt('Какой типо товаров будем продавать');
// mainList.shopGoods[2] = prompt('Какой типо товаров будем продавать');


console.log(mainList);
alert("Ваш бюджет на день " + mainList.budget / 30);



// var yourBudget = prompt("Ваш бюджет?", "");
// var nameMagazine = prompt("Название вашего магазина?", "");
// var mainList = {

//   yourBudget,
//   nameMagazine,
//   shopGoods: [x, y, z],
//   employers: {
//     name: "Вася"
//     // name: "Саша",
//     // name: "Зелебоба",
//   },
// newWin: window.open("about:blank", "hello", "width=200,height=200"),
// x: prompt("Какой тип товаров будем продавать?", ""),
// y: prompt("Какой тип товаров будем продавать?", ""),
// z: prompt("Какой тип товаров будем продавать?", "")
// };

// console.log(yourBudget);
// console.log(nameMagazine);
// console.log(mainList);
// document.write("Ваш бюджет на день " + yourBudget / 30);
// console.log("Ваш бюджет на день " + yourBudget / 30);


// мой вариант
// var yourBudget = prompt("Ваш бюджет?", "");
// var nameMagazine = prompt("Название вашего магазина?", "");
// var mainList = {

//   yourBudget,
//   nameMagazine,
//   shopGoods: [prompt("Какой тип товаров будем продавать?", ""), prompt("Какой тип товаров будем продавать?", ""), prompt("Какой тип товаров будем продавать?", "")],
//   employers: {
//     name: "Вася"
//     // name: "Саша",
//     // name: "Зелебоба",
//   },
//   newWin: window.open("about:blank", "hello", "width=200,height=200")
// };
// console.log(yourBudget);
// console.log(nameMagazine);
// console.log(mainList);
// document.write("Ваш бюджет на день " + yourBudget / 30);
// console.log("Ваш бюджет на день " + yourBudget / 30);


