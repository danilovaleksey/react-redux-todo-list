import React from 'react';
import s from './Preview.module.scss';

function Preview(props)  {
  const { itemData, itemId } = props;
  return (
      <div className={s.previewSide}>
        <div>{`#${itemId + 1}`}</div>
        <div>{itemData.name}</div>
        <div>{itemData.author}</div>
        <div>{itemData.isActive ? 'Сделано' : 'Не сделано'}</div>
      </div>
  );
}


export default Preview;