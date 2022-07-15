const { mostrarTintas } = require('../service/service')

const tintasController = {

   async listarTintas(req, res) {
        const listarTintas = await mostrarTintas()
        res.render("tintas", {listarTintas: listarTintas})
    }
}

module.exports = tintasController