import React, { Component } from 'react';
import TaskItem from './TaskItem';

export default class TaskList extends Component {
  render() {
    const { tasks, deleteTask, editTask, toggleTask } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              taskItem={task}
              id={index}
              deleteTask={deleteTask}
              editTask={editTask}
              toggleTask={toggleTask}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
