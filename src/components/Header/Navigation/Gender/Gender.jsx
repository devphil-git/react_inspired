import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import style from './Gender.module.scss';
import { useSelector } from 'react-redux';


export const Gender = () => {

  const { activeGender, genderList, categories} = useSelector(state => state.navigation);

  return (
    <ul className={style.gender}>
      {genderList.map(item => (
        <li className={style.item} key={item}>
          <NavLink 
            className={({ isActive }) => 
              cn(style.link, (isActive || item === activeGender) && style.linkActive)
            } 
            to={`/catalog/${item}`}>
            {categories[item].title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
};