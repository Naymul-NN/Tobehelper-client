import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Allservices from "../allService/Allservices";
import Register from "../register/Register";
import Login from "../login/Login";
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
        }
      ]
    },
  ]);

  export default router;