import { useDispatch, useSelector } from 'react-redux';
import { Count } from '../../../Count/Count.jsx';
import cn from 'classnames';
import styles from './CartItem.module.scss';
import { API_URL } from '../../../../const.js';
import { addToCart, removeFromCart } from '../../../../features/cartSlice.js';

export const CartItem = ({ id, color, size, count, goodsList }) => {
  const dispatch = useDispatch();

  const { colorList } = useSelector(state => state.color);
  const item = goodsList?.find(item => item.id === id);

  const handleCountChange = (count) => {
    dispatch(addToCart({id, color, size, count}))
  }

  const handleRemoveItem = () => {
    dispatch(removeFromCart({id, color, size}))
  }

  return(
    <article className={styles.item}>
      <img className={styles.image} src={`${API_URL}/${item?.pic}`} alt={item?.title}/>
      <div className={styles.content}>
        <h3 className={styles.title}>{item?.title}</h3>
        <p className={styles.price}>{item?.price} руб.</p>
        <div className={styles.vendorCode}>
          <span className={styles.subtitle}>Артикул: </span>
          <span>{item?.id}</span>
        </div>
      </div>
      <div className={styles.prop}>
        <div className={styles.color}>
          <p className={cn(styles.colorTitle, styles.subtitle)}>Цвет: </p>
          <div 
            className={styles.colorItem} 
            style={{"--data-color": colorList?.find(item => item?.title === color)?.code}}>

          </div>
        </div>
        <div className={styles.size}>
          <p className={cn(styles.sizeTitle, styles.subtitle)}>Цвет: </p>
          <div className={styles.sizeItem}>{size}</div>
        </div>
      </div>
      <button 
        className={styles.del} 
        aria-label='Удалить товар из корзины'
        onClick={handleRemoveItem}>
      </button>
      <Count 
        className={styles.count} 
        count={count}
        handleDecrement={() => {
          if (count > 1) {
            handleCountChange(count - 1)
          }
        }}
        handleIncrement={() => {
          handleCountChange(count + 1)
        }}

      />
    </article>
  )
}