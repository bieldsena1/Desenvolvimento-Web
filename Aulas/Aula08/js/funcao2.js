var numero1 = document.getElementById('n1');
var numero2 = document.getElementById('n2');
function comparaNumero(){
    if(Number(numero1.value) === Number(numero2.value)){
        console.log(true)
    }else{
        console.log(false)
    }
}
function soma(){
    var resultado = Number(numero1.value) + Number(numero2.value);

    console.log(resultado)

    var res = document.getElementById('resultado')
    res.textContent = resultado
}
