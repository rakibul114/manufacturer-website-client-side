import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    // const [admin] = useAdmin(user);


    return (
      <div className="drawer">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/*<!-- Page content here -->*/}
          <h2 className="text-3xl font-bold text-purple-600 text-center">
            Welcome to your Dashboard
          </h2>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/*<!-- Sidebar content here -->*/}
            <li>
              <Link to="/dashboard">My Order</Link>
            </li>
            <li>
              <Link to="/dashboard/addReview">Add a Review</Link>
            </li>
            <li>
              <Link to="/dashboard/addProduct">For all</Link>
            </li>
           {/* {admin && (
              <>
                <li>
                  <Link to="/dashboard/manageOrders">Manage Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/addProduct">Add a Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageProducts">Manage Products</Link>
                </li>
              </>
           )}*/}
          </ul>
        </div>
      </div>
    );
};

export default Dashboard;