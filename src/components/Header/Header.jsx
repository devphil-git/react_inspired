import { Navigation } from "./Navigation/Navigation.jsx";
import { Top } from "./Top/Top.jsx";
import style from './Header.module.scss';
import { Search } from "../Search/Search.jsx";


export const Header = () => {

  return (
    <header className={style.header}>
      <Top />
      <Search />
      <Navigation/>
    </header>
  )
}