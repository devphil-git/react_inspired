import { Navigation } from "./Navigation/Navigation.jsx";
import { Top } from "./Top/Top.jsx";
import style from './Header.module.scss';


export const Header = () => {
  return (
    <header className={style.header}>
      <Top />
      <Navigation/>
    </header>
  )
}