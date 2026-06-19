// É obrigatório utilizar a lógica de LinkedList na implementação!
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Stack {
  constructor() {
    this.top = null; // O topo da pilha (único ponto de entrada e saída)
    this.bottom = null; // Base da pilha, para acessar o anterior do top no método pop
    this.size = 0; // Contador de elementos
  }

  /**
   * Adiciona um elemento ao topo da pilha (Push).
   * O novo nó deve apontar para o antigo topo, e o topo passa a ser o novo nó.
   */
  push(value) {
    const nextNode = new Node(value);
    if (this.top === null) {
      this.top = nextNode;
      this.bottom = nextNode;
    } else {
      this.top.next = nextNode;
      this.top = nextNode;
    }

    this.size++;
    // Implementar aqui
  }

  /**
   * Remove e retorna o valor do elemento que está no topo da pilha (Pop).
   * Deve atualizar o topo para o próximo nó. Tratar caso de pilha vazia.
   */
  pop() {
    // Implementar aqui
    if (this.size != 0) {
      console.log("Antigo topo: " + this.top.value);
      let currentNode = this.bottom;
      while (currentNode.next.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
      this.top = currentNode;
      console.log("Novo topo:" + this.top.value);
      return currentNode;
    } else {
      console.log("Fila vazia");
      return "Lista vazia";
    }
  }

  /**
   * Retorna o valor que está no topo da pilha sem removê-lo (Peek).
   */
  peek() {
    // Implementar aqui
    if (this.size != 0) {
      let currentNode = this.top;
      console.log("Topo da pilha: " + currentNode.value);
      return currentNode;
    } else {
      let currentNode = null;
      console.log("Pilha vazia");
      return currentNode;
    }
  }

  /**
   * Retorna true se a pilha estiver vazia.
   */
  isEmpty() {
    // Implementar aqui
    let currentNode = this.top;
    if (currentNode == null) {
      console.log("Pilha vazia");
      return true;
    } else {
      console.log("Pilha não vazia");
      return false;
    }
  }

  /**
   * Retorna o número de elementos na pilha.
   */
  length() {
    // Implementar aqui
    console.log("Tamanho da pilha: " + this.size);
    return this.size;
  }

  /**
   * Esvazia a pilha completamente.
   */
  clear() {
    // Implementar aqui
    console.log("Antes da limpeza:");
    this.print();
    this.bottom = null;
    this.top = null;
    console.log("Após limpeza:");
    this.print();
  }

  /**
   * Percorre a pilha do topo até a base, imprimindo os valores.
   */
  print() {
    // Implementar aqui
    let currentNode = this.bottom;
    if (currentNode != null) {
      while (currentNode !== null) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      }
    }
  }

  /**
   * Converte a pilha em um Array.
   * Nota: O índice 0 deve ser o topo da pilha para refletir a ordem de saída.
   */
  toArray() {
    // Implementar aqui
    let arr = [];
    if (this.top !== null) {
      let currentNode = this.bottom;
      while (currentNode !== null) {
        arr.push(currentNode.value);
        currentNode = currentNode.next;
      }
      console.log(arr);
      return arr;
    } else {
      console.log("Pilha vazia");
      return "Pilha vazia";
    }
  }

  /**
   * Procura um item na pilha. Retorna true se encontrar.
   */
  includes(item) {
    // Implementar aqui
    if (this.top !== null) {
      let currentNode = this.bottom;
      while (currentNode !== null) {
        if (currentNode.value === item) {
          console.log(`O item ${item} foi encontrado`);
          return true;
        }
        currentNode = currentNode.next;
      }
      console.log(`O item ${item} NÃO foi encontrado`);
    } else {
      console.log("Pilha vazia");
      return "Pilha vazia";
    }
  }

  /**
   * Inverte a ordem dos elementos na pilha.
   * (Desafio extra para os alunos!)
   */
  reverse() {
    // Implementar aqui
    let currentNode = this.bottom;
    this.bottom = this.top;

    console.log(this.bottom.value);
    while (true) {
      if (currentNode.next == this.bottom) {
        this.bottom.next = this.top;
        console.log(this.bottom.value);
      } else {
        currentNode = this.top.next;
      }
    }
  }
}
