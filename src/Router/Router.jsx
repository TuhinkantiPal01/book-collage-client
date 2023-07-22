import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Collage from "../Pages/Collage/Collage/Collage";
import Admission from "../Pages/Admission/Admission/Admission";
import MyCollage from "../Pages/MyCollage/MyCollage/MyCollage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"collages",
                element:<Collage/>
            },
            {
                path:"admission",
                element:<Admission/>
            },
            {
                path:"myCollage",
                element:<MyCollage/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"registration",
                element:<Registration/>
            }
        ]
    }
])

export default router;