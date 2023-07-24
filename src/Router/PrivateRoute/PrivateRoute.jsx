/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Components/provider/AuthProvider";
import Loading from "../../Components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user , loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <Loading/>
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;
