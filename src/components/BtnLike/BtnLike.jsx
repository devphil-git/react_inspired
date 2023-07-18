import styles from './BtnLike.module.scss';
import { ReactComponent as LikeSVG } from '../../assets/heart.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../../features/favoriteSlice';
import cn from 'classnames';


export const BtnLike = ({ id }) => {

  const dispatch = useDispatch();
  const isFavorite = useSelector(state => state.favorites.includes(id));

  const handleToogleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite({ id }));
    } else {
      dispatch(addToFavorite({ id }))
    }
  }

  return(
    <button 
      className={isFavorite ? cn(styles.like, styles.active) : styles.like} 
      aria-label='Добавить в избранное'
      type='button'
      onClick={handleToogleFavorite}
    >
      <LikeSVG />
    </button>
  )
}