import { useDispatch, useSelector } from "react-redux";
import { Goods } from "../Goods/Goods";
import { useSearchParams } from "react-router-dom";
import styles from './SearchPage.module.scss';
import { useEffect } from "react";
import { fetchAll } from "../../features/goodsSlice";


export const SearchPage = () => {
  const { goodsList } = useSelector(state => state.goods);
  const dispatch = useDispatch();

  let [ searchParams ] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get('q');
    const params = { search };
    dispatch(fetchAll(params))
  }, [searchParams, dispatch])


  return(
    goodsList.length 
      ? <Goods title='Поиск'/>
      : <h3 className={styles.empty}>По вашему запросу ничего не найдено</h3>
  )
};