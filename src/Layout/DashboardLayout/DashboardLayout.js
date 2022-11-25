import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import Header from '../../Pages/Home/Header/Header';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <Header />
            <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content z-[-999]">
          <Outlet />
        </div>
        <div className="drawer-side bg-secondary">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content lg:bg-inherit bg-[#231f39]">
          <li>
              <Link to="/dashboard" className="text-xl font-bold text-white">My orders</Link>
            </li>
            {
              isSeller && <li><Link to="/dashboard/addproduct" className="text-xl text-white font-bold">Add A Product</Link></li>
            }
            {
              isAdmin && <>
              <li><Link to="/dashboard/addproduct" className="text-xl text-white font-bold">Add A Product</Link></li>
              <li>
              <Link to="/dashboard/Alluser" className="text-xl text-white font-bold">All Users</Link></li>
              </>
            }
          </ul>
        </div>
      </div>
        </div>
    );
};

export default DashboardLayout;