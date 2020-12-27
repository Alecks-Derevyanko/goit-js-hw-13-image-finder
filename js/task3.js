const findBestEmployee = function(employees) {

  const keys = Object.keys(employees);
  
  let best = employees[keys[0]];
  let bestEmployer = keys[0];
  for (let i = 1; i <= keys.length; i += 1){
    // console.log(keys[i]);
    if (employees[keys[i]] > best ){
      best = employees[keys[i]];
       bestEmployer = `${keys[i]} `;
    };    
  }
  return bestEmployer;  
}
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  );
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  );
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  );