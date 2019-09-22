import React from 'react';
import s from './AddTodo.module.scss';
import PropTypes from "prop-types";

function AddTodo (props) {
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
            onChange={(e) => {changeTodoName(e.target.value)}}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                addTodo(e.target.value);
              }
            }}
        />
        <button
            className={s.buttonAddTodo}
            onClick={() => {addTodo()}}
        >
          Add Todo
        </button>
      </div>
  );
}

AddTodo.propTypes = {
  name: PropTypes.string,
  changeTodoName: PropTypes.func,
  addTodo: PropTypes.func,
};
AddTodo.defaultProps = {
  name: '',
  changeTodoName: ()=>{},
  addTodo: () =>{},
};

export default AddTodo;