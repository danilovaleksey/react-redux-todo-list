import React from 'react';
import PropTypes from 'prop-types';
import s from './List.module.scss';
import cx from 'classnames';


function List (props)  {
    const {
      items,
      onPreviewChange,
      idItemForList,
      changeActiveTodo
    } = props;
    if (items.length !== 0) {
      return (
          <div className={s.list}>
            {
              items.map((item, key) => (
                  <div key={item.id} className={cx(s.item, idItemForList === item.id && s.colorForSelectItem)}>
                    <div className={cx(s.data, !item.isActive && s.lineThrough)} onClick={() => {changeActiveTodo(item.id);}}>
                      <div className={s.positionAndName}>
                        <div>{`#${key + 1}.`}</div>
                        <div className={s.name}>{item.name}</div>
                      </div>
                      <div className={s.author}>
                        {item.author}
                      </div>
                    </div>
                    <div className={s.squares}>
                      <div className={s.square}/>
                      <div className={s.square}/>
                      <div className={s.square} onClick={() => {onPreviewChange(item, key);}}>
                        {'»'}
                      </div>
                    </div>
                  </div>
              ))
            }
          </div>
      );
    } else {
      return null;
    }
}
List.propTypes = {
  items: PropTypes.array,
  idItemForList: PropTypes.number,
  onPreviewChange: PropTypes.func,
  changeActiveTodo: PropTypes.func,
};
List.defaultProps = {
  items: [],
  idItemForList: 1,
  onPreviewChange: () => {},
  changeActiveTodo: () => {},
};

export default List;