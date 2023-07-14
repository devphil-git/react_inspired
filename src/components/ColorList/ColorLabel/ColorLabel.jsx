// import cn from 'classnames';
import style from './ColorLabel.module.scss';

export const ColorLabel = ({ color, check, selectedColor, handleColorChange }) => {

  return(
    <label className={style.color} style={{"--data-color": color?.code}}>
      <input className={style.input} 
        type='radio'
        name='color'
        value={color?.title}
        checked={selectedColor ? selectedColor === color?.title : check}
        onChange={handleColorChange}
      />
      <span className={style.colorCheck}></span>
    </label>
  )
};
