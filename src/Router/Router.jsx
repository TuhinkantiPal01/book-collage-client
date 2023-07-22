import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Collage from "../Pages/Collage/Collage/Collage";
import Admission from "../Pages/Admission/Admission/Admission";
import MyCollage from "../Pages/MyCollage/MyCollage/MyCollage";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
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
            }
        ]
    }
])

export default router;