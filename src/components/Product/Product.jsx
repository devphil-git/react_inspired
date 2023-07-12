import { NavLink } from 'react-router-dom';
import { API_URL } from '../../const';
import style from './Product.module.scss';
import { ReactComponent as Like } from '../../assets/heart.svg';
import { ColorList } from '../ColorList/ColorList';


export const Product = ({ id, pic, title, price, colors }) => {

  return(
    <article className={style.product}>
      <NavLink className={style.link} href={`product/${id}`}>
        <img className={style.image} src={`${API_URL}/${pic}`}/>
        <h3 className={style.title}>{title}</h3>
      </NavLink>
      <div className={style.row}>
        <p className={style.price}>{price} руб</p>
        <button className={style.flavorite}>
          <Like />
        </button>
      </div>
      <ColorList colors={colors} />
    </article>
  )
};