import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import style from './Input.module.scss';
import ErrorMess from '../ErrorMess/ErrorMess';
import cx from 'classnames';

const Input = ({ name, ...rest }) => {
  return (
    <label className={style['input']}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const classes = cx(style['input__item'], {
            [style['error']]: meta.touched && meta.error,
            [style['valid']]: meta.touched && !meta.error && meta.value,
          });

          return <input className={classes} type='text' {...field} {...rest} />;
        }}
      </Field>

      <ErrorMessage name={name} component={ErrorMess} />
    </label>
  );
};

Input.propTypes = {
  name: PropTypes.string,
};

export default Input;
