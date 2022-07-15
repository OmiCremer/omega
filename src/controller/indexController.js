const { mostrarTintas } = require('../service/service')

const indexController = {
   index: function (req, res) {
    const listarTintas = mostrarTintas()
        res.render("index", {listarTintas})
    }
    ,
    list: function (req, res) {
        res.render("link-list")
    }
}

module.exports = indexController