let country = prompt('Укажите страну');

let price = 0;
let result = ('В вашей стране доставка не доступна');

switch( country.toLowerCase ) {
        
    case 'china':    
    price = 100
    result = (`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

    case 'chile':
    price = 250
    result = (`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

    case 'australia':
    price = 170
    result = (`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

    case 'india':
    price = 80
    result = (`Доставка в ${country} будет стоить ${price} кредитов`);
    break; 

    case 'jamaica':
    price = 120
    result = (`Доставка в ${country} будет стоить ${price} кредитов`);
    break; 

    default:
        alert(result);
}
console.log (result);