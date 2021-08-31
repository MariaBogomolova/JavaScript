/* 2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/
'use strict'
var basketItems = {
    1: {
        productName: 'Носки',
        amount: 5,
        price: 100
    },
    2: {
        productName: 'Перчатки',
        amount: 2,
        price: 600
    },
    3: {
        productName: 'Водолазка',
        amount: 1,
        price: 1000
    },
    toGetCost() {
        let cost = 0;
        for (let i = 1; i <= 3;i++) {
            cost += this[i]['amount'] * this[i]['price'];
        }
        console.log(cost);
    }
}
basketItems.toGetCost();

