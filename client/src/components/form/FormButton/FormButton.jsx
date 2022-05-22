import style from './FormButton.module.scss';

const FormButton = props => {
  return (
    <button className={style['form-button']} {...props}>
      {props.children}
    </button>
  );
};

export default FormButton;
