import { useEffect, useState } from 'react';
import { Container } from '../Layout/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../features/productSlice';
import { API_URL } from '../../const.js';
import cn from 'classnames';
import style from './ProductPage.module.scss';
import { ColorList } from '../ColorList/ColorList.jsx';
import { Count } from '../Count/Count';
import { ProductSize } from './ProductSize/ProductSize';
import { Goods } from '../Goods/Goods';
import { fetchCategory } from '../../features/goodsSlice';
import { BtnLike } from '../BtnLike/BtnLike';
import { addToCart } from '../../features/cartSlice';


export const ProductPage = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector(state => state.product);
  const { gender, category, colors } = product;
  const { colorList } = useSelector(state => state.color)

  const [selectedColor, setSelectedColor] = useState('');
  const handleColorChange = (e) => { setSelectedColor(e.target.value) };

  const [selectedSize, setSelectedSize] = useState('');
  const handleSizeChange = (e) => { setSelectedSize(e.target.value) };

  const [count, setCount] = useState(1);
  const handleIncrement = () => { setCount((prevCount) => prevCount + 1) };
  const handleDecrement = () => { if (count > 1) { setCount((prevCount) => prevCount - 1) } };

  useEffect(() => {
    dispatch(fetchProduct(id))
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(fetchCategory({gender, category, count: 4, top: true, exclude: id}))
  }, [gender, category, id, dispatch]);

  useEffect(() => {
    if (colorList?.length && colors?.length) {
      setSelectedColor(colorList.find(color => color.id === colors[0].title));
    }
  }, [colorList, colors]);


  return(
    <>
      <section className={style.card}>
        <Container className={style.container}>
          <img className={style.image} src={`${API_URL}/${product.pic}`} alt={`${product.title} ${product.id}`} />
          <form className={style.content} 
            onSubmit={e => {
            e.preventDefault();
            dispatch(addToCart({
              id, 
              color: selectedColor, 
              size: selectedSize, 
              count
              }))
            }}
          >
            <h2 className={style.title}>{product.title}</h2>
            <p className={style.price}>{product.price} руб</p>
            <div className={style.vendorCode}>
              <span className={style.subtitle}>Артикул</span>
              <span className={style.id}>{product.id}</span>
            </div>
            <div className={style.color}>
              <p className={cn(style.subtitle, style.colorTitle)}>Цвет</p>
              <ColorList 
                colors={product.colors}
                selectedColor={selectedColor}
                handleColorChange={handleColorChange}
              />
            </div>
            <ProductSize 
              size={product.size}
              selectedSize={selectedSize} 
              handleSizeChange={handleSizeChange}
            />
            <div className={style.description}>
              <p className={cn(style.subtitle, style.descriptionTitle)}>Описание</p>
              <p className={style.descriptionText}>{product.description}</p>
            </div>
            <div className={style.control}>
              <Count 
                className={style.count}
                count={count}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement} 
              />
              <button className={style.addCart} type='submit'>В корзину</button>
              <BtnLike id={id} />
            </div>
          </form>
        </Container>
      </section>
      <Goods title='Вам также может понравится'/>
    </>
  )
};
