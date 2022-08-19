
const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : 'us-cdbr-east-06.cleardb.net',
        port : 3306,
        user : 'b332c3bf24dbf1',
        password : '87100b85',
        database : 'heroku_2ff86f2f3b48745'
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