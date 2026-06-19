class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  constructor() {
    this.head = null; // O primeiro elemento da fila (quem sai primeiro)
    this.tail = null; // O último elemento da fila (quem entrou por último)
    this.size = 0; // Controle de quantidade de elementos
  }

  /**
   * Adiciona um novo elemento ao final da fila (Enqueue).
   * Se a fila estiver vazia, o novo nó será tanto o head quanto o tail.
   */
  queue(value) {
    const nextNode = new Node(value);

    if (this.head === null) {
      this.head = nextNode;
      this.tail = nextNode;
    } else {
      this.tail.next = nextNode;
      this.tail = nextNode;
    }

    this.size++;
  }

  /**
   * Remove e retorna o valor do elemento que está na frente da fila (Dequeue).
   * Lembre-se de atualizar o 'head' para o próximo nó e tratar o caso de fila vazia.
   */
  dequeue() {
    if (this.head === null) {
      return null;
    }

    const removedValue = this.head.value;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.size--;
    return removedValue;
  }

  /**
   * Percorre a fila do início ao fim imprimindo cada valor no console.
   */
  print() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  /**
   * Retorna o valor do primeiro elemento da fila sem removê-lo.
   * Se a fila estiver vazia, retorne null ou undefined.
   */
  peek() {
    // Implementar aqui
    if(this.size != 0){
        let currentNode = this.head;
        console.log(currentNode.value)
        return currentNode;
    }
    else{
        let currentNode = null;
        console.log('Fila vazia')
        return currentNode;
    }     
  }

  /**
   * Retorna um booleano: true se a fila não tiver elementos, false caso contrário.
   */
  isEmpty() {
    // Implementar aqui
    if(this.size == 0){
        console.log('Fila vazia')
        return true;
    }
    else{
        console.log('Fila não vazia');
        return false;
    }
  }

  /**
   * Retorna a quantidade atual de elementos na fila.
   */
  length() {
    // Sugestão: mudar nome de size() para length() para evitar conflito com a propriedade this.size
    // Implementar aqui
    console.log(`Tamanho da lista: ${this.size}`);
    return this.size;
  }

  /**
   * Remove todos os elementos da fila, resetando head, tail e size.
   */
  clear() {
    
    this.tail = null;
    this.head = null; // Zerando as referencias que acessam a lista, o JS 
    // limpa automaticamente esses objetos
    // Implementar aqui
  }

  /**
   * Verifica se um valor específico está presente em algum nó da fila.
   * Retorna true ou false.
   */
  includes(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if(currentNode.value == value){
        console.log(`O(A) ${value} está na fila.`);
        return true;
      }
      currentNode = currentNode.next;
    }
    console.log(`O(A) ${value} NÃO está na fila.`);
    return false;
    // Implementar aqui (Dica: use um loop similar ao print)
  }

  /**
   * Cria e retorna um Array JavaScript contendo todos os valores da fila,
   * mantendo a ordem do primeiro (índice 0) ao último.
   */
  toArray() {
      let currentNode = this.head;
      let vetor = [];
      while (currentNode !== null) {
        vetor.push(currentNode.value);
        currentNode = currentNode.next;
    }
    console.log(vetor);
    return vetor;
    // Implementar aqui
  }

  /**
   * Aplica uma função de callback em cada elemento e retorna uma NOVA Queue
   * com os resultados, seguindo o comportamento do Array.map().
   */
  map(callback) {
    // Implementar aqui
    let currentNode = this.head;
    let vetor = [];
    while (currentNode !== null) {
      vetor.push(callback(currentNode.value));
      currentNode = currentNode.next;
    }
    console.log(vetor);
    return vetor;
  }

  /**
   * Retorna uma NOVA Queue contendo apenas os elementos que passarem
   * no teste implementado pela função callback (deve retornar true).
   */
  filter(callback) {
    // Implementar aqui
    let currentNode = this.head;
    let queue = new Queue();
    while (currentNode !== null) {
    if(callback(currentNode.value)){
      queue.queue(currentNode.value);
    }
      currentNode = currentNode.next;
    }
    console.log(queue);
    return queue;
  }

  /**
   * Executa uma função redutora sobre cada elemento da fila, resultando em um único valor de retorno.
   * (Ex: somar todos os valores).
   */
  reduce(callback, initialValue) {
    // Implementar aqui
    let currentNode = this.head;
    let acumulador = initialValue; 
    while(currentNode !== null){
      acumulador = callback(acumulador, currentNode.value);
      currentNode = currentNode.next;
    }
    return acumulador;
  }
}