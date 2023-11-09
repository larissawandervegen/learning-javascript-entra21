const car = new Map();
// car.set('model', "tesla x");
// car.set('year', 2023);
// car.set('color', 'black');
car.set('LARI2806', {model: 'tesla', year : 2023, color : 'black'})
console.log(car);
// 2
car.get('LARI2806').year = 2024;
console.log(car);