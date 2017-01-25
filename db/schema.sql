/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/
--create the database and specified for use
CREATE DATABASE burgers_db DEFAULT CHARACTER SET utf8 ;
USE burgers_db;

--Create the table plans
CREATE TABLE burgers 
(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(50) NOT NULL,
  devoured TINYINT(1) NULL,
  date TIMESTAMP NULL,
  PRIMARY KEY (id)
  );

INSERT INTO `burgers_db`.`burgers` (`burger_name`, `devoured`, `date`) VALUES ('cheeseburger', '0', '2017-01-24');
INSERT INTO `burgers_db`.`burgers` (`burger_name`, `devoured`, `date`) VALUES ('hamburger', '0', '2017-01-24');



