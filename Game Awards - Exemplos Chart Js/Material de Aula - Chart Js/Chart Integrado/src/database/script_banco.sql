CREATE DATABASE gameawards;

CREATE TABLE gameawards.votos (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    jogo VARCHAR(50) NOT NULL,
    quantidade INT NOT NULL DEFAULT 0 
);

SELECT * FROM gameawards.votos;

INSERT INTO gameawards.votos (jogo) VALUES 
('Animal Crossing'),
('Doom Eternal'),
('Final Fantasy VII Remake'),
('Ghost of Tsushima'),
('Hades'),
('The Last of Us Part II');