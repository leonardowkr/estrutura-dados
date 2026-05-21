import express from 'express';
//import cors from 'cors';
/*import { z, ZodError } from 'zod';
import dotenv from "dotenv";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client.js";


const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });
*/
const PORT = 8080;
const app = express();

//app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send(nome_personagem);
})

app.get('/menores', (req, res) => {
  res.send(personagens_menores);
})

app.get('/kekkei-gengai', (req, res) => {
  res.send(qtd_personagens_kekkei_gengai);
})

app.get('/chakras-jonin', (req, res) => {
  res.send(personagens_chakras_joinin);
})

app.get('/chakras',(req, res) => {
  chakras = [];
  chakras.push(soma_chakras);
  chakras.push(media_chakras);
  chakras.push(maior_chakra);
  res.send(chakras);
});

app.get('/chakra_idade-chunin', (req, res) =>{
  res.send(media_chakras_idade.toFixed(1));
})

app.get('/chakra-idade', (req, res) => {
  const personagens_chakra = [];
  personagens_chakra.push(personagem_maior_chakra_idade.nome, personagem_maior_chakra_idade.idade/personagem_maior_chakra_idade.chakra);

  personagens_chakra.push(personagem_menor_chakra_idade.nome, personagem_menor_chakra_idade.idade/personagem_menor_chakra_idade.chakra);
  res.send(personagens_chakra);
})

/*
console.log(`${personagem_maior_chakra_idade.nome} ${personagem_maior_chakra_idade.sobrenome} foi o personagem com maior relação chakra-idade: ${(personagem_maior_chakra_idade.chakra / personagem_maior_chakra_idade.idade).toFixed(1)}`);

console.log(`${personagem_menor_chakra_idade.nome} ${personagem_menor_chakra_idade.sobrenome} foi o personagem com menor relação chakra-idade: ${(personagem_menor_chakra_idade.chakra / personagem_menor_chakra_idade.idade).toFixed(1)}`);
*/

const personagensNaruto = [
  {
    nome: "Naruto",
    sobrenome: "Uzumaki",
    idade: 17,
    chakra: 100,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Genin",
  },
  {
    nome: "Sasuke",
    sobrenome: "Uchiha",
    idade: 17,
    chakra: 85,
    ehDaFolha: false,
    possuiKekkeiGenkai: true,
    nivel: "Ninja Renegado",
  },
  {
    nome: "Sakura",
    sobrenome: "Haruno",
    idade: 17,
    chakra: 40,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Kakashi",
    sobrenome: "Hatake",
    idade: 31,
    chakra: 50,
    ehDaFolha: true,
    possuiKekkeiGenkai: true,
    nivel: "Jonin",
  },
  {
    nome: "Gaara",
    sobrenome: null,
    idade: 17,
    chakra: 90,
    ehDaFolha: false,
    possuiKekkeiGenkai: true,
    nivel: "Kazekage",
  },
  {
    nome: "Rock",
    sobrenome: "Lee",
    idade: 18,
    chakra: 20,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Hinata",
    sobrenome: "Hyuga",
    idade: 16,
    chakra: 45,
    ehDaFolha: true,
    possuiKekkeiGenkai: true,
    nivel: "Chunin",
  },
  {
    nome: "Shikamaru",
    sobrenome: "Nara",
    idade: 17,
    chakra: 35,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Tsunade",
    sobrenome: null,
    idade: 55,
    chakra: 95,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Hokage",
  },
  {
    nome: "Jiraiya",
    sobrenome: null,
    idade: 54,
    chakra: 88,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Sannin",
  },
  {
    nome: "Orochimaru",
    sobrenome: null,
    idade: 54,
    chakra: 92,
    ehDaFolha: false,
    possuiKekkeiGenkai: false,
    nivel: "Sannin",
  },
  {
    nome: "Itachi",
    sobrenome: "Uchiha",
    idade: 21,
    chakra: 60,
    ehDaFolha: false,
    possuiKekkeiGenkai: true,
    nivel: "Ninja Renegado",
  },
  {
    nome: "Neji",
    sobrenome: "Hyuga",
    idade: 18,
    chakra: 55,
    ehDaFolha: true,
    possuiKekkeiGenkai: true,
    nivel: "Jonin",
  },
  {
    nome: "Tenten",
    sobrenome: null,
    idade: 18,
    chakra: 30,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Ino",
    sobrenome: "Yamanaka",
    idade: 17,
    chakra: 40,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Choji",
    sobrenome: "Akimichi",
    idade: 17,
    chakra: 75,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Kiba",
    sobrenome: "Inuzuka",
    idade: 17,
    chakra: 45,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Shino",
    sobrenome: "Aburame",
    idade: 17,
    chakra: 65,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Sai",
    sobrenome: null,
    idade: 17,
    chakra: 50,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Anbu",
  },
  {
    nome: "Temari",
    sobrenome: null,
    idade: 20,
    chakra: 70,
    ehDaFolha: false,
    possuiKekkeiGenkai: false,
    nivel: "Jonin",
  },
];

let nome_personagem = personagensNaruto.map(personagem =>{
  let nome_completo;
  if(personagem.sobrenome != null){
    nome_completo = personagem.nome + ' ' + personagem.sobrenome;
  }
  else{
    nome_completo = personagem.nome;
  }
  return (nome_completo);
} );
console.log(`Nome completo de todos: `); // Sasuke Uchiha 

console.log(nome_personagem); // Sasuke Uchiha 

let personagens_menores = personagensNaruto.filter(personagem => personagem.idade < 18).map(personagem => {
  let nome_completo_menores;
  if(personagem.sobrenome != null){
    nome_completo_menores = personagem.nome + ' ' + personagem.sobrenome;
  }
  else{
    nome_completo_menores = personagem.nome;
  }
  return (nome_completo_menores);
});
console.log(`Personagens que são menores de idade: ${personagens_menores}`); // 6


let personagens_kekkei_gengai = personagensNaruto.filter(personagem => personagem.possuiKekkeiGenkai == true);
let qtd_personagens_kekkei_gengai = personagens_kekkei_gengai.length;
console.log(`Quantidade de personagens da folha que possuem kekkei-gengai: ${qtd_personagens_kekkei_gengai}`); // 6

let personagens_chakras_joinin = personagensNaruto
  .filter(personagem => personagem.nivel === 'Jonin')
  .map(personagem => personagem.chakra);

console.log(`Seleção de chakras que são Jonin: ${personagens_chakras_joinin}`);

let chakras = personagensNaruto.map(personagem => personagem.chakra);
let soma_chakras = 0;
for(let i = 0; i < chakras.length; i++){
  soma_chakras += chakras[i];
}
let media_chakras = soma_chakras / chakras.length;
let maior_chakra = Math.max(...chakras);

console.log("Soma de chakras: " + soma_chakras);
console.log("Média de chakras: " + media_chakras);
console.log("O maior chakra: " + maior_chakra);

let rel_chakras_chunin_idade = personagensNaruto
  .filter(personagem => personagem.nivel === 'Chunin')
  .map(personagem => personagem.chakra/personagem.idade);

let chunins = personagensNaruto.filter(personagem => personagem.nivel === 'Chunin');

let soma__chakras_idade = rel_chakras_chunin_idade.reduce((somatorio, div_chakras_idade) => {
  return somatorio + div_chakras_idade;
},0);

let media_chakras_idade = soma__chakras_idade / chunins.length;
console.log("Somatório: "+ soma__chakras_idade.toFixed(1))
console.log("Média chunin-idade: " + media_chakras_idade.toFixed(1))

let maior_chakra_idade = Math.max(...personagensNaruto.map(personagem => personagem.chakra / personagem.idade))
let personagem_maior_chakra_idade = personagensNaruto.find(personagem => Math.round(personagem.chakra / personagem.idade) == Math.round(maior_chakra_idade));

let menor_chakra_idade = Math.min(...personagensNaruto.map(personagem => personagem.chakra / personagem.idade))
let personagem_menor_chakra_idade = personagensNaruto.find(personagem => Math.round(personagem.chakra / personagem.idade) == Math.round(menor_chakra_idade));

console.log(`${personagem_maior_chakra_idade.nome} ${personagem_maior_chakra_idade.sobrenome} foi o personagem com maior relação chakra-idade: ${(personagem_maior_chakra_idade.chakra / personagem_maior_chakra_idade.idade).toFixed(1)}`);

console.log(`${personagem_menor_chakra_idade.nome} ${personagem_menor_chakra_idade.sobrenome} foi o personagem com menor relação chakra-idade: ${(personagem_menor_chakra_idade.chakra / personagem_menor_chakra_idade.idade).toFixed(1)}`);






app.listen(PORT, () =>{
  console.log(`O servidor está rondando na porta ${PORT}`);
});

