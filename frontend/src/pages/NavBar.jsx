import { HiShoppingCart } from "react-icons/hi";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-row justify-around p-4 items-center bg-slate-100">
        <div className="">
          <h2 className="font-medium font-sans">digikala</h2>
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
          <button className="font-medium font-sans">login / signIn</button>
          <div className="mx-3 border-2 rounded-md border-gray-400 shadow-lg p-2">
            <HiShoppingCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
