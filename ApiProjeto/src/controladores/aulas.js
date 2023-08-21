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





// const listarAulas = (req, res) => {

//     return res.status(200).json(aulas);

// }




// const obterAula = (req, res) => {

//     const { id } = req.params;




//     const aula = aulas.find((aula) => {

//         return aula.id === Number(id);

//     });




//     if (!aula) {

//         return res.status(404).json({ mensagem: 'Aula não encontrada' });

//     }




//     return res.status(200).json(aula);

// }




// const obterAulasInstrutor = (req, res) => {

//     const { idInstrutor } = req.params;




//     const instrutor = instrutores.find((instrutor) => {

//         return instrutor.id === Number(idInstrutor);

//     });




//     if (!instrutor) {

//         return res.status(404).json({ mensagem: 'O instrutor não existe' });

//     }




//     const aulasEncontradas = aulas.filter((aula) => {

//         return aula.instrutor_id === instrutor.id;

//     });




//     return res.status(200).json(aulasEncontradas);

// }




// module.exports = {

//     cadatrarAula,

//     listarAulas,

//     obterAula,

//     obterAulasInstrutor

// }