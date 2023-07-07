import { NavLink } from "react-router-dom";
import cn from 'classnames';
import style from './Category.module.scss';


export const Category = ({ list }) => {


  return (
    <ul className={style.category}>
      {list[0].categories.map(item => (
        <li className={({ isActive }) => cn(style.Link, isActive && style.Link.Active)} key={item.link}> 
          <NavLink to={`${list[0].link}/${item.link}`}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
};

