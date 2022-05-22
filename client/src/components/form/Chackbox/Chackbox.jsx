import style from './Chackbox.module.scss';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const Chackbox = props => {
  return (
    <label className={style['chackbox-msg']}>
      <Field
        type='checkbox'
        name={props.name}
        className={style['chackbox-msg__item']}
      />
      <span className={style['chackbox-msg__text']}>{props.children}</span>
    </label>
  );
};

Chackbox.propTypes = {
  name: PropTypes.string,
};

export default Chackbox;
