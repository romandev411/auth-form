import React from 'react';
import style from './FormLayout.module.scss';

const FormLayout = props => {
  return (
    <div className={style['form-layout']}>
      <div className={style['form-layout__wrap']}>{props.children}</div>
    </div>
  );
};

export default FormLayout;
