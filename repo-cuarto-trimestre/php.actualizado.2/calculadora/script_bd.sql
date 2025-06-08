CREATE DATABASE CALCULADORA;
USE CALCULADORA;
CREATE TABLE REGISTRO(
id smallint auto_increment primary key,
numero1 double not null,
numero2 double not null,
total double not null,
operacion varchar(255) not null
);