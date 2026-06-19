import {Queue} from './fila.js';
const fila = new Queue();
const fila2 = new Queue();

fila.queue('Ana');
fila.queue('Andréia');
fila.queue('Bruno');
fila.queue('Carlos');
fila.print();
fila.toArray();
fila.includes('Diego');
fila.map(nomes => nomes.toUpperCase());
fila.filter(nome => nome.startsWith('A'))

fila2.queue('1');
fila2.queue('3');
fila2.queue('6');

let total = fila2.reduce((acumulador, valorAtual) => acumulador +  valorAtual, "");
console.log(total);
fila.clear();
fila.print();

