const categoriesRef = document.querySelector("#categories");

const allNumbersCategories = categoriesRef.children.length;

console.log(`В списке ${allNumbersCategories} категории.`);

const itemRefAll = document.querySelectorAll(".item")
itemRefAll.forEach(item => {
    
    console.log(`Категория: ${item.querySelector('h2').textContent}`)
    console.log(`Количество элементов: ${item.querySelector('ul').children.length}`)
});