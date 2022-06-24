CREATE TABLE class (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
Class_Name VARCHAR(255) NOT NULL,
Initial_Date DATE NOT NULL,
 Final_Date DATE NOT NULL,
 Module enum ("0","1","2","3","4","5","6","7")INT NOT NULL
 tipo enum ("NOTURNO" , "INTEGRAL") not null
); 



