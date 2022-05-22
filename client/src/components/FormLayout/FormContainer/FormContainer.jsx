import style from './FormContainer.module.scss';

const FormContainer = props => {
  return <div className={style['form-container']}>{props.children}</div>;
};

export default FormContainer;
