CREATE TABLE experience (
    experience_id VARCHAR(20) PRIMARY KEY,
    title VARCHAR(30),
    description TEXT,
    images text,
    videos text,
    created_at varchar(30),
    created_by varchar(30),
    likes INTEGER,
    dislikes INTEGER,
    user_id VARCHAR(20),
    FOREIGN KEY(user_id) REFERENCES user(user_id) ON DELETE CASCADE  
);