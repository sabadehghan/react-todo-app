import React from 'react';
import CreateTask from './CreateTask';
import TaskList from './TaskList';
import SearchTask from './SearchTask';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      searchQuery: '',
    };
  }
  createTask = (task) => {
    if (task.title.trim() === '') {
      alert("Task can't be empty");
      return;
    }
    const { tasks } = this.state;
    const newTasks = [...tasks, task];
    console.warn(`task:: ${task}`);
    this.setState({ tasks: newTasks });
  };
  toggleTask = (taskId) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    const taskItem = newTasks[taskId];
    taskItem.isCompleted = !taskItem.isCompleted;
    this.setState({ tasks: newTasks });
  };
  deleteTask = (taskId) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(taskId, 1);
    this.setState({ tasks: newTasks });
  };
  deleteAllTasks = () => {
    this.setState({ tasks: [] });
  };
  editTask = (taskId, task) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks[taskId] = task;
    this.setState({ tasks: newTasks });
  };
  searchTask = (searchQuery) => {
    this.setState({ searchQuery });
  };
  render() {
    const { tasks, searchQuery } = this.state;
    return (
      <div className="main">
        <h1>Todos</h1>
        <div className="content">
          <CreateTask createTask={this.createTask} />
          <br />
          <TaskList
            tasks={tasks.filter((task) =>
              task.title.toLowerCase().includes(searchQuery)
            )}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
            toggleTask={this.toggleTask}
          />
          <br />
          {tasks.length > 0 && (
            <div className="delete-all-container">
              <button className="delete" onClick={this.deleteAllTasks}>
                Delete All
              </button>
            </div>
          )}
          <br />
          <SearchTask searchTask={this.searchTask} />
        </div>
      </div>
    );
  }
}
