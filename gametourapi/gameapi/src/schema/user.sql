CREATE TABLE user (
    user_id VARCHAR(20) PRIMARY KEY,
    username VARCHAR(30),
    email VARCHAR(40) UNIQUE,
    password varchar(20),
    profile_picture TEXT,
    created_at VARCHAR(30),
    created_by VARCHAR(30),
    status VARCHAR(50)
);