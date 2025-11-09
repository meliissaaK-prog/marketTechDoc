import { createBrowserRouter } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import AboutProduct from "./pages/AboutProduct";
import NotFoundPage from "./pages/NotFoundPage";
import MainPage from "./pages/MainPage";

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
        path: '/products/:id',
        Component: AboutProduct
    },
    {
        path: '*',
        Component: NotFoundPage
    }
]);