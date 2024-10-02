create database Pet_Care;
use Pet_Care;


create table petshop(
	idPetShop int primary key auto_increment,
	nomeEmpresa varchar(45) not null,
    cnpj char(14) not null unique,
    cep char(9) not null,
    telefoneEmpresa char(12),
    emailEmpresa varchar(45) not null unique,
    senha varchar(45)
);

create table usuario(
	idUsuario int primary key auto_increment,
    nome varchar(45) not null,
    email varchar(45) not null,
    senha varchar(45) not null,
	cargo varchar(45) not null,
    fkPetShop int, constraint fkUsuarioPetshop foreign key (fkPetShop)
					references petshop(idPetShop)
	);

create table sensores(
	idSensores int primary key auto_increment,
    tipo varchar(45) not null,
    modelo varchar(45) not null,
    status_sensor varchar(45), constraint chkStatus_sensor
							check (status_sensor in('Ativo', 'Inativo', 'Desativado')),
    fkPetShop int, constraint fkSensoresPetShop foreign key (fkPetShop ) 
					references petshop(idPetShop)
    );

create table leituraSensor(
	idLeitura int primary key auto_increment,
    fkSensor int, constraint fkLeituraSensores foreign key (fkSensor)
					references sensores(idSensores),
	temperatura float(5, 2) not null,
    bloqueio char(3), constraint chkLeituraBloqueio 
						check (bloqueio in ('SIM', 'NÃO')),
	dataHora datetime
	);
    


   