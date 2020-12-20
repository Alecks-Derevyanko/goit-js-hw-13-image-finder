let credits = 23580;
const pricePerDroid = 3000; 
let quantity = prompt ('сколько дроидов вы хотите купить?');
let totalPrice;
let message = ('Отменено пользователем!');

if(quantity === null){
    message = ('Отменено пользователем!');
}
else if (credits <= totalPrice){
    
    message = ('Недостаточно средств на счету!');
} else {
    let totalPrice = (quantity * pricePerDroid);
    credits -= totalPrice;
    message = (`Вы купили ${quantity} дроидов, на счету осталось ${credits} кредитов.`);
}

console.log (message);