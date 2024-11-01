

import { Route, Routes } from "react-router-dom"
import { Banner } from "./components/Banner/Banner"
import { Header } from "./components/Header/Header"
import { HomePage } from "./pages/HomePage/HomePage"
import { CatalogPage } from "./pages/CatalogPage/CatalogPage"
import { OneProductPage } from "./pages/ProductPage/ProductPage"
import { Userss } from "./pages/Userpage/Userpage"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/catalog' element={<CatalogPage/>} />
        <Route path='/tovar/:id' element={<OneProductPage />} />
        <Route path='/user' element={<Userss />} />
      </Routes>
    </>
  )
}

export default App
