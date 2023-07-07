import { NavLink } from 'react-router-dom';
import cn from 'classnames';


export const Category = ({ style, list }) => {

  return(
    <div className={style.category}>
      <h2 className={cn(style.title, style.categoryTitle)}>Каталог</h2>
      <ul className={style.categoryList}>

      {list.map(item => (
        <li className={style.categoryItem} key={list.link}>
          <h3 className={style.categorySubtitle}>
            <NavLink className={style.link} to={item.link}>
              {item.title}
            </NavLink>
          </h3>
          <ul className={style.categorySublist}>
            {item.categories.map(category => (
              <li key={category.link}>
                <NavLink className={style.link} to={`${item.link}/${category.link}`}>
                  {category.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      ))}

      </ul>
    </div>
  )
};

