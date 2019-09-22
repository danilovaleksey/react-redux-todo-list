import React from 'react';
import PropTypes from 'prop-types';
import s from './TodoList.module.scss';

import List from "./ui/List/List";
import Preview from "./ui/Preview/Preview";


class TodoList extends React.Component {
  state = {
    itemData: null,
    activePreview: false,
    key: null,
  };
  static propTypes = {
    items: PropTypes.array,
    changeActiveTodo: PropTypes.func,
  };
  static defaultProps = {
    items: [],
    changeActiveTodo: ()=>{},
  };

  onPreviewChange = ( data, key ) => {
    const { itemData, activePreview} = this.state;

    if (itemData === null && data !== null) {
      this.setState({
        itemData: data,
        activePreview: !activePreview,
        key: key,
      })
    } else {
      if (activePreview === true && itemData.id === data.id) {
        this.setState({activePreview: false});
      }
      if (activePreview === false && itemData.id === data.id) {
        this.setState({
          activePreview: !activePreview,
        });
      }
      if (activePreview === false && itemData.id !== data.id) {
        this.setState({
          itemData: data,
          activePreview: !activePreview,
          key: key,
        });
      }
      if(activePreview === true && itemData.id !== data.id) {
        this.setState({
          itemData: data,
          key: key,
        });
      }
    }
  };

  render() {
    const { items, changeActiveTodo } = this.props;
    const { itemData, activePreview, key } = this.state;
    let idItemForList = null;
    if ( activePreview === true ) {
      idItemForList = itemData.id;
    }
    return (
        <div className={s.todo}>
          <List
              items={items}
              onPreviewChange={this.onPreviewChange}
              idItemForList={idItemForList}
              changeActiveTodo={changeActiveTodo}
          />
          {
            activePreview && <Preview itemData={ itemData } itemId={key}/>
          }
        </div>
    );
  }
}


export default TodoList;