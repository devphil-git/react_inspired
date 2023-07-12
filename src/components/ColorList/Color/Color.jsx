import cn from 'classnames';
import style from './Color.module.scss';

export const Color = ({ color, check}) => {

  return(
    <li 
      className={cn(style.color, check && style.colorCheck)} 
      style={{"--data-color": color}}>
    </li>
  )
};
