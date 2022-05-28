import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import Home from './Pages/Home/Home';
import Tools from './Pages/Home/Tools';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAdmin from './Pages/Login/RequireAdmin';
import RequireAuth from './Pages/Login/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/tools" element={<Tools></Tools>}></Route>
        <Route
          path="/tool/:toolId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route path="myOrders" element={<MyOrders></MyOrders>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
        </Route>

        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
