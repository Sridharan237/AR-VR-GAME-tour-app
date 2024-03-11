CREATE TABLE comment (
    comment_id VARCHAR(20) PRIMARY KEY,
    comment_text TEXT,
    created_at VARCHAR(30),
    created_by VARCHAR(30),
    user_id VARCHAR(20),
    experience_id VARCHAR(20),
    FOREIGN KEY(user_id) REFERENCES user(user_id) ON DELETE CASCADE,
    FOREIGN KEY(experience_id) REFERENCES experience(experience_id) ON DELETE CASCADE
);