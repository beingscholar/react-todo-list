import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

class App extends Component {
  state = {
    id: uuid(),
    item: '',
    items: [],
    editItem: false,
  };

  handleChange = e => {
    this.setState({ item: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id, item, items } = this.state;
    const newItem = { id, title: item };
    const updatedItems = [...items, newItem];
    this.setState({
      id: uuid(),
      item: '',
      items: updatedItems,
      editItem: false,
    });
  };

  handleDelete = id => {
    const items = [...this.state.items];
    const filteredItems = items.filter(item => id !== item.id);
    this.setState({ items: filteredItems });
  };

  handleEdit = id => {
    const items = [...this.state.items];
    const filteredItems = items.filter(item => id !== item.id);
    const selectedItem = items.find(item => id === item.id);

    this.setState({
      id,
      item: selectedItem.title,
      items: filteredItems,
      editItem: true,
    });
  };

  clearList = e => {
    this.setState({ items: [] });
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
