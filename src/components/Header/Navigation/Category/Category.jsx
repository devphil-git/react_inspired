import { NavLink } from "react-router-dom";
import cn from 'classnames';
import style from './Category.module.scss';
import { useSelector } from "react-redux";


export const Category = () => {
  
  const { activeGender, categories} = useSelector(state => state.navigation);

  return (
    <ul className={style.category}>
      {categories[activeGender]?.list?.map(item => (
        <li key={item.slug}> 
          <NavLink 
            className={({ isActive }) => cn(style.link, isActive && style.linkActive)}
            to={`${activeGender}/${item.slug}`}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
};

