import { useDispatch, useSelector } from "react-redux";
import { Goods } from "../Goods/Goods";
import { useEffect } from "react";
import { fetchCategory } from "../../features/goodsSlice";
import { usePageFromSeachParams } from "../../hooks/usePageFromSeachParams";
import styles from './FavoritePage.module.scss';


export const FavoritePage = () => {

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const page = usePageFromSeachParams(dispatch);

  useEffect(() => {
    if (favorites) {
      const param = { list: favorites};
      if (page) {
        param.page = page;
      } 
      dispatch(fetchCategory(param))
    }
  }, [favorites, page, dispatch]);

  return(
    favorites.length 
      ? <Goods title='Избранное'/>
      : <h3 className={styles.empty}>В избранном пока пусто</h3>
  )
};