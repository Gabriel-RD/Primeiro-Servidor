const express = require("express")
const rotas = express()
const instrutores = require("./controladores/instrutores")
const aulas = require("./controladores/aulas")

rotas.get("/instrutores", instrutores.listarinstrutores)

rotas.get("/instrutores/:id", instrutores.obterinstrutor)

rotas.post("/instrutores", instrutores.cadastrar)

rotas.put("/instrutores/:id", instrutores.atualizarinstrutor)

rotas.patch("/instrutores/:id/status", instrutores.atualizarStatusDoInstrutor)

rotas.delete("/instrutores/:id", instrutores.deletaruminstrutor)

rotas.post("/instrutores/idinstrutor/aulas", aulas.cadastraraula)


module.exports = rotas 