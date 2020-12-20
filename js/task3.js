const ADMIN_PASSWORD = 'jqueryismyjam';
const password = prompt('Пароль');
let message = ('Отменено пользователем!');


if (password === null){
    message = ('Отменено пользователем!');
    
}
else if (ADMIN_PASSWORD === password ){
    message = ('Добро пожаловать!');
} else{
    message = ('Доступ запрещен, неверный пароль!');
}

console.log (message);
alert(message);