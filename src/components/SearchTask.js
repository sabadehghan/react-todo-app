import React, { Component } from 'react';

export default class SearchTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
  }
  handleChange = (event) => {
    const {searchTask} = this.props;
    this.setState({task: event.target.value});
    searchTask(event.target.value);
  };
  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          placeholder="Search task"
          value={this.state.task}
          onChange={this.handleChange}
          autoFocus
        />
          <button className="empty-search-box" onClick={this.emptySearchString}>
            Empty Search Box
          </button>
        </React.Fragment>
    );
  }
  emptySearchString = () => {
    const {searchTask} = this.props;
    this.setState({ task: '' });
    searchTask('');
  }
}
