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
          element:<SeeDetails></SeeDetails>,
          loader:({params}) => fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
          path:'/seeAllDetails/:id',
          element:<SeeAllDetails></SeeAllDetails>,
          loader:({params})=> fetch(`http://localhost:5000/allservice/${params.id}`)
        },
        {
          path:'/addservice',
          element:<AddService></AddService>
        },
        {
          path:'/myservice',
          element:<MyService></MyService>
        },
        {
          path:'/update/:id',
          element:<Update></Update>,
          loader:({params}) => fetch(`http://localhost:5000/providerServiceOne/${params.id}`)
        },
        {
          path:'/myscedules',
          element:<MyScedules></MyScedules>
        }
      ]
    },
  ]);

  export default router;