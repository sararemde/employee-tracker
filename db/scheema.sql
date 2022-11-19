/* create database table */
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;


CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role_ (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERNCES department(id)
        ON DELETE CASCADE
 );

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    FOREIGN KEY (manafer_id) REFERENCES employee(id)
        ON DELETE SET NULL,
    FOREIGN KEY (role_id) REFERENCES role(id)
        ON DELETE CASCADE
)