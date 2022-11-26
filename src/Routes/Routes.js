import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Main from "../Layout/Main";
import Advertice from "../Pages/Advertice/Advertice";
import Blog from "../Pages/Blog/Blog";
import Categories from "../Pages/Categories/Categories";
import CategoryDetails from "../Pages/Categories/CategoryDetails";
import Dashboard from "../Pages/Dashbord/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashbord/MyOrders/MyOrders";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../Pages/Dashbord/AddProduct/AddProduct";
import Alluser from "../Pages/Dashbord/Alluser/Alluser";
import AddminRoute from "./AdminRoute";
import Payment from "../Pages/Dashbord/Payment/Payment";
import SellerRoute from "./SellerRoute";
import Error from "../Pages/Error/Error";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
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
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/categorys/:id',
                element: <PrivateRoute>
                    <CategoryDetails />
                </PrivateRoute>,
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
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout />
        </PrivateRoute>,
        errorElement: <Error />,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders />
            },
            {
                path: '/dashboard/alluser',
                element: <AddminRoute>
                    <Alluser />
                </AddminRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute>
                <AddProduct />
            </SellerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment />,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]
    },
])

