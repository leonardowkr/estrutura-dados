// dobra number[] -> number[]
// for in, for of

function dobra(nums) {
  let dobros = [];
  for (const num of nums) {
    dobros.push(num * 2);
  }

  return dobros;
}

function dobra2(nums) {
  let dobros = [];
  for (const indice in nums) {
    dobros.push(nums[indice] * 2);
  }

  return dobros;
}

function dobra3(nums) {
  let dobros = structuredClone(nums);
  for (let indice in dobros) {
    dobros[indice] = dobros[indice] * 2;
  }

  return dobros;
}

const numerooooos = [1, 2, 3, 4, 5];

const dobros = dobra3(numerooooos);
console.log(numerooooos);
console.log(dobros);


function append(array, val) {
  const proximoIndice = array.length;
  array[proximoIndice] = val;
}

const letras = ["a", "b", "c"];
append(letras, "d");


function numerosProfundos(num, index = 1){
  if(index === num){
    return [index];
  }
  else{
    return [index, numerosProfundos(num, index + 1)];
  }
}
const numeros = numerosProfundos(5)
console.log(JSON.stringify(numeros));
console.log(JSON.stringify(numeros));

const pessoa = {
  nome: "Eduarda",
  sobrenome: "Velho",
};

function add(objeto, atributo, valor){
    objeto[atributo] = valor;
}

add(pessoa, "idade", 30);
console.log(pessoa);
/*
{
    nome: "Eduarda",
    sobrenome: "Velho",
    idade: 30
}
*/