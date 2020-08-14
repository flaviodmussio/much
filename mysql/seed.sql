create database preferences;

use preferences;

create table preferences (
    `id` int AUTO_INCREMENT,
    `ip` VARCHAR(50),
    `preference` VARCHAR(50),
    PRIMARY KEY (id)
);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'example';
