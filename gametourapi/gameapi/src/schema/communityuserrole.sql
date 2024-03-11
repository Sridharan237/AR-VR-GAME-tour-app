--community joined users role in community is in this table = admin or member

CREATE TABLE communityuserrole (
    communityuser_id VARCHAR(20) PRIMARY KEY,
    role varchar(20), --admin or member
    joined_at varchar(30),
    community_id VARCHAR(20) ,
    user_id VARCHAR(20) ,
    FOREIGN KEY(community_id) REFERENCES community(community_id) ON DELETE CASCADE
    FOREIGN KEY(user_id) REFERENCES user(user_id) ON DELETE CASCADE
);

