const db=require("../config/db")

exports.createTask=(title,description,userId,callback)=>{
 db.query(
 "INSERT INTO tasks(title,description,user_id) VALUES(?,?,?)",
 [title,description,userId],
 callback
 )
}

exports.getTasks=(callback)=>{
 db.query("SELECT * FROM tasks",callback)
}

exports.updateTask=(id,title,description,callback)=>{
 db.query(
 "UPDATE tasks SET title=?,description=? WHERE id=?",
 [title,description,id],
 callback
 )
}

exports.deleteTask=(id,callback)=>{
 db.query(
 "DELETE FROM tasks WHERE id=?",
 [id],
 callback
 )
}