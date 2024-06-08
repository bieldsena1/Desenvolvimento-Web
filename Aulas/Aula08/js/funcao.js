// função sem parametros
function imprimirNome(){
    console.log('Fulano')
}
function imprimirParOuImpar(){
    var n1 = 5;
    var n2 = 10;

    if(n1 % 2 == 0){
        console.log(true);
    }else{
        console.log(false);
    }
    if(n2 % 2 == 0){
        console.log(true);
    }else{
        console.log(false);
    }
}
function compararNumero(n1,n2){
    if(n1 == n2){
        console.log(true);
    }else{
        console.log(false);
    }
}
imprimirNome()
imprimirParOuImpar()
compararNumero(2,3)