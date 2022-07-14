
const { mostrarTintas } = require('../service/service')

const indexController = {
   index(req, res) {
    const listarTintas = mostrarTintas()
        res.render("index", {listarTintas})
    }
}

module.exports = indexController