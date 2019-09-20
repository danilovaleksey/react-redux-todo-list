import React from 'react';
import s from './AddTodo.module.scss';

function AddTodo(props) {
  const {
    name,
    changeTodoName,
    addTodo,
  } = props;
  return (
      <div className={s.addTodo}>
        <input
            type="text"
            className={s.inputText}
            placeholder={'Type...'}
            value={name}
            onChange={(e) => {
              changeTodoName(e.target.value);
            }}
        />
        <button
            className={s.buttonAddTodo}
            onClick={() => {addTodo();}}
        >Add Todo</button>
      </div>
  );
}

export default AddTodo;