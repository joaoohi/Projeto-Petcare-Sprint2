-- Banco de dados da empresa 
create database Pet_Care;
-- Usando 
use Pet_Care;

-- Tabela onde armazenaremos os dados da empresa
create table petshop(
	idPetShop int primary key auto_increment,
	nome_Empresa varchar(45) not null,
    cnpj char(14) not null unique,
    cep char(9) not null,
    telefoneEmpresa char(12),
    emailEmpresa varchar(45) not null unique,
    senha varchar(45)
);

-- Tabela onde armazenaremos os dados do funcionario da empresa,
-- Onde a empresa irá realizar o cadastro do usuario
create table usuario(
	idUsuario int primary key auto_increment,
    nome varchar(45) not null,
    email varchar(45) not null,
    senha varchar(45) not null,
	cargo varchar(45) not null,
    fkPetShop int, constraint fkUsuarioPetshop foreign key (fkPetShop)
					references petshop(idPetShop)
	);

-- Tabela onde armasenaremos as informações do transporte
    create table transporte(
    idTransporte int primary key auto_increment,
    fkPetshop int, constraint fkUsuarioPetshop foreign key (fkPetShop)
					references petshop(idPetShop),
	portePet varchar(45), constraint chkPorte check (portePet in('Pequeno', 'Medio', 'Grande')),
    QuantidadeGaiolas float,
    nomeResponsavél varchar(45)
    );
    
-- Tabela onde armazenaremos informações do sensores utilizados
create table sensores(
	idSensores int primary key auto_increment,
    tipo varchar(45) not null,
    modelo varchar(45) not null,
    status_sensor varchar(45), constraint chkStatus_sensor
							check (status_sensor in('Ativo', 'Inativo', 'Desativado')),
    fkPetShop int, constraint fkSensoresPetShop foreign key (fkPetShop ) 
					references petshop(idPetShop)
    );
-- Tabela onde receberemos e armazenaremos os dados dos sensores
create table medida(
idMedida int primary key auto_increment,
sensor_analogico float,
sensor_digital float,
fkSensores int, constraint fkMedidaSensores foreign key (fkSensores) 
				references sensores(idSensores)
);

