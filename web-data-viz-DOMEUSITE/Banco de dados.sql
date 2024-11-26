create database conesMandu;

use conesMandu;

create table cadastro(
idCadastro int primary key auto_increment,
nome VARCHAR(100),
dtNascimento DATE,
cpf CHAR(14),
doacao CHAR(3),
constraint chkDoacao check (doacao IN('sim', 'não')),
email VARCHAR(100),
senha VARCHAR(15),
confirmacaoSenha VARCHAR(15)
);

create table doacao(
idDoacao int primary key auto_increment,
valorDoacao FLOAT,
dtDoacao DATE,
fkCadastro INT,
constraint fkCadastroDoacao foreign key (fkCadastro) references cadastro(idCadastro),
ong varchar(100)
);

create table chocolate(
idChocolate int primary key auto_increment,
produto VARCHAR(40),
tipo VARCHAR(40),
sabor VARCHAR(40),
fkDoacao int,
constraint fkDoacaoChocolate foreign key (fkDoacao) references doacao(idDoacao)
);