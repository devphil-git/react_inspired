import { Navigation } from "./Navigation/Navigation.jsx";
import { Top } from "./Top/Top.jsx";


export const Header = ({ list }) => {
  return (
    <header>
      <Top />
      <Navigation list={list} />
    </header>
  )
}