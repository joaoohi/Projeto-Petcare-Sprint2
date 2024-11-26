-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database conesMandu;

use conesMandu;

create table cadastro(
idCadastro int primary key auto_increment,
nome VARCHAR(100),
dtNascimento DATE,
cpf CHAR(14),
doacao CHAR(3),
constraint chkDoacao check (doacao IN('sim', 'não')),
email VARCHAR(100) unique,
senha VARCHAR(15),
confirmacaoSenha VARCHAR(15)
);

create table doacao(
idDoacao int primary key auto_increment,
qtd_produto int,
produto VARCHAR(40),
tipo VARCHAR(40),
sabor VARCHAR(40),
ong varchar(100),
fkCadastro INT,
constraint fkCadastroDoacao foreign key (fkCadastro) references cadastro(idCadastro)
);

select * from cadastro;