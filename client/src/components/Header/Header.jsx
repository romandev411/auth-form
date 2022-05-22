import React from 'react';
import style from './Header.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <header className={style.header}>
      <div className={style['header__wrap']}>
        <Link className={style['header__logo-wrap']} to='/'>
          <img
            className={style['header__logo']}
            src='https://www.squadhelp.com/img/logo.png'
            alt='logo'
          />
        </Link>

        <div className={style['header__btn-wrap']}>{props.children}</div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  btnText: PropTypes.string,
};
