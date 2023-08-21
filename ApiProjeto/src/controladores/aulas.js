let { instrutores, identificadordeaula, aulas } = require("../bancodedados")

const cadastraraula = (req, res) => {
    const { idinstrutor } = req.params
    const { titulo, descriçao } = req.body
    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idinstrutor)
    })

    if (!instrutor) {
        return res.status(404).json({ mensagem: "O instrutor n existe" })
    }

    const aula = {
        id: identificadordeaula++,
        instrutor_id: Number(idinstrutor),
        titulo: titulo,
        descriçao: descriçao,
    }
    aulas.push(aula)

    return res.status(201).json(aula)

}


module.exports = {
    cadastraraula
}


