import { useSelector } from 'react-redux';
import style from './Main.module.scss';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


export const Main = (props) => {

  const { status } = useSelector(state => state.statusServer);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!status && location.pathname !== '/404' ) {
      navigate('/404');
    }
  })

  return(
    <div className={style.main}>
      {props.children}
    </div>
  )
};