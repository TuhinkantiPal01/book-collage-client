import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Admission from "../Pages/Admission/Admission/Admission";

import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Mycollage from "../Pages/MyCollage/MyCollege/MyCollege";
import CollageDetails from "../Pages/MyCollage/CollageDetails/CollageDetails";
import Collage from "../Pages/Collage/Collage/Collage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "collages",
        element: <Collage />,
      },
      {
        path: "admission",
        element: (
          <PrivateRoute>
            <Admission />
          </PrivateRoute>
        ),
      },
      {
        path: "mycollage",
        element: (
          <PrivateRoute>
            <Mycollage />
          </PrivateRoute>
        ),
      },
      {
        path: "collageDetails/:id",
        element: <CollageDetails />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
    ],
  },
]);

export default router;
