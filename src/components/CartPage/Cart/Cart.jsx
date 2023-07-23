import { Container } from '../../Layout/Container/Container.jsx';
import { CartItem } from './CartItem/CartItem.jsx'
import styles from './Cart.module.scss';


export const Cart = ({ cartItems, goodsList }) => {

  const totalPrice = cartItems.reduce((sum, item) => {
    const product = goodsList.find(product => product.id === item.id);
    if (product) {
      return sum + product.price * item.count;
    } else {
      return sum;
    }
  }, 0);

  return(
    <section className={styles.cart}>
      <Container>
        <h2 className={styles.title}>Корзина</h2>
        
        {goodsList.length 
          ? <ul className={styles.list}>
              {cartItems.map(item => (
                <li className={styles.item} key={`${item.id}-${item.color}-${item.size}`}>
                  <CartItem {...item} goodsList={goodsList}/>
                </li>
              ))}
            </ul>
          : <p className=''>В корзине пусто</p>
        }

        <div className={styles.total}>
          <p>Итого:</p>
          <p>{totalPrice} руб.</p>
        </div>
      </Container>
    </section>
  )
}