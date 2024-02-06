import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [apiCallsCounts, setApiCallsCounts] = useState({
    addApiCalls: 0,
    updateApiCalls: 0
  });

  useEffect(() => {
    fetchTasks();
    fetchApiCallsCounts();
  }, [apiCallsCounts.addApiCalls, apiCallsCounts.updateApiCalls]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5090/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const fetchApiCallsCounts = async () => {
    try {
      const response = await axios.get('http://localhost:5090/apiCallsCount');
      setApiCallsCounts(response.data);
    } catch (error) {
      console.error('Error fetching API call counts:', error);
    }
  };

  const addTask = async () => {
    try {
      await axios.post('http://localhost:5090/tasks/add', { description });
      fetchApiCallsCounts();
      fetchTasks();
      setDescription('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const updateTask = async (id, data) => {
    try {
      await axios.patch(`http://localhost:5090/tasks/update/${id}`, data);
      fetchApiCallsCounts();
      fetchTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    } finally {
      setEditingTask(null);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5090/tasks/delete/${id}`);
      fetchApiCallsCounts();
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const startEditing = (task) => {
    setEditingTask({ ...task });
  };

  const cancelEditing = () => {
    setEditingTask(null);
  };

  const saveEditing = (id) => {
    updateTask(id, editingTask);
  };

  return (
    <div className="task-manager-container">
      <div className="input-container">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={task._id} className="task-item">
            {editingTask && editingTask._id === task._id ? (
              <div className="editing-task">
                <span>{index + 1}.</span>
                <input
                  type="text"
                  value={editingTask.description}
                  onChange={(e) => setEditingTask({ ...editingTask, description: e.target.value })}
                />
                <br/>
                <button onClick={() => saveEditing(task._id)}>Save</button>
                <button onClick={cancelEditing}>Cancel</button>
              </div>
            ) : (
              <div className="display-task">
                <span>{index + 1}.</span>
                {task.description}
                <br/>
                <button onClick={() => startEditing(task)}>Edit</button>
                <button onClick={() => deleteTask(task._id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="api-calls-info">
        <p>Add Count: {apiCallsCounts.addApiCalls}</p>
        <p>Update Count: {apiCallsCounts.updateApiCalls}</p>
      </div>
    </div>
  );
};
