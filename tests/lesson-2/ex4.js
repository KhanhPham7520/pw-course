let height = 165;
let heightConvert = height % 100;

let maxWeight = heightConvert;
let minWeight = (heightConvert * 8) / 10;
let perfectWeight = (heightConvert * 9) / 10;

console.log('Best weight: ' + perfectWeight + ' Max weight by Kg: ' +
    maxWeight + ' Min weight by Kg: ' + minWeight + 'kg');