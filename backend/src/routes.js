const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router(); //Retirar o pacote de roteador de dentro do express

routes.post('/sessions', SessionController.create); //Login de ONGS

routes.get('/ongs', OngController.index); //Listar todas as ONGS
routes.post('/ongs', OngController.create); //Cadastro de ONGS

routes.get('/incidents', IncidentController.index); //Listagem de incidentes (geral) -- criar filtros
routes.post('/incidents', IncidentController.create); //Criar incidentes
routes.delete('/incidents/:id', IncidentController.delete); //Deletar incidentes com verificação de ID

routes.get('/profile', ProfileController.index) //Listagem de incidentes específicos de cada ONG

module.exports = routes; //Exportar as nossas rotas como um módulo para ser utilizado no index.js
