const crypto = require('crypto'); //Pacote utilizado para gerar um ID

module.exports = function generateUniqueID(){
    return crypto.randomBytes(4).toString('HEX'); //ID aleatório criptografado
}