import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Categories from "../Pages/Categories/Categories";
import CategoryDetails from "../Pages/Categories/CategoryDetails";
import MyOrders from "../Pages/Dashbord/MyOrders/MyOrders";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../Pages/Dashbord/AddProduct/AddProduct";
import Alluser from "../Pages/Dashbord/Alluser/Alluser";
import AddminRoute from "./AdminRoute";
import SellerRoute from "./SellerRoute";
import Error from "../Pages/Error/Error";
import Myproduct from "../Pages/Dashbord/Myproduct/Myproduct";
import Allseller from "../Pages/Dashbord/Allseller/Allseller";
import UserRoute from "./UserRoute";
import HomeDashboard from "../Pages/Dashbord/HomeDashboard/HomeDashboard";

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
                loader: ({params}) => fetch(`https://used-car-resale-market-server.vercel.app/category/${params.id}`)
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
                element: <PrivateRoute>
                    <HomeDashboard />
                </PrivateRoute>
            },
            {
                path: '/dashboard/user',
                element: <UserRoute>
                    <MyOrders />
                </UserRoute>
            },
            {
                path: '/dashboard/alluser',
                element: <AddminRoute>
                    <Alluser />
                </AddminRoute>
            },
            {
                path: '/dashboard/allseller',
                element: <AddminRoute>
                    <Allseller/>
                </AddminRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute>
                <AddProduct />
            </SellerRoute>
            },
            {
                path: '/dashboard/myproduct',
                element: <SellerRoute>
                <Myproduct />
            </SellerRoute>
            }
        ]
    }
])

