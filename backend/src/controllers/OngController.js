const crypto = require('crypto'); //Pacote utilizado para gerar um ID
const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const ongs = await connection('ongs').select('*');

        return res.json(ongs);
    },

    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body;

        const id = crypto.randomBytes(4).toString('HEX'); //ID aleatório criptografado
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
    
        return res.json({ id }); 
    }
};