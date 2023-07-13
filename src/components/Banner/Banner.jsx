import { NavLink } from 'react-router-dom'
import { Container } from '../Layout/Container/Container'
import style from './Banner.module.scss'
import { API_URL } from '../../const'
import { useEffect, useState } from 'react';
import { useMedia } from 'react-use';

export const Banner = ({ data }) => {

  const isMobile = useMedia('(max-width: 540px)');
  const isTablet = useMedia('(max-width: 768px)');
  const isLaptop = useMedia('(max-width: 1024px)');

  const [bgUrl, setBgUrl] = useState('');

  useEffect(() => {
    if (isMobile) {
      setBgUrl(`${API_URL}/${data?.bg.mobile}`);
    } else if (isTablet) {
      setBgUrl(`${API_URL}/${data?.bg.tablet}`);
    } else if (isLaptop) {
      setBgUrl(`${API_URL}/${data?.bg.laptop}`);
    } else {
      setBgUrl(`${API_URL}/${data?.bg.desktop}`);
    }

  }, [isMobile, isTablet, isLaptop, data]);

  return(
    data &&
    <section 
      className={style.banner} 
      style={{
        backgroundImage: `url(${bgUrl})`
      }}
    >
      <Container>
        <div className={style.content}>
          <h2 className={style.title}>{data.description}</h2>
          <NavLink className={style.link} to={`/product/${data.id}`}>
            Перейти
          </NavLink>
        </div>
      </Container>
    </section>
  )
};