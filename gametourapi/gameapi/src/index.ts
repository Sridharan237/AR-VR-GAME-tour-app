//gametourapi - using cloudflare d1 database
import { Hono } from 'hono'

type Bindings = {
  DB:D1Database;
}

const app = new Hono<{Bindings : Bindings}>()

//Table1
type user = {
  user_id:string;
  username:string;
  email:string;
  password:string;
  profile_picture:string;
  created_at:string;
  created_by:string;
  status:string;
}

//Table2
type experience = {
  experience_id:string;
  title:string;
  description:string;
  images:string;
  videos:string;
  created_at:string;
  created_by:string;
  likes:number;     //no. of likes
  dislikes:number;  //no. of dislikes
  user_id:string;
}

//Table3
type comment = {
  comment_id:string;
  comment_text:string;
  created_at:string;
  created_by:string;
  user_id:string;
  experience_id:string;
}

//Table4
type community = {
  community_id:string;
  community_name:string;
  privacy_level:string;
  description:string;
  created_at:string;
  created_by:string;
  user_id:string;
}

//Table5
type communityuserrole = {
  communityuser_id:string;
  role:string;
  joined_at:string;
  community_id:string;
  user_id:string;
}

//Table6
type communitychat = {
  chat_id:string;
  message:string;
  created_at:string;
  created_by:string;
  communityuser_id:string;
  community_id:string;
  user_id:string;
}

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

//User

//get all users
app.get('/user/sql/get-all', async (c) => {
  const users = await c.env.DB.prepare('SELECT * FROM user').run()

  return c.json(users)
})

//User Profile

//get user by id
app.get('/user/sql/get/:id', async (c) => {

  const user_id = c.req.param('id')

  const user = await c.env.DB.prepare('SELECT * FROM user WHERE user_id = ?').bind(user_id).all()

  return c.json(user)
})

//create user 
app.post('/user/sql/post', async (c) => {

  const {user_id, username, email, password, profile_picture, created_at, created_by, status} = await c.req.json()

  const user:user = {
    user_id:user_id,
    username:username,
    email:email,
    password:password,
    profile_picture:profile_picture,
    created_at:created_at,
    created_by:created_by,
    status:status
  }

  const {success} = await c.env.DB.prepare('INSERT INTO user VALUES (?, ?, ?, ?, ?, ?, ?, ?)').bind(user.user_id, user.username, user.email, user.password, user.profile_picture, user.created_at, user.created_by, user.status).run()

  if(success)
    return c.text('user account created successfully')
  else
  return c.text('creation unsuccessful')
})

//delete user by id
app.delete('/user/sql/get/:id', async (c) => {

  const user_id = c.req.param('id')

  const {success} = await c.env.DB.prepare('DELETE FROM user WHERE user_id = ?').bind(user_id).all()

  if(success)
    return c.text('user account deleted successfully')
  else
  return c.text('deletion unsuccessful')

})

//Home - experiences

//get all experiences
app.get('/experienceapp/sql/get-all', async (c) => {
  const experiences = await c.env.DB.prepare('SELECT * FROM experience').run()

  return c.json(experiences)
})

//get experience by id
app.get('/experienceapp/sql/get/:id', async (c) => {
  const experience_id = c.req.param('id')

  const experience = await c.env.DB.prepare('SELECT * FROM experience WHERE experience_id = ?').bind(experience_id).run()

  return c.json(experience)
})

//create experience
app.post('/experienceapp/sql/create-experience', async (c) => {
  const {experience_id, title, description, images, videos, created_at, created_by, likes, dislikes, user_id} = await c.req.json()

  const experience:experience = {
      experience_id:experience_id, 
      title:title, 
      description:description, 
      images:images, 
      videos:videos, 
      created_at:created_at, 
      created_by:created_by, 
      likes:likes,      //no. of likes
      dislikes:dislikes,   //no. of dislikes
      user_id:user_id
  }

  const {success} = await c.env.DB.prepare('INSERT INTO experience VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)').bind(user_id, title, description, images, videos, created_at, created_by, likes, dislikes, user_id).run()

  if(success)
    return c.text('Experience created successfully')
  else
  return c.text('Experience creation failed')
})

//delete experience by id
app.delete('/experienceapp/sql/delete/:id', async (c) => {
  const experience_id = c.req.param('id')

  const {success} = await c.env.DB.prepare('DELETE FROM experience WHERE experience_id = ?').bind(experience_id).all()

  if(success)
    return c.text('user account deleted successfully')
  else
  return c.text('deletion unsuccessful')
})

//Comments

//comment - for experience
app.get('/experienceapp/sql/get/comments', async (c) => {

  const comments = await c.env.DB.prepare('SELECT * FROM comment').run()

  return c.json(comments)
})

//create comment
app.post('/experienceapp/sql/create/comment', async (c) => {
  const {comment_id, comment_text, created_at, created_by, user_id, experience_id} = await c.req.json()

  const comment:comment = {
    comment_id:comment_id, 
    comment_text:comment_text, 
    created_at:created_at, 
    created_by:created_by, 
    user_id:user_id, 
    experience_id:experience_id
  }

  const {success} = await c.env.DB.prepare('INSERT INTO experience VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)').bind( comment.comment_id,comment.comment_text,comment.created_at,comment.created_by,comment.user_id,comment.experience_id).run()

  if(success)
    return c.text('comment created successfully')
  else
  return c.text('comment creation unsuccessful')
})

//delete comment by id
app.delete('/experienceapp/sql/delete/comment/:id', async (c) => {
  const comment_id = c.req.param('id')

  const {success} = await c.env.DB.prepare('DELETE FROM comment WHERE comment_id = ?').bind(comment_id).run()

  if(success)
    return c.text('user account deleted successfully')
  else
  return c.text('deletion unsuccessful')

})

//community
//get all communities
app.get('/experienceapp/sql/get-all/communities', async (c) => {
  const communities = await c.env.DB.prepare('SELECT * FROM community').run()

  return c.json(communities)
})

//get community by id
app.get('/experienceapp/sql/get/community/:id', async (c) => {
  const community_id = c.req.param('id')

  const community = await c.env.DB.prepare('SELECT * FROM community WHERE community_id = ?').bind(community_id).run()

  return c.json(community)
})

//create community
app.post('/experienceapp/sql/create/community', async (c) => {
  const community:community = await c.req.json()

  const {success} = await c.env.DB.prepare('INSERT INTO community VALUES (?, ?, ?, ?, ?, ?, ?)').bind(community).run()
  // const {success1} = await c.env.DB.prepare('INSERT INTO communityuserrole VALUES (?, ?, ?, ?, ?, ?, ?)').bind(community).run()

  if(success)
    return c.text('community created successfully')
  else
  return c.text('community creation unsuccessful')
})

//delete community by id
app.delete('/experienceapp/sql/delete/community/:id', async (c) => {
  const community_id = c.req.param('id')

  const {success} = await c.env.DB.prepare('DELETE FROM community WHERE community_id = ?').bind(community_id).all()

  if(success)
    return c.text('community deleted successfully')
  else
  return c.text('community deletion unsuccessful')
})

//community role
//get all users in a community
app.get('/experienceapp/sql/get-all/communitiyusers', async (c) => {
  const communitiy_users = await c.env.DB.prepare('SELECT * FROM communityuserrole').run()

  return c.json(communitiy_users)
})

//get community by id
app.get('/experienceapp/sql/get/communityuser/:id', async (c) => {
  const communityuser_id = c.req.param('id')

  const communityuser = await c.env.DB.prepare('SELECT * FROM communityuserrole WHERE communityuser_id = ?').bind(communityuser_id).run()

  return c.json(communityuser)
})

//user joins a community with a role
app.post('/experienceapp/sql/create/community', async (c) => {
  const {communityuser_id, role, joined_at, community_id, user_id} = await c.req.json()

  const communityuserrole:communityuserrole = {
    communityuser_id:communityuser_id, 
    role:role, 
    joined_at:joined_at, 
    community_id:community_id, 
    user_id:user_id
  }

  const {success} = await c.env.DB.prepare('INSERT INTO communityuserrole VALUES (?, ?, ?, ?, ?)').bind( communityuserrole.communityuser_id,communityuserrole.role,communityuserrole.joined_at,communityuserrole.community_id,communityuserrole.user_id
    ).run()

  if(success)
    return c.text('communityuser joined successfully')
  else
  return c.text('community joining failed')
})

//user leaves a community by user_id
app.delete('/experienceapp/sql/leave/community/:id', async (c) => {
  const communityuser_id = c.req.param('id')

  const {success} = await c.env.DB.prepare('DELETE FROM communityuserrole WHERE communityuser_id = ?').bind(communityuser_id).all()

  if(success)
    return c.text('community left community successfully')
  else
  return c.text('community leaving the community unsuccessful')
})

//community role
//get all chats in a community
app.get('/experienceapp/sql/get-all/chats', async (c) => {
  const communitiy_chats = await c.env.DB.prepare('SELECT * FROM communitychat').run()

  return c.json(communitiy_chats)
})

//get chats in a community by id
app.get('/experienceapp/sql/get/community/chat/:id', async (c) => {
  const chat_id = c.req.param('id')

  const chatbyid = await c.env.DB.prepare('SELECT * FROM communityuserrole WHERE chat_id = ?').bind(chat_id).run()

  return c.json(chatbyid)
})

//create chats in a community
app.post('/experienceapp/sql/create/community/chat', async (c) => {
  const communitychat:communitychat = await c.req.json()

  const {success} = await c.env.DB.prepare('INSERT INTO communitychat VALUES (?, ?, ?, ?, ?, ?)').bind(communitychat).run()

  if(success)
    return c.text('communitychat message send successfully')
  else
  return c.text('community chat message failed')
})

//delete chats in a community
app.delete('/experienceapp/sql/delete/community/chat-message/:id', async (c) => {
  const chat_id = c.req.param('id')

  const {success} = await c.env.DB.prepare('DELETE FROM communitychat WHERE chat_id = ?').bind(chat_id).all()

  if(success)
    return c.text('chat deleted successfully')
  else
  return c.text('chat deletion failed')
})

//This is for searching operation on Home page - search experiences
// //https://todoapi.spikesanju.workers.dev/todos/sql/allsearch      ?search=abcd
// app.get('/experience/sql/search-experience', async (c) => {
  
//   const query = c.req.query('search')

//   const tasks = await c.env.DB.prepare(`SELECT * FROM experience WHERE title LIKE ?`).bind(`%${query}%`).all()

//   return c.json(tasks)
// })

//This is for searching operation on community page - search communities
// //https://todoapi.spikesanju.workers.dev/todos/sql/allsearch      ?search=abcd
// app.get('/experience/sql/search-community', async (c) => {
  
//   const query = c.req.query('search-community')

//   const tasks = await c.env.DB.prepare(`SELECT * FROM community WHERE community_name LIKE ?`).bind(`%${query}%`).all()

//   return c.json(tasks)
// })


export default app
