const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  
  const ingredientsRef = document.querySelector('#ingredients');
  
  const liItem = ingredients.map(ingridient => {
      const liRef = document.createElement('li');
      liRef.textContent = `${ingridient}`;
      return liRef;
     
  });
  
  ingredientsRef.append(...liItem);