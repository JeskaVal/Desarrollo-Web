CREATE DATABASE nexus;
USE nexus;

CREATE TABLE informe (
    id_informe INT PRIMARY KEY,
    id_contacto INT,
    id_usuario INT,
    titulo VARCHAR(80),
    descripcion VARCHAR(300),
    estado VARCHAR(10),
    fecha_creacion TIMESTAMP,
    fecha_cierre TIMESTAMP,
    prioridad VARCHAR(10),
    FOREIGN KEY (id_contacto) REFERENCES contacto(id_contacto),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
    );
CREATE TABLE contacto(
    id_contacto INT PRIMARY KEY,
    id_agenda INT,
    nombre VARCHAR(100),
    telefono VARCHAR(15),
    email VARCHAR(100),
    direccion VARCHAR(255),
    rango VARCHAR(3),
    FOREIGN KEY (id_agenda) REFERENCES agenda(id_agenda)
    );
CREATE TABLE usuario(
    id_usuario INT PRIMARY KEY,
    nombre VARCHAR(50),
    contraseña VARCHAR(100),
    rano VARCHAR(3),
    telefono VARCHAR(15),
    email VARCHAR(100)
    );
CREATE TABLE agenda(
    id_agenda INT PRIMARY KEY,
    id_usuario INT,
    nombre VARCHAR(50),
    descripcion VARCHAR(300),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
    );
CREATE TABLE clasificacion(
        id_agenda INT,
        id_etiqueta INT,
        FOREIGN KEY (id_agenda) REFERENCES agenda(id_agenda),
        FOREIGN KEY (id_etiqueta) REFERENCES etiqueta(id_etiqueta)
    );
CREATE TABLE etiqueta(
        id_etiqueta INT PRIMARY KEY,
        nombre VARCHAR(80),
        descripcion VARCHAR(200)
    );