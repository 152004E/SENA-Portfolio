CREATE DATABASE creditos;

USE creditos;

CREATE TABLE solicitud (
    id INT AUTO_INCREMENT PRIMARY KEY,
    documento_cliente VARCHAR(20) NOT NULL,
    nombre_cliente VARCHAR(100) NOT NULL,
    electrodomestico VARCHAR(100) NOT NULL,
    valor DOUBLE NOT NULL,
    cuantas_cuotas DOUBLE NOT NULL,
    total DOUBLE NOT NULL
);

select * from solicitud;