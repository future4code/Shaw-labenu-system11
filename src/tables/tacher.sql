CREATE TABLE teacher (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL UNIQUE,
data_nasc DATE NOT NULL,
turma_id INT NOT NULL,
FOREIGN KEY (turma_id) REFERENCES class(id)
);

CREATE TABLE expertise (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL
);

CREATE TABLE teacher_expertise (
docente_id INT NOT NULL AUTO_INCREMENT,
especialidade_id INT NOT NULL,
PRIMARY KEY (docente_id, especialidade_id),
FOREIGN KEY(docente_id) REFERENCES teacher(id),
FOREIGN KEY(especialidade_id) REFERENCES expertise(id)
);