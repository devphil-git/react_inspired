import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer.jsx";
import { Header } from "../components/Header/Header.jsx";
import { Main } from "../components/Layout/Main/Main.jsx";


export const Root = () => {

  return(
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}