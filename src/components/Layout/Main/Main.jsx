import style from './Main.module.scss';


export const Main = (props) => {

  return(
    <div className={style.main}>
      {props.children}
    </div>
  )
};