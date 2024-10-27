
-- Banco de dados da empresa 
create database petCare;
-- Usando 
use petCare;

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

insert into petshop values
(default, 'PetShop Vida Animal', 'Vida Animal', '12345678000199', '12345-678', '1234567890', 'vida.animal@email.com', 'senha123'),
(default, 'Cão e Gato Pet Store', 'Cão & Gato', '98765432000188', '23456-789', '0987654321', 'cao.gato@email.com', 'senha456'),
(default, 'Pet Amigo LTDA', 'Pet Amigo', '11122233000177', '34567-890', '1122334455', 'pet.amigo@email.com', 'senha789');


-- Tabela onde armazenaremos os dados do funcionario da empresa,
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
    insert into usuario  values
-- Funcionários da empresa 1
(default, 'Ana Silva', '123456789012', '1985-02-10', 'ana.silva@vida.animal.com', 'senhaAna', 'Motorista', 1),
(default, 'Carlos Souza', '987654321012', '1990-06-20', 'carlos.souza@vida.animal.com', 'senhaCarlos', 'Cuidador de Pets', 1),

-- Funcionários da empresa 2
(default, 'Roberto Lima', '789123456012', '1982-03-05', 'roberto.lima@cao.gato.com', 'senhaRoberto', 'Motorista', 2),
(default, 'Fernanda Oliveira', '321654987012', '1987-07-18', 'fernanda.oliveira@cao.gato.com', 'senhaFernanda', 'Cuidadora de Pets', 2),

-- Funcionários da empresa 3
(default, 'Pedro Ramos', '159753486012', '1988-01-08', 'pedro.ramos@pet.amigo.com', 'senhaPedro', 'Motorista', 3),
(default, 'Lucas Mendes', '753951486012', '1991-04-12', 'lucas.mendes@pet.amigo.com', 'senhaLucas', 'Cuidador de Pets', 3);



-- Tabela onde armazenaremos as informações do transporte
    create table transporte(
    idTransporte int primary key auto_increment,
    fkEmpresaPetShop int, constraint fkTransportePetshop foreign key (fkEmpresaPetShop)
					references petshop(idPetShop),
    QuantidadeGaiolas int,
    QuantidadeVeiculos int
    );
    
    -- Inserindo dados dos transportes de cada empresa 
    insert into transporte  values
-- Transportes da empresa 1
(default, 1, 3, 1),

-- Transportes da empresa 2
(default, 2, 3, 1),

-- Transportes da empresa 3
(default, 3, 3, 1);

    
-- Tabela onde armazenaremos informações do sensores utilizados
create table sensores(
	idSensores int primary key auto_increment,
    tipo varchar(45) not null, 
    status_sensor varchar(45), constraint chkStatus_sensor
							check (status_sensor in('Ativo', 'Inativo', 'Desativado')),
    fkTransporte int, constraint fkSensoresTransporte foreign key (fkTransporte) 
					references transporte(idTransporte)
    );
    
-- Inserindo dados dos sensores utilizados    
insert into sensores values
-- Sensores para os transportes da empresa 1
(default, 'Temperatura', 'Ativo', 1),
(default, 'Bloqueio', 'Ativo', 1),
(default, 'Bloqueio', 'Ativo', 1),
(default, 'Bloqueio', 'Ativo', 1),


-- Sensores para os transportes da empresa 2
(default, 'Temperatura', 'Desativado', 2),
(default, 'Bloqueio', 'Desativado', 2),
(default, 'Bloqueio', 'Desativado', 2),
(default, 'Bloqueio', 'Desativado', 2),

-- Sensores para os transportes da empresa 3
(default, 'Temperatura', 'Ativo', 3),
(default, 'Bloqueio', 'Ativo', 3),
(default, 'Bloqueio', 'Ativo', 3),
(default, 'Bloqueio', 'Ativo', 3);



-- Tabela onde receberemos e armazenaremos os dados dos sensores
create table medida (
    idMedida int auto_increment,
    fkSensores int ,
    sensor_analogico float,
    sensor_digital float,
    data_hora datetime default current_timestamp,
    primary key(idMedida, fkSensores),
    foreign key (fkSensores) references sensores(idSensores)
);



select * from petshop;

select * from usuario;

select * from transporte;

select * from sensores;

select * from medida;

-- select que ver todas as tabela, apenas o nome






