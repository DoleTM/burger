DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER(2) AUTO_INCREMENT,
    burger_name VARCHAR(15) NOT NULL,
    devoured BOOLEAN false
);