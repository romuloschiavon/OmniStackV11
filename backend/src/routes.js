const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router(); //Retirar o pacote de roteador de dentro do express

routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required()
    })
}), SessionController.create); //Login de ONGS

routes.get('/ongs', OngController.index); //Listar todas as ONGS

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create); //Cadastro de ONGS, validação utilizando o celebrate

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentController.index); //Listagem de incidentes (geral) -- criar filtros

routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        auth: Joi.string().required()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
    })
}), IncidentController.create); //Criar incidentes

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentController.delete); //Deletar incidentes com verificação de ID

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        auth: Joi.string().required()
    }).unknown()
}), ProfileController.index) //Listagem de incidentes específicos de cada ONG

module.exports = routes; //Exportar as nossas rotas como um módulo para ser utilizado no index.js
