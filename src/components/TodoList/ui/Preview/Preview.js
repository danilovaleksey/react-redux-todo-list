import React from 'react';
import s from './Preview.module.scss';
import PropTypes from "prop-types";

function Preview (props)  {
  const { itemData, itemId } = props;
  return (
      <div className={s.previewSide}>
        <div>{`#${itemId + 1}`}</div>
        <div>{itemData.name}</div>
        <div>{itemData.author}</div>
        <div>{itemData.isActive ? 'Не сделано' : 'Сделано'}</div>
      </div>
  );
}

Preview.propTypes = {
  itemData: PropTypes.object,
  itemId: PropTypes.number,
};
Preview.defaultProps = {
  itemData: {},
  itemId: 1,
};

export default Preview;