let input;
const numbers = [];
let total = 0;


do {
    input = prompt(`Введите число`);
    if (isNaN(input)) {
        alert(`Было введено не число, попробуйте еще раз`);
    }
    else {
     
        numbers.push(input);
        console.log(numbers);
   
    }

}
while (input !== null);

for (const number of numbers) {

            total += Number(number);
       }

alert(`Общая сумма чисел равна ${total}`);
