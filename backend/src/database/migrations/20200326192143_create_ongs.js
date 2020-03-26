exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary(); //a chain .primary define que o que vier anteriormente dela será definido como prioridade/primário, neste exemplo o ID será sempre a primeira coisa.
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    }); //Cria um banco de dados com uma função de callback para alterações
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
}; // Método para deletar/dropar a tabela neste caso específico.
