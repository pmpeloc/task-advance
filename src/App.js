import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputTask, setInputTask] = useState({ description: '' });
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(0);

  const createTaskHandler = (text) => {
    setInputTask({ id, description: text, complete: false });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setId(id + 1);
    setTasks([...tasks, inputTask]);
  };

  const deleteHandler = (id) => {
    // filter
    const newArray = tasks.filter((task) => task.id !== id);
    setTasks(newArray);
  };

  const completeHandler = (id) => {
    // map
    const newArray = tasks.map((task) => {
      if (task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    });
    setTasks(newArray);
  };

  return (
    <div className='container'>
      <h1>Task Advanced</h1>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='Ingrese la tarea'
          value={inputTask.description}
          onChange={(e) => createTaskHandler(e.target.value)}
        />
        <button type='submit'>Agregar Tarea</button>
      </form>
      <div className='tasks-container'>
        {tasks.map((item, index) => (
          <div key={index} className='task-card'>
            <button
              id='delete'
              type='button'
              onClick={() => deleteHandler(item.id)}>
              Delete
            </button>
            <p className={item.complete ? 'task-complete' : ''}>
              {item.description}
            </p>
            <button
              className={item.complete ? 'btn-incomplete' : 'btn-complete'}
              type='button'
              onClick={() => completeHandler(item.id)}>
              {item.complete ? 'Incomplete' : 'Completar'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
