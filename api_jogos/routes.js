const express = require('express');
const routes = express.Router();

const JogosController = require('./src/controllers/JogosController')
const CpfController = require('./src/controllers/CpfController')

const jogosController = new JogosController();
const cpfController = new CpfController();

routes.get('/campeonatos', jogosController.campeonatos)
routes.get('/jogos', jogosController.obter)

routes.get('/cpf/:numero', cpfController.consultar)

module.exports = routes;