const calculateEngravingPrice = function (message, pricePerWord) {
  const wordsSplit = message.split(' ');
 
  let wordsСount = wordsSplit.length;

  let totalPrice = wordsСount * pricePerWord;

  return totalPrice;
}

console.log(
calculateEngravingPrice(
  'Proin sociis natoque et magnis parturient montes mus',
  10,
),
); // 80

console.log(
calculateEngravingPrice(
  'Proin sociis natoque et magnis parturient montes mus',
  20,
),
); // 160

console.log(
calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120


calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus',10)

