import { createBrowserRouter } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import AboutProduct from "./pages/AboutProduct";
import NotFoundPage from "./pages/NotFoundPage";
import MainPage from "./pages/MainPage";
import Translatetion from "./components/slovar";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainPage
    },
    {
        path: '/products',
        Component: ProductCard
    },
    {
        path: '/product/:id',
        Component: AboutProduct
    },
    {
        path: '*',
        Component: NotFoundPage
    },
    {
        path: '/slovar',
        Component: Translatetion
    }
]);