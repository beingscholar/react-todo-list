import React, { Component } from 'react';
import Item from './TodoItem';

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleEdit, handleDelete } = this.props;
    return (
      <ul className='list-group my-5'>
        <h3 className='text-capitalize text-center'>todo list</h3>
        {items.length > 0 &&
          items.map(item => {
            const { id, title } = item;
            return (
              <Item
                key={id}
                title={title}
                handleEdit={() => handleEdit(id)}
                handleDelete={() => handleDelete(id)}
              />
            );
          })}
        <button
          type='button'
          className='btn btn-block btn-danger mt-5'
          onClick={clearList}
        >
          Clear List
        </button>
      </ul>
    );
  }
}
