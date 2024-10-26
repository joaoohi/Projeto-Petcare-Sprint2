
-- Banco de dados da empresa 
create database Pet_Care;
-- Usando 
use Pet_Care;

-- Tabela onde armazenaremos os dados da empresa
create table petshop(
	idPetShop int primary key auto_increment,
	razao_social varchar(45) not null,
    nome_fantasia varchar(45) not null,
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
    cpf char(12) not null,
    dtNascimento date,
    email varchar(45) not null,
    senha varchar(45) not null,
	cargo varchar(45) not null,
    fkPetShop int, constraint fkUsuarioPetshop foreign key (fkPetShop)
					references petshop(idPetShop)
	);

-- Tabela onde armasenaremos as informações do transporte
    create table transporte(
    idTransporte int primary key auto_increment,
    fkPetshop int, constraint fkTransportePetshop foreign key (fkPetShop)
					references petshop(idPetShop),
    QuantidadeGaiolas int,
    QuantidadeVeiculos int
    );
    
-- Tabela onde armazenaremos informações do sensores utilizados
create table sensores(
	idSensores int primary key auto_increment,
    tipo varchar(45) not null, 
    modelo varchar(45) not null,
    status_sensor varchar(45), constraint chkStatus_sensor
							check (status_sensor in('Ativo', 'Inativo', 'Desativado')),
    fkTransporte int, constraint fkSensoresTransporte foreign key (fkTransporte) 
					references transporte(idTransporte)
    );
-- Tabela onde receberemos e armazenaremos os dados dos sensores
create table medida(
idMedida int auto_increment,
fkSensores int,
primary key(idMedida,fkSensores),
sensor_analogico float,
sensor_digital float,
data_hora datetime default current_timestamp,
foreign key (fkSensores) references sensores(idSensores)
);



