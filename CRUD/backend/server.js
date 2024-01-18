const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/practiceCrud',{ useNewUrlParser: true, useUnifiedTopology: true })

const PORT = 5090

const taskSchema = new mongoose.Schema({
    description: {type: String , required: true},
    completed: {type: Boolean , default:false}
})

const Task = mongoose.model('Task',taskSchema);

app.post("/tasks/add",(req,res)=>{
    const {description} = req.body;
    const newTask = new Task({description})

    newTask.save()
    .then(()=>{
        res.json('task added')
    }).catch((err)=>{
console.log(err);
    })

})

app.get('/tasks',(req,res)=>{
    Task.find()
    .then(tasks=>res.json(tasks))
    .catch(error => console.log(error))
})

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})