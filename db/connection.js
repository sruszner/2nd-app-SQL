
const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : '127.0.0.1',
        port : 3306,
        user : 'root',
        password : 'Leonalizayramon4455!',
        database : 'appsprint'
    }
});


knex.schema.hasTable('products').then(function(exists) {
    if (!exists) {
            return knex.schema.createTable('products', function(t) {
            t.increments('id').primary();
            t.string('product', 100);
            t.integer('stock', 100);
        });
    }
});


module.exports = knex;