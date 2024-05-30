    var pix = {
        chavePix: 'biel.picpay11',
        valor: 110.00,
        diaFeito: 11.05,       
        descricao: 'Pix realizado com sucesso',
        pagador: 'henrique'

    }
    var pagador = {
        nome: 'henrique',
        cpf: 12345678900

    }
    var recebedor = {
        nome: 'biel',
        cpf: 12435678900


    }
    var transacoes = {
        feitas: [
            {
                data: 11.05,
                valor: 110.05,
                descricao: 'Pix realizado com sucesso'
            },
            {
                data: 14.05,
                valor: 110.05,
                descricao: 'Pix realizado com sucesso'
            },
            {
                data: 18.05,
                valor: 110.05,
                descricao: 'Pix realizado com sucesso'
            }

        ]

    }
    console.log(pix)
    console.log(pagador)
    console.log(recebedor)
    console.log(transacoes)