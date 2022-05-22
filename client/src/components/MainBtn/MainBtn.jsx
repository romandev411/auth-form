import style from './MainBtn.module.scss';

const MainBtn = props => {
  return (
    <props.el className={style['main-btn']} {...props}>
      {props.children}
    </props.el>
  );
};

export default MainBtn;
