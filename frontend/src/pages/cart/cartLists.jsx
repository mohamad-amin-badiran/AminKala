import axios from "axios";
import { useEffect, useState } from "react";
import CartList from "./cartList";
import { HiOutlineArrowSmRight, HiOutlineCreditCard } from "react-icons/hi";

const CartLists = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let response = axios.get("http://localhost:1111/cart");
      setCart((await response).data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="md:flex p-10">
        <div className="basis-4/6 bg-slate-100 w-full mr-10 rounded-2xl shadow-2xl">
          <div className="bg-slate-100 p-5 border border-b-gray-400 rounded-t-lg">
            <h3>{`Cart-${cart.length} Items`}</h3>
          </div>
          {cart.map((data) => (
            <CartList data={data} />
          ))}
		  </div>
        <div className="basis-2/6 bg-blue-500 rounded-2xl w-full h-[70vh]">
          <div className="flex justify-between px-10 py-5 items-center">
            <div>
              <h4 className="font-medium text-lg text-white">Card details</h4>
            </div>
            <div>
              <h4 className="text-white">
                <HiOutlineCreditCard size={27} />
              </h4>
            </div>
          </div>
          <div className="px-8 pb-8 mx-4 my-8 border-b">
            <input
              type="text"
              className="border-none w-full p-2 rounded-md"
              placeholder="enter your name :"
            />
            <input
              type="number"
              className="w-full mt-3 p-2 rounded-md"
              placeholder="enter your Card Number :"
            />
            <div className="flex justify-between mt-3">
              <input
                type="number"
                className="w-full mr-3 p-2 rounded-md"
                placeholder="expiration :"
              />
              <input
                type="number"
                className="w-full p-2 rounded-md"
                placeholder="CVV :"
              />
            </div>
          </div>
          <div className="px-8">
            <div className="flex justify-between text-white font-medium">
              <h5>Subtotal</h5>
              <h5>$4798.00</h5>
            </div>
            <div className="flex justify-between text-white font-medium my-5">
              <h5>Shipping</h5>
              <h5>$20.00</h5>
            </div>
            <div className="flex justify-between text-white font-medium">
              <h5>Total(Incl. taxes)</h5>
              <h5>$4818.00</h5>
            </div>
            <button className="flex justify-between rounded-md items-center bg-blue-400 mt-5 p-2 w-full text-white font-medium ">
              <span className="text-xl mx-2">$4818.00</span>
              <span className="flex items-center">
                {" "}
                buy
                <HiOutlineArrowSmRight size={24} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartLists;
