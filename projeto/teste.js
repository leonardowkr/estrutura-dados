let contador = 0;
function souRecursiva(){
    console.log(++ contador);
    souRecursiva();
}
function contaAte(numeroContar){
    for(let numeroAtual = 0; numeroAtual <= numeroContar; numeroAtual++){
        console.log(numeroAtual);
    }
 }
function contaAteRecursiva(numeroContar, numeroAtual = 1){
    if(numeroAtual > numeroContar){
        return;
    }
    console.log(numeroAtual);
    contaAteRecursiva(numeroContar, numeroAtual + 1);
}

//contaAteRecursiva(10)

function contagemRegressiva(){

}

function contagemRecursiva(numeroAtual){
    if(numeroAtual < 0){
        return;
    }
    console.log(numeroAtual);
    contagemRecursiva(numeroAtual - 1);
}
contagemRecursiva(100);