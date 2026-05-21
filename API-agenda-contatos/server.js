import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

let contatos = [
  { id: 1, nome: 'Ana Silva', telefone: '11999998888', email: 'ana@email.com' },
  { id: 2, nome: 'Bruno Costa', telefone: '21988887777', email: 'bruno@email.com' },
];
let proximoId = 3; // controla o id do próximo contato criado

app.get('/contatos', (req, res) => {
    res.json(contatos);
});

app.get('/contatos/:id', (req, res) => {
    res.json(contatos.find(c => c.id == req.params.id));
})

app.post('/contatos', (req, res) => {
    const novo = { id: proximoId++, ...req.body };
    contatos.push(novo);
    res.send('Contato salvo!');
})

app.put('/contatos/:id', (req, res) => {
  const contato = contatos.find(c => c.id == req.params.id);
  contato.nome = req.body.nome;
  contato.telefone = req.body.telefone;
  contato.email = req.body.email;
  res.json(contato)
})

app.delete('/contatos/:id', (req, res) => {
  const idContato = contatos.findIndex(c => c.id == req.params.id);
  contatos.splice(idContato, 1);

  if(idContato != -1){
    res.send('Contato excluido');
  }
  else{
    res.send('Erro');
  }
})

app.listen(PORT, () => {
  console.log('Servidor rodando na porta', PORT);
});