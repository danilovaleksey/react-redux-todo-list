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
    return (
        <div className={s.list}>
          {
            items.map((item, key) => (
                <div
                  key={item.id}
                  className={
                    cx(s.item, idItemForList === item.id && s.colorForSelectItem  )
                  }
                >
                  <div
                    className={s.data}
                    onClick={() => {
                      changeActiveTodo(item.id);
                    }}
                  >
                    <div className={
                        cx(s.positionAndName, !item.isActive && s.lineThrough)
                      }
                    >
                      <div>
                        {`#${key + 1}.`}
                      </div>
                      <div className={s.name}>
                        {item.name}
                      </div>
                    </div>
                    <div className={
                        cx( !item.isActive && s.lineThrough)
                      }
                    >
                      {item.author}
                    </div>
                  </div>
                  <div className={s.squares}>
                    <div className={s.square}/>
                    <div className={s.square}/>
                    <div
                      className={s.square}
                      onClick={() => {
                        onPreviewChange(item, key);
                      }}
                    >
                      {'»'}
                    </div>
                  </div>
                </div>
            ))
          }
        </div>
    );
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