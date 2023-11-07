import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Allservices from "../allService/Allservices";
import Register from "../register/Register";
import Login from "../login/Login";
import SeeDetails from "../singleService/SeeDetails";
import SeeAllDetails from "../seeallDetails/SeeAllDetails";
import AddService from "../addservice/AddService";
import MyService from "../myservice/MyService";
import Update from "../update/Update";
import MyScedules from "../myscedules/MyScedules";
import Privet from "../privet/Privet";
import Account from "../home/Account";
const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
          path:'/allservices',
          element:<Allservices></Allservices>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/seeDetails/:id',
          element:<Privet><SeeDetails></SeeDetails></Privet>,
          loader:({params}) => fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
          path:'/seeAllDetails/:id',
          element:<Privet><SeeAllDetails></SeeAllDetails></Privet>,
          loader:({params})=> fetch(`http://localhost:5000/allservice/${params.id}`)
        },
        {
          path:'/addservice',
          element:<Privet> <AddService></AddService></Privet>
        },
        {
          path:'/myservice',
          element:<Privet><MyService></MyService></Privet>
        },
        {
          path:'/update/:id',
          element:<Update></Update>,
          loader:({params}) => fetch(`http://localhost:5000/providerServiceOne/${params.id}`)
        },
        {
          path:'/myscedules',
          element:<Privet> <MyScedules></MyScedules></Privet>
        },
        {
          path:'/account',
          element:<Privet> <Account></Account></Privet>
        }
      ]
    },
  ]);

  export default router;