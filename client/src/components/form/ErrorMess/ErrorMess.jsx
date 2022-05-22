import style from './ErrorMess.module.scss';

const ErrorMess = props => {
  return <span className={style['error-mess']}>{props.children}</span>;
};

export default ErrorMess;
