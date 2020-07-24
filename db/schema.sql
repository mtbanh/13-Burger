DROP DATABASE IF EXISTS vietnamese_foods_db;

CREATE DATABASE vietnamese_foods_db;

USE vietnamese_foods_db;

CREATE TABLE foods(
id INT(30) NOT NULL auto_increment PRIMARY KEY,
food_name VARCHAR(300) NOT NULL,
easy_eat boolean NOT NULL
);