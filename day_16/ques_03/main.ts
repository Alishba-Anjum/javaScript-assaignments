let priceSet1 = [2000, 3000, 4000];
let priceSet2 = [2500, 1500, 3500];
let combinePrice = [...priceSet1 , ...priceSet2].sort((a,b) => (a - b));
console.log(combinePrice);

