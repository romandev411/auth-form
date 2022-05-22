import style from './RadioSect.module.scss';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const RadioSect = props => {
  return (
    <label className={style['radio-sect']}>
      <Field
        type='radio'
        name={props.name}
        className={style['radio-sect__item']}
        value={props.value}
      />
      <span className={style['radio-sect__text']}>{props.children}</span>
    </label>
  );
};

RadioSect.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};

export default RadioSect;
