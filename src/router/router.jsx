import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement:<h2>Route not found</h2>,
    children:[
        {
            path:"/",
            element:<Home/>
        }
    ]
  },
]);

export default router;