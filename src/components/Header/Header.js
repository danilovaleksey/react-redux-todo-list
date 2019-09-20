import React from 'react';
import s from "./Header.module.scss";

function Header() {
  return (
      <div className={s.header}>
        <div className={s.wrapper}>
          <div className={s.squareItems}>
            <div className={s.square}/>
            <div className={s.square}/>
          </div>
        </div>
      </div>
  );
}

export default Header;