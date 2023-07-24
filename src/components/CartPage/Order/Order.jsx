import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Container } from '../../Layout/Container/Container';
import styles from './Order.module.scss';
import { PatternFormat } from 'react-number-format';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { sendOrder } from '../../../features/cartSlice';


export const Order = ({ cartItems }) => {

  const dispatch = useDispatch();
  const handleSubmitOrder = (values) => {
    dispatch(sendOrder({order: cartItems, values}))
  };

  const validationSchema = Yup.object({
    fio: Yup.string().required('Заполните ФИО'),
    address: Yup.string().test(
      'addressTest',
      'Введите адрес доставки',
      function(value) {
        return this.parent.delivery === 'delivery' ? !!value : true;
      }
    ),
    phone: Yup.string()
      .required('Введите номер телефона')
      .matches(/^\+\d{1}\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}$/, 'Некорректный номер телефона'),
    email: Yup.string().email().required('Введите email'),
    delivery: Yup.string().required('Выберите способ доставки'),
  });

  
  return(
    <section>
      <Container>
        <h2 className={styles.title}>Оформление заказа</h2>

        <Formik
          initialValues = {{
            fio: '',
            address: '',
            phone: '',
            email: '',
            delivery: '',
          }}
          onSubmit={handleSubmitOrder}
          validationSchema={validationSchema}
        >
          <Form className={styles.form}>
            <fieldset className={styles.personal}>
              <label className={styles.label}>
                <Field 
                  className={styles.input}
                  type='input'
                  name="fio"
                  placeholder='ФИО*'
                />
                <ErrorMessage className={styles.error} name='fio' component={'span'} />
              </label>
              <label className={styles.label}>
                <Field 
                  className={styles.input}
                  type='input'
                  name="address"
                  placeholder='Адрес доставки'
                />
                <ErrorMessage className={styles.error} name='address' component={'span'} />
              </label>
              <label className={styles.label}>
                <Field 
                  className={styles.input}
                  as={PatternFormat}
                  format="+7 (###) ### ## ##"
                  mask='_'
                  name="phone"
                  placeholder='Телефон*'
                />
                <ErrorMessage className={styles.error} name='phone' component={'span'} />
              </label>
              <label className={styles.label}>
                <Field 
                  className={styles.input}
                  type='email'
                  name="email"
                  placeholder='Email'
                />
                <ErrorMessage className={styles.error} name='email' component={'span'} />
              </label>
            </fieldset>
            <fieldset className={styles.radioList}>
              <label className={styles.radio}>
                <Field  
                  className={styles.radioInput}
                  type='radio'
                  name='delivery'
                  value='delivery'
                />
                <span>Доставка</span>
              </label>
              <label className={styles.radio}>
                <Field  
                  className={styles.radioInput}
                  type='radio'
                  name='delivery'
                  value='Самовывоз'
                />
                <span>Самовывоз</span>
              </label>
              <ErrorMessage className={styles.error} name='delivery' component={'span'} />
            </fieldset>
            <button className={styles.submit} type='submit'>Оформить</button>
          </Form>
        </Formik>

      </Container>
    </section>
  )
}