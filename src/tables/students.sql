CREATE TABLE students (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL UNIQUE,
birth_date DATE NOT NULL,
class_id INT NOT NULL,
FOREIGN KEY (class_id) REFERENCES class(id)
);

CREATE TABLE hobby (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL
);

CREATE TABLE students_hobby (
estudantes_id INT NOT NULL AUTO_INCREMENT,
passatempo_id INT NOT NULL,
PRIMARY KEY(estudantes_id, passatempo_id),
FOREIGN KEY(estudantes_id) REFERENCES students(id),
FOREIGN KEY(passatempo_id) REFERENCES hobby(id)
);