
export const Category = ({ style }) => {

  return(
    <div className={style.category}>
      <h2 className={style.categoryTitle}>Каталог</h2>
      <div className={style.categoryList}>
        <div>
          <h3 className={style.categorySubtitle}>Женщины</h3>
          <ul className={style.categorySublist}>
            <li><a href="">Бюстгальтеры</a></li>
            <li><a href="">Трусы</a></li>
            <li><a href="">Носки</a></li>
            <li><a href="">Халаты</a></li>
            <li><a href="">Термобелье</a></li>
            <li><a href="">Пижамы</a></li>
          </ul>
        </div>
        <div>
          <h3 className={style.categorySubtitle}>Мужчины</h3>
          <ul className={style.categorySublist}>
            <li><a href="">Трусы</a></li>
            <li><a href="">Носки</a></li>
            <li><a href="">Халаты</a></li>
            <li><a href="">Термобелье</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
