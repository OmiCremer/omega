const fs = require('fs');
const path = require('path');

const tintasPath = path.join(__dirname, '../data/tintas.json')
const tintas = JSON.parse(fs.readFileSync(tintasPath, 'utf8'))

const service= {

    mostrarTintas(){
        const data = tintas.map((tinta) => tinta)
        return data
    }
}

module.exports = service;