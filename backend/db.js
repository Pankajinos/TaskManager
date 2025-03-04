const mongoose = require("mongoose");
const { use } = require("react");
mongoose.connect("mongodb+srv://admin:admin@pankajcluster.4qqst.mongodb.net/todo")
console.log("connected to db")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    done: Boolean,
    key: String
})
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const todo = mongoose.model('todo', todoSchema);
const user = mongoose.model('user', userSchema);
module.exports = { todo, user }