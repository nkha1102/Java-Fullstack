CREATE TABLE Staffs (
    id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    name varchar(255) NOT NULL,
    birthdate DATETIME,
    role CHAR,
    sex CHAR,
    password varchar(255) NOT NULL,
);
