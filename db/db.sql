-- Creamos la DB (Crear DB si se desea utilizar una local y no la de heroku)-- 
create database appsprint;

-- Seleccionamos la DB (Si deseas utilizar la de heroku, omitir el paso "CREAR TABLA" y usar "use heroku_b94d852201155b2; una vez conectado a la db y no crear tablas, ya estan creadas." --
use appsprint;

create table products(
	id int unsigned not null auto_increment,
    product varchar(50) not null,
    stock int unsigned not null,
    primary key(id)
);
INSERT INTO products VALUES ( NULL,"AC/DC Module", "3500"); 