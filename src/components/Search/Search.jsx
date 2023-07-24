import { useSelector } from 'react-redux';
import { Container } from '../Layout/Container/Container';
import styles from './Search.module.scss';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';


export const Search = () => {

  const { openSearch } = useSelector(state => state.search);
  
  const initialValues = {
    search: '',
  };

  const validationSchema = Yup.object({
    search: Yup.string().required('Введите запрос'),
  });

  const navigate = useNavigate();

  const handleSubmit = ({ search }) => {
    if (search.trim()) {
      navigate(`/search?q=${search}`);
    }
  };
  

  return(
    openSearch &&
    <div className={styles.search}>
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={styles.form}>
            <Field 
              className={styles.input}
              type='search'
              name='search'
              placeholder='Найти...'
            />
            <ErrorMessage name='search' component={'p'} className={styles.error} />
            <button className={styles.btn} type='submit'>Искать</button>
          </Form>
        </Formik>
      </Container>
    </div>
  )
}