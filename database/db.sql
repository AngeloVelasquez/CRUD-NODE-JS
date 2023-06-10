-- creando base de datos
CREATE DATABASE crudnodejsmysql;

-- usando database
use crudnodejsmysql;

-- creando una tabla
CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    dirección VARCHAR(100) NOT NULL,
    telefono VARCHAR(15)
);

-- mostrar tablas
SHOW TABLES;

-- para describir la tabla
describe customer;