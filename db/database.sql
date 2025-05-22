CREATE DATABASE tiendatelefonos;

USE tiendatelefonos;



CREATE TABLE telefonos(

	id				        INT AUTO_INCREMENT PRIMARY KEY,
    nomproducto			            VARCHAR(50) NOT NULL,
    modeloproducto			        VARCHAR(30) NOT NULL,
    descripcionproducto	            VARCHAR(255) NOT NULL,
    marca                           VARCHAR(30) NOT NULL,
    memoriagb				        INT NOT NULL,
    ramgb					        INT NOT NULL,
    precioproducto			        DECIMAL(5.2) NOT NULL,
    cantidadproducto		        INT NOT NULL,
    imageproducto			        VARCHAR(255) NOT NULL,
    disponibilidadproducto	        BOOLEAN DEFAULT TRUE

)ENGINE =INNODB;


INSERT INTO telefonos 
(nomproducto, modeloproducto, descripcionproducto, marca, memoriagb, ramgb, precioproducto, cantidadproducto, imageproducto) 
VALUES 
('Galaxy S23', 'SM-S911B', 'Smartphone Samsung con gran rendimiento y cámara avanzada', 'Samsung', 256, 8, 799.99, 10, 'galaxy_s23.jpg'),
('iPhone 14', 'A2882', 'Apple iPhone 14 con iOS y chip A15 Bionic', 'Apple', 128, 6, 899.00, 8, 'iphone_14.jpg'),
('Redmi Note 12', '23021RAA2Y', 'Xiaomi con batería duradera y buena pantalla', 'Xiaomi', 128, 6, 249.90, 15, 'redmi_note_12.jpg'),
('Motorola Edge 30', 'XT2203-1', 'Pantalla OLED de 144Hz y Snapdragon 778G+', 'Motorola', 256, 8, 399.99, 12, 'edge_30.jpg'),
('POCO X5 Pro', '22101320G', 'Smartphone con alto rendimiento a bajo precio', 'POCO', 128, 6, 329.50, 20, 'poco_x5_pro.jpg');


SELECT * FROM telefonos;