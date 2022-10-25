import React, { Component } from 'react';

export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {},
    };
  }
  handleChange = (event) => {
    this.setState({ task: { title: event.target.value, isCompleted: false } });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTask(this.state.task);
    this.setState({ task: { title: '', isCompleted: false } });
  };
  render() {
    const {
      task: { title },
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={title ? title : ''}
          onChange={this.handleChange}
          autoFocus
        />
        <button className="add" type="submit">
          Add
        </button>
      </form>
    );
  }
}
