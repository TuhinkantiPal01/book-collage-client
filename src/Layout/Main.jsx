import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";

const Main = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer/>
    </>
  );
};

export default Main;
