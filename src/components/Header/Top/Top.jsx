import { Container } from "../../Layout/Container/Container.jsx";
import cn from 'classnames';
import style from './Top.module.scss';
import logo from '/src/assets/logo.svg';
import { NavLink } from "react-router-dom";
import { ReactComponent as SearchSVG } from '../../../assets/search.svg';
import { ReactComponent as CartSVG } from '../../../assets/cart.svg';
import { ReactComponent as LikeSVG } from '../../../assets/heart.svg';
import { useSelector } from "react-redux";


export const Top = () => {

  const { countItems } = useSelector(state => state.cart);

  return (
    <div className={style.top}>
      <Container className={style.topContainer}>
        <a className={cn(style.topLink, style.topPhone)} href="tel:89304902620">8 930 490 26 20</a>
        <NavLink className={style.topLogo} to="/">
          <img src={logo} alt="Логотип Inspired"/>
        </NavLink>
        <div className={style.topNavigation}>
          <ul className={style.topNavList}>
            <li className={style.topItem}>
              <button className={style.topLink}>
                <SearchSVG />
              </button>
            </li>
            <li className={style.topItem}>
              <NavLink className={style.topLink} to='/cart'>
                <CartSVG />
                <span className={style.topLinkCount}>{countItems}</span>
              </NavLink>
            </li>
            <li className={style.topItem}>
              <NavLink className={cn(style.topLink, style.topLike)} to='/favorites'>
                <LikeSVG />
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}