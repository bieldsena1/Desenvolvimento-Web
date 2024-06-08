let valor = 10
let taxa = 0.5
let ir = 0.30

let calcularValor = (valor,taxaIR, taxaIDF) =>{
    return valor + taxaIR + taxaIDF
}

var resultadoOperacao = (cb) =>{
    let resultado = cb(valor,taxa,ir)

    console.log(resultado)
}

resultadoOperacao(calcularValor)