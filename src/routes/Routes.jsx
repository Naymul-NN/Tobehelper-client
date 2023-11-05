import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Allservices from "../allService/Allservices";
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
        }
      ]
    },
  ]);

  export default router;