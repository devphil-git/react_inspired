export const Development = ({ style }) => {

  return(
    <div className={style.development}>
      <ul className={style.developmentList}>
        <li className={style.developmentItem}>Designer: 
          <a className={style.link} href="#">Anastasia Ilina</a>
        </li>
        <li className={style.developmentItem}>Developer: 
          <a className={style.link} href="#">VF</a>
        </li>
      </ul>
    </div>
  )
};