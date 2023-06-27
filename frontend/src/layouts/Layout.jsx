import { Outlet } from "react-router-dom";
import NavBar from "../pages/NavBar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <div>
        <Toaster/>
          <Outlet />        
      </div>
    </>
  );
};

export default MainLayout;
