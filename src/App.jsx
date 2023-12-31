import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage.jsx";
import { Root } from "./routes/Root.jsx";
import { ErrorPage } from "./components/ErrorPage/ErrorPage.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNavigation } from "./features/navigationSlice.js";
import { fetchColor } from "./features/colorSlice.js";
import { ProductPage } from "./components/ProductPage/ProductPage.jsx";
import { CartPage } from "./components/CartPage/CartPage.jsx";
import { FavoritePage } from "./components/FavoritePage/FavoritePage.jsx";
import { SearchPage } from "./components/SearchPage/SearchPage.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/favorites' element={<FavoritePage />} />
      <Route path='catalog/:gender/:category?' element={<MainPage />} />
      <Route path='product/:id' element={<ProductPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
);

export const App = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNavigation());
    dispatch(fetchColor());
  }, []);

  return <RouterProvider router={router}></RouterProvider>;
}