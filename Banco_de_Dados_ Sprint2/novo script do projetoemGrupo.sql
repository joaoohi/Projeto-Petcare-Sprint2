-- Banco de dados da empresa 
create database petCare;

-- Usando 
use petCare;

-- Tabela onde armazenaremos os dados da empresa
create table empresa(
	idEmpresa int primary key auto_increment,
	razao_social varchar(45) not null,
    nome_fantasia varchar(45) not null,
    cnpj char(14) not null unique,
    cep char(9) not null,
    telefoneEmpresa char(14),
    telefoneCelular char(11),
    emailEmpresa varchar(45) not null unique,
    senha varchar(45)
);

-- Tabela onde armazenaremos os dados do funcionario da empresa,
create table usuario(
	idUsuario int primary key auto_increment,
    nome varchar(45) not null,
	dtNascimento date,
    cpf char(12) not null,
    email varchar(45) not null,
    senha varchar(45) not null,
	cargo varchar(45) not null,
    fkEmpresa int, constraint fkUsuarioEmpresa foreign key (fkEmpresa)
					references empresa(idEmpresa)
	);

-- Tabela onde armazenaremos as informações do transporte
    create table van(
    idVan int primary key auto_increment,
    fkEmpresaVan int, constraint fkEmpresaVan foreign key (fkEmpresaVan)
					references empresa(idEmpresa),
    modeloComputador varchar(45),
    internet varchar(45)
    );
    
-- Tabela onde armazenaremos informações do sensor de temperatura utilizados
create table sensorTemperatura(
	idSensorTemperatura int primary key auto_increment,
    modeloSensor varchar(45) not null, 
    status_sensor varchar(45), constraint chkStatus_sensorTemperatura
							check (status_sensor in('Ativo', 'Inativo', 'Desativado')),
    fkVanSensor int, constraint fkVanSensor foreign key (fkVanSensor) 
					references van(idVan)
    );
    
-- Tabela onde será armazenaremos as leituras do sensor de Temperatura
    create table medidaTemperatura (
    idMedidaTemperatura int auto_increment,
    sensor_analogico float,
    momento datetime default current_timestamp,
	fkSensorTemperatura int default 1,
    primary key(idMedidaTemperatura, fkSensorTemperatura),
    foreign key (fkSensorTemperatura) references sensorTemperatura(idSensorTemperatura)
);

-- Tabela onde armazenaremos informações das gaiolas
create table gaiola(
	idGaiola int primary key auto_increment,
    fkVanGaiola int,
    constraint fkGaiolaVan foreign key (fkVanGaiola) 
					references van(idVan)
    );
    

-- Tabela onde armazenaremos informações do sensores de presença utilizados
create table sensorPresenca(
	idSensorPresenca int primary key auto_increment,
    modeloSensor varchar(45) not null, 
    status_sensor varchar(45), constraint chkStatus_sensorPresenca
							check (status_sensor in('Ativo', 'Inativo', 'Desativado')),
    fkGaiolaSensorPresenca int, 
    constraint fkGaiolaSensorPresenca foreign key (fkGaiolaSensorPresenca) 
					references gaiola(idGaiola)
    );
    
    -- Tabela onde será armazenaremos as leituras do sensor de Presenca
    create table medidaPresenca (
    idMedidaPresenca int auto_increment,
    sensor_digital int,
    momento datetime default current_timestamp,
	fkSensorPresenca int default 1,
    primary key(idMedidaPresenca, fkSensorPresenca),
    foreign key (fkSensorPresenca) references sensorPresenca(idSensorPresenca)
);

insert into empresa values
(default, 'PetShop Vida Animal', 'Vida Animal', '12345678000199', '12345-678', '1234567890', '958746958', 'vida.animal@email.com', 'senha123'),
(default, 'Cão e Gato Pet Store', 'Cão & Gato', '98765432000188', '23456-789', '0987654321','924783241', 'cao.gato@email.com', 'senha456'),
(default, 'Pet Amigo LTDA', 'Pet Amigo', '11122233000177', '34567-890', '1122334455', '934724169', 'pet.amigo@email.com', 'senha789');

 
    insert into usuario  values
-- Funcionários da empresa 1
(default, 'Ana Silva',  '1985-02-10', '123456789012', 'ana.silva@vida.animal.com', 'senhaAna', 'Motorista', 1),
(default, 'Carlos Souza',  '1990-06-20', '987654321012', 'carlos.souza@vida.animal.com', 'senhaCarlos', 'Cuidador de Pets', 1),

-- Funcionários da empresa 2
(default, 'Roberto Lima',  '1982-03-05', '789123456012', 'roberto.lima@cao.gato.com', 'senhaRoberto', 'Motorista', 2),
(default, 'Fernanda Oliveira',  '1987-07-18', '321654987012', 'fernanda.oliveira@cao.gato.com', 'senhaFernanda', 'Cuidadora de Pets', 2),

-- Funcionários da empresa 3
(default, 'Pedro Ramos',  '1988-01-08', '159753486012', 'pedro.ramos@pet.amigo.com', 'senhaPedro', 'Motorista', 3),
(default, 'Lucas Mendes',  '1991-04-12', '753951486012','lucas.mendes@pet.amigo.com', 'senhaLucas', 'Cuidador de Pets', 3);

-- Inserindo dados dos transportes de cada empresa 
    insert into van values
-- Transportes da empresa 1
(default, 1, 'Lenovo', '500mb'),
(default, 1, 'Lenovo', '500mb'),
(default, 1, 'Lenovo', '500mb'),

-- Transportes da empresa 2
(default, 2, 'Positivo', '500mb'),

-- Transportes da empresa 3
(default, 3, 'Positivo', '500mb');

-- Inserindo dados dos sensorTemperatura utilizado   
insert into sensorTemperatura values
-- Sensores para os transportes da empresa 1
(default, 'lm-35', 'Ativo', 1),
(default, 'lm-35', 'Ativo', 2),
(default, 'lm-35', 'Ativo', 3);

-- Inserindo dados das leituras do sensor de temperatura
insert into medidaTemperatura values
(default, 22.1, default, default);

-- Inserindo dados na tabela gaiola
insert into gaiola values
-- Para van 1 terá 5 gaiolas
(default, 1),
(default, 1),
(default, 1),
(default, 1),
(default, 1),

-- Para van 2 terá 5 gaiolas
(default, 2),
(default, 2),
(default, 2),
(default, 2),
(default, 2),

-- Para van 3 terá 5 gaiolas
(default, 3),
(default, 3),
(default, 3),
(default, 3),
(default, 3);

insert into sensorPresenca values
-- Sensores para os transportes da empresa 1
(default, 'tcrt-5000', 'Ativo', 1),
(default, 'tcrt-5000', 'Ativo', 2),
(default, 'tcrt-5000', 'Ativo', 3);

-- Inserindo dados das leituras do sensor de temperatura
insert into medidaPresenca values
(default, 0, default, default);

select * from empresa;

select * from usuario;

select * from van;

select * from sensorTemperatura;

select * from sensorPresenca;

select * from gaiola;

select * from medidaTemperatura;

select * from medidaPresenca;

-- select onde tem um join da tabela empresa com usuario
select * from empresa join usuario on idEmpresa = fkEmpresa;

-- select onde tem um join entre o empresa e a van
select * from empresa join van on idEmpresa = fkEmpresaVan ;

-- select onde tem um join entre a van e o sensor de Temperatura
select * from van join sensorTemperatura on idVan = fkVanSensor;

-- select onde tem um join entre a van e o sensor de Presenca
select * from van join gaiola on idVan = fkVanGaiola
join sensorPresenca on idGaiola = fkGaiolaSensorPresenca;

-- select onde tem um join entre o sensor de temperatura e a medida
select * from sensorTemperatura join medidaTemperatura on idSensorTemperatura = fkSensorTemperatura;

-- select onde tem um join entre o sensor de presenca e a medida
select * from sensorPresenca join medidaPresenca on idSensorPresenca = fkSensorPresenca;

-- select utilizando as

select nome as NomeFuncionario,
		email as EmailFuncionario,
		cargo as CargoFuncionario 
        from usuario;
        
-- select utilizando ifnull    
select nome_fantasia as NomeEmpresa,
		IFNULL(telefoneEmpresa, 'Telefone não cadastrado')as Telefone,
		emailEmpresa as EmailEmpresa from empresa;
        
-- select utilizando case
select modeloSensor as 'Modelo do sensor',
case when status_sensor = 'Ativo' then 'Sensor Ativo'
	when status_sensor = 'Desativado' then 'Sensor Desativado'
	else 'Status Desconhecido'
    end as StatusDescricao from sensorTemperatura;

select e.nome_fantasia, v.idVan, t.sensor_analogico,
     t.momento, g.*, p.sensor_digital, p.momento
from empresa as e left join van as v on idEmpresa = fkEmpresaVan
join sensorTemperatura on idVan = fkVanSensor
join gaiola as g on v.idVan = g.fkVanGaiola
join sensorPresenca on idGaiola = fkGaiolaSensorPresenca
left join medidaTemperatura as t on idSensorTemperatura = fkSensorTemperatura
left join medidaPresenca as p on idSensorPresenca = fkSensorPresenca;









