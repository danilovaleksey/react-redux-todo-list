import React from 'react';
import PropTypes from 'prop-types';
import s from './App.module.scss'
import {connect} from "react-redux";

import {
  changeTodoName,
  addTodo,
  changeActiveTodo,
} from './store/actions/todoActions';

import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import Footer from "./components/Footer/Footer";



class App extends React.Component {
  static propTypes = {
    items: PropTypes.array,
  };
  static defaultProps = {
    items: [],
  };
  render() {
    const {
      items,
      todoName,
      changeTodoName,
      addTodo,
      changeActiveTodo,
    } = this.props;
    return (
        <>
          <Header />
          <div className={s.wrapper}>
            <AddTodo name={todoName} changeTodoName={changeTodoName} addTodo={addTodo}/>
            <TodoList items={items} changeActiveTodo={changeActiveTodo}/>
          </div>
          <Footer />
        </>
    );
  }
}

export default connect(
  state => ({
    items: state.Todo.items,
    todoName: state.Todo.newTodo.name,
  }),
  {
    changeTodoName,
    addTodo,
    changeActiveTodo,
  }
) (App);
