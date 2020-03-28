const express = require('express');
const cors = require('cors')
const { errors } = require('celebrate');
const routes = require('./routes'); //Importa o módulo de rotas definidos em routes.js utilizado o Roteador do express.

const app = express();

app.use(cors());
app.use(express.json()); //Quando enviamos um body em json é necessário informar ao express que a rota utilizada será em json, sendo assim chama-se a função app.use(express.json());
app.use(routes); //É importante que esta linha de código se mantenha abaixo do express.json!

app.use(errors());

app.listen(3333);

 
/**
 * Tipos de parâmetros:
 * 
 * Query Parameters: Parâmetros nomeados enviados na rota após ? (filtros, paginação)
 * Route Parameters: Parâmetros utilizados para identificar recursos (utiliza um ID por exemplo)
 * Req Body: para acesasr os parâmetros dentro de uma rota você pode acessar o CORPO. Utilizado para criar ou alterar recursos (Post/Put)
 */

 /**
  * Tipos de banco de dados:
  * 
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc...
  * 
  * Nesta semana utilizaremos o SQLite :) Na semana 9 usamos o MongoDB btw :) no entanto o mercado utiliza bancos em SQL e será necessário aprender ele
  */

  /**
   * Comunicando-se com o banco de dados:
   * 
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()... e assim vi <-- utilizada na omnistackv11
   * -> nessa semana utilizaremos o KNEX.JS (um dos se não o query builder mais famoso dentro do node.js)
   */