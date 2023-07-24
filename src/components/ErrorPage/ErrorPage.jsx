import { useLocation, useNavigate, useRouteError } from "react-router-dom";
import styles from './ErrorPage.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchColor } from "../../features/colorSlice";
import { fetchNavigation } from "../../features/navigationSlice";


export const ErrorPage = () => {

  const routeError = useRouteError();
  const { status } = useSelector(state => state.statusServer);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const timeIdRef = useRef(null);

  useEffect(() => {
    if (status && location.pathname === '/404' ) {
      navigate('/');
    }
  }, [status, location, navigate]);

  useEffect(() => {
    if (!status && location.pathname === '/404') {
      clearInterval(timeIdRef.current);
      timeIdRef.current = setTimeout(() => {
        dispatch(fetchNavigation())
        dispatch(fetchColor())
      }, 1000);
    }

    return () => {
      clearInterval(timeIdRef.current);
    }
  }, [dispatch, status, location]);
  

  return(
    <div className={styles.error}>
      <h2 className={styles.title}>Произошла ошибка</h2>
      <p className={styles.message}>{routeError?.message || 'Попробуйте зайти позже'}</p>
    </div>
  )
};