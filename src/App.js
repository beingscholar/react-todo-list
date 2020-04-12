import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

class App extends Component {
  state = {
    id: uuid(),
    item: '',
    items: [{ id: 1 }],
    editItem: false,
  };

  handleChange = e => {
    console.log('Handle Change');
  };

  handleDelete = id => {
    console.log(`Handle Delete ${id}`);
  };

  handleEdit = id => {
    console.log(`Handle Edit ${id}`);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Handle Submit');
  };

  clearList = e => {
    console.log('Clear List');
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-5'>
            <h3 className='text-capitalize text-center'>todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
