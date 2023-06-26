import { HiShoppingCart } from "react-icons/hi";
import {RiUserSmileLine} from "react-icons/ri";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-row justify-around p-4 items-center bg-slate-100">
        <div className="">
          <Link to={"/"} className="flex items-center font-medium font-sans"><RiUserSmileLine size={22} className="mx-1"/> AminKala</Link>
        </div>
        <div>
          <nav>
            <ul className="flex flex-row">
              <li className="font-medium font-sans mx-2">Home</li>
              <li className="font-medium font-sans mx-2">Home</li>
              <li className="font-medium font-sans mx-2">Home</li>
              <li className="font-medium font-sans mx-2">Home</li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-row">
          {/* <button className="font-medium font-sans">login / signIn</button> */}
          <div className="mx-3 border-2 rounded-md border-gray-400 shadow-lg p-2">
            <Link to={"/cart"}>
              <HiShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
