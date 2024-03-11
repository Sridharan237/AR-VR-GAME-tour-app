CREATE TABLE communitychat (
    chat_id VARCHAR(20) PRIMARY KEY,
    message text,
    created_at varchar(20),
    created_by varchar(20),
    communityuser_id VARCHAR(20),   --community user's role   
    community_id VARCHAR(20),
    user_id VARCHAR(20),
    FOREIGN KEY(communityuser_id) REFERENCES communityuserrole(communityuser_id) ON DELETE CASCADE,
    FOREIGN KEY(community_id) REFERENCES community(community_id) ON DELETE CASCADE,
    FOREIGN KEY(user_id) REFERENCES user(user_id) ON DELETE CASCADE
);




