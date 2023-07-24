import { useDispatch, useSelector } from 'react-redux';
import styles from './OrderModal.module.scss';
import { API_URL } from '../../../const';
import { clearCart } from '../../../features/cartSlice';

export const OrderModal = () => {

  const { order } = useSelector(state => state.cart);
  const { goodsList } = useSelector(state => state.goods);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(clearCart());
  }

  const handleModalClick = (e) => {
    e.stopPropagation();
  }

  return(
    <div className={styles.modal} onClick={handleCloseModal}>
      <div className={styles.body} onClick={handleModalClick}>
        <h2 className={styles.title}>Заказ оформлен №{order.id}</h2>
        <div className={styles.description}>
          <p>Спасибо за выбор нашего магащина!</p>
          <p>Здест вы можете посмотреть детали заказа</p>
        </div>
        <ul className={styles.customer}>
          <li className={styles.customerItem}>
            <span className={styles.customerTitle}>Получатель</span>
            <span className={styles.customerData}>{order.values.fio}</span>
          </li>
          { 
            order.values.delivery === 'delivery' &&
            <li className={styles.customerItem}>
              <span className={styles.customerTitle}>Адрес доставки</span>
              <span className={styles.customerData}>{order.values.address}</span>
            </li>
          }
          <li className={styles.customerItem}>
            <span className={styles.customerTitle}>Телефон</span>
            <span className={styles.customerData}>{order.values.phone}</span>
          </li>
          <li className={styles.customerItem}>
            <span className={styles.customerTitle}>Email</span>
            <span className={styles.customerData}>{order.values.email}</span>
          </li>
          {
            order.values.delivery !== 'delivery' &&
            <li className={styles.customerItem}>
            <span className={styles.customerTitle}>Способ получения</span>
            <span className={styles.customerData}>{order.values.delivery}</span>
          </li>
          }
        </ul>
        <ul className={styles.goods}>
          {order.order.map(item => {
            const product = goodsList.find(product => product.id === item.id)
            return(
              <li className={styles.goodsItem} key={`${item.id}-${item.color}-${item.size}`}>
                <img className={styles.goodsImg} src={`${API_URL}/${product.pic}`} alt={product.title} />
                <p className={styles.goodsCount}>x{item.count}</p>
              </li>
            )
          })}
        </ul>
        <div className={styles.total}>
          <p>Итого:</p>
          <p>{order.totalPrice} руб</p>
        </div>
        <button className={styles.close} onClick={handleCloseModal} aria-label='Закрыть окно'></button>
      </div>
    </div>
  )
}