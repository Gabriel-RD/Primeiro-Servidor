let { instrutores, identificadorInstrutor } = require('../bancodedados')


const listarinstrutores = (req, res) => {

    return res.status(200).json(instrutores)

}
const obterinstrutor = (req, res) => {
    const { id } = req.params

    const instrutor = instrutores.find((elemento) => {
        return elemento.id === Number(id)
    })
    if (!instrutor) {
        return res.status(404).json({ mensagem: 'instrutor nao encontrado' })
    }

    return res.status(200).json(instrutor)
}

const cadastrar = (req, res) => {
    const { nome, email, status } = req.body

    if (!nome) {
        return res.status(400).json({ mensagem: 'O nome é obrigatorio.' })
    }
    if (!email) {
        return res.status(400).json({ mensagem: 'O email é obrigatorio.' })
    }

    const instrutor = {
        id: identificadorInstrutor++,
        nome: nome,
        email: email,
        status: status ?? true
    }

    instrutores.push(instrutor)

    return res.status(201).json(instrutor)


}
const atualizarinstrutor = (req, res) => {
    const { nome, email, status } = req.body
    const { id } = req.params

    if (!nome) {
        return res.status(400).json({ mensagem: 'O nome é obrigatorio.' })
    }
    if (!email) {
        return res.status(400).json({ mensagem: 'O email é obrigatorio.' })
    }
    if (!status) {
        return res.status(400).json({ mensagem: 'O status é obrigatorio.' })
    }

    const instrutor = instrutores.find((elemento) => {
        return elemento.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'instrutor nao encontrado' })
    }

    instrutor.nome = nome
    instrutor.email = email
    instrutor.status = status
    return res.status(203).send()
}

const atualizarStatusDoInstrutor = (req, res) => {
    const { id } = req.params
    const { status } = req.body
    const instrutor = instrutores.find((elemento) => {
        return elemento.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'instrutor nao encontrado' })
    }

    instrutor.status = status
    return res.status(203).send()
}

const deletaruminstrutor = (req, res) => {
    const { id } = req.params

    const instrutor = instrutores.find((elemento) => {

        return elemento.id === Number(id)
    })


    if (!instrutor) {
        return res.status(404).json({ mensagem: 'instrutor nao encontrado' })

    }
    instrutores = instrutores.filter((instrutor) => {
        return instrutor.id !== Number(id)
    })
    return res.status(204).send()
}


module.exports = {
    listarinstrutores,
    obterinstrutor,
    cadastrar,
    atualizarinstrutor,
    atualizarStatusDoInstrutor,
    deletaruminstrutor
}
