DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;
USE bamazon_DB;

CREATE TABLE Products(
    ItemID MEDIUMINT AUTO_INCREMENT NOT NULL,
    ProductName VARCHAR(100) NOT NULL,
    DepartmentName VARCHAR(50) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    StockQuantity INT(10) NOT NULL,
    primary key(ItemID)
);

select * from Products;

INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity)
VALUES ("12 Pack of Spam","FRESH",69.95,1234),
    ("Case of Pineapples","FRESH",9.99,5678),
    ("Shelf","HOME",3.99,9102),
    ("Leather Jacket in Denim","CLOTHING",75.00,3456),
    ("Hask Henna 'N' Placenta Original 2 Oz .1pack","BEAUTY & HEALTH",88.88,7890),
    ("Cleanwaste Go Anywhere Total System","SPORTS & OUTDOORS",188.88,1122),
    ("Diapers","KIDS",100.00,3344),
    ("10 Things I Hate About You","ENTERTAINMENT",25.50,5566),
    ("Why Men Love Bitches","BOOKS",100.00,7788),
    ("Boise State Cornhole","SPORTS & OUTDOORS",0.95,9900);

CREATE TABLE Departments(
    DepartmentID MEDIUMINT AUTO_INCREMENT NOT NULL,
    DepartmentName VARCHAR(50) NOT NULL,
    OverHeadCosts DECIMAL(10,2) NOT NULL,
    TotalSales DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(DepartmentID));

INSERT INTO Departments(DepartmentName, OverHeadCosts, TotalSales)
VALUES ('FRESH', 50000.00, 15000.00),
    ('ENTERTAINMENT', 20000.00, 12000.00),
    ('HOME', 30000.00, 15000.00),
    ('BEAUTY & HEALTH', 3000.00, 12000.00),
    ('BOOKS', 1200.00, 15000.00),
    ('KIDS', 40000.00, 12000.00),
    ('CLOTHING', 35000.00, 15000.00),
    ('SPORTS & OUTDOORS', 12000.00, 12000.00);

SELECT * FROM Products

