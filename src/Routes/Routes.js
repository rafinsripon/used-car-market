import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Advertice from "../Pages/Advertice/Advertice";
import Categories from "../Pages/Categories/Categories";
import CategoryDetails from "../Pages/Categories/CategoryDetails";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/categories',
                element: <Categories />
            },
            {
                path: '/category/:id',
                element: <CategoryDetails />,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/advertice',
                element: <Advertice />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    }
])

