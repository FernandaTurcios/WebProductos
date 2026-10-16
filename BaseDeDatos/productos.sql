CREATE DATABASE Parcial2DB;
GO

USE Parcial2DB;
GO

CREATE TABLE Productos (
    IdProducto INT IDENTITY(1,1) PRIMARY KEY,
    Nombre NVARCHAR(100) NOT NULL,
    Categoria NVARCHAR(50) NOT NULL,
    Precio DECIMAL(10,2) NOT NULL,
    Stock INT NOT NULL
);
GO

INSERT INTO Productos (Nombre, Categoria, Precio, Stock)
VALUES
('Laptop HP', 'Tecnología', 4500, 8),
('Mouse Logitech', 'Accesorios', 150, 25),
('Teclado mecánico', 'Accesorios', 350, 12),
('Monitor Samsung', 'Tecnología', 1800, 6),
('Audífonos Sony', 'Audio', 650, 15),
('Impresora Epson', 'Oficina', 2200, 4);
GO

SELECT * FROM Productos;