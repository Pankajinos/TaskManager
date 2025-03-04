const mongoose = require("mongoose");
const { use } = require("react");
mongoose.connect(import.meta.env.VITE_MONGODB_URI)
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