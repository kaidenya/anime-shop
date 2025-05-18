import "./App.css";
import {
    Route,
    Routes,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AnimeShop from "./ShopPage/AnimeShop";
import ShoppingCart from "./ShoppingCartPage/ShopingCart";
import Registrarion from "./Registration/Registration";
import { AuthContext } from "./contexts/authContext";
import { Protected } from "./contexts/Protected";
import MainAnimeShop from "./MainShopPage/MainAnimeShop";
import Content from "./PaymentPage/Content/Content";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <Protected>
                    <AnimeShop />
                </Protected>
            ),
        },
        {
            path: "/registration",
            element: <Registrarion />,
        },
        {
            path: "/shoppingcart",
            element: (
                <Protected>
                    <ShoppingCart />
                </Protected>
            ),
        },
        {
            path: "/main",
            element: (
                <Protected>
                    <MainAnimeShop />
                </Protected>
            ),
        },
        {
            path: "/payment",
            element: (
                <Protected>
                    <Content />
                </Protected>
            ),
        },
    ]);

    return (
        <AuthContext>
            <RouterProvider router={router}></RouterProvider>
        </AuthContext>
    );
}

export default App;
