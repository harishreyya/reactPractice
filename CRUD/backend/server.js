const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://hari:hari@cluster0.hsmpfuf.mongodb.net/dataNeutron?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const PORT = 5090;

const apiCountSchema = new mongoose.Schema({
    addApiCalls: { type: Number, default: 0 },
    updateApiCalls: { type: Number, default: 0 }
});

const ApiCount = mongoose.model('ApiCount', apiCountSchema);

let addApiCalls = 0;
let updateApiCalls = 0;

ApiCount.findOne({}).exec()
    .then((counts) => {
        if (counts) {
            addApiCalls = counts.addApiCalls;
            updateApiCalls = counts.updateApiCalls;
        } else {
            return ApiCount.create({ addApiCalls, updateApiCalls });
        }
    })
    .catch((err) => {
        console.error('Error fetching or creating API counts in the database:', err);
    });

const taskSchema = new mongoose.Schema({
    description: { type: String, required: true },
    completed: { type: Boolean, default: false }
});

const Task = mongoose.model('Task', taskSchema);

app.post("/tasks/add", (req, res) => {
    const { description } = req.body;
    const newTask = new Task({ description });
    newTask.save()
        .then(() => {
            addApiCalls++;
            updateApiCountsInDatabase();
            res.json('task added');
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json('Internal Server Error');
        });
});

app.patch('/tasks/update/:id', (req, res) => {
    Task.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec()
        .then(() => {
            updateApiCalls++;
            updateApiCountsInDatabase();
            res.status(200).send("updated");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json('Internal Server Error');
        });
});

function updateApiCountsInDatabase() {
    ApiCount.findOneAndUpdate({}, { addApiCalls, updateApiCalls }, { upsert: true }).exec()
        .catch((err) => {
            console.error('Error updating API counts in the database:', err);
        });
}

app.get('/apiCallsCount', (req, res) => {
    res.json({
        addApiCalls,
        updateApiCalls
    });
});

app.get('/tasks', (req, res) => {
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(error => {
            console.log(error);
            res.status(500).json('Internal Server Error');
        });
});

app.delete('/tasks/delete/:id', (req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(() => res.json('task deleted'))
        .catch((err) => res.status(400).json(err, "unable to delete"));
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
