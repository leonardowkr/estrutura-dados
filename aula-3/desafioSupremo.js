function numerosProfundos(num, index = 1) {
  if (index === num) {
    return [index];
  } else {
    return [index, numerosProfundos(num, index + 1)];
  }
}
const numeros = numerosProfundos(5);
console.log(JSON.stringify(numeros));
console.log(JSON.stringify(numeros));
