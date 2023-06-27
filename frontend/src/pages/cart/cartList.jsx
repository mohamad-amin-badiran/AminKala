import { useState } from "react";
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineTrash,
} from "react-icons/hi";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../reducers/cartSlice";
import { toast } from "react-hot-toast";

const CartList = ({ data }) => {
  const [qty, setQty] = useState(1);
  let dispatch = useDispatch();
  let deleteCart = (dataId) => {
    toast.success("Remove form Cart success 👍!");
    dispatch(deleteFromCart(dataId.toString()));
    console.log(dataId);
  };
  return (
    <>
      <div className="md:flex px-10 pt-10 items-center justify-between">
        <div className="flex items-center">
          <img
            src={data.cover}
            className="rounded-2xl  w-24"
            alt="cartProduct"
          />
          <div>
            <h5 className="mx-3 text-lg font-medium">Name : {data.name}</h5>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <button onClick={() => setQty(qty + 1)}>
              <HiOutlineChevronUp />
            </button>
            <h5 className="text-lg font-medium  p-2 text-center w-auto">
              {qty}
            </h5>
            <button onClick={() => setQty(qty - 1)}>
              <HiOutlineChevronDown />
            </button>
            <h5 className="text-lg font-medium bg-slate-200 pointer rounded-xl p-2 text-center w-auto mx-3">
              ${data.price}
            </h5>
            <button
              className="text-lg font-medium hover:text-white hover:bg-rose-700  pointer hover:rounded-xl p-3 flex justify-center w-auto"
              onClick={() => deleteCart(data.id)}
            >
              <HiOutlineTrash />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartList;
