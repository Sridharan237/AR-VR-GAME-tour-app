CREATE TABLE community (
    community_id VARCHAR(20) PRIMARY KEY,
    community_name VARCHAR(30),
    privacy_level VARCHAR(10),
    description varchar(50),
    created_at varchar(30),
    created_by varchar(30),
    user_id VARCHAR(20),
    FOREIGN KEY(user_id) REFERENCES user(user_id) ON DELETE CASCADE   
);