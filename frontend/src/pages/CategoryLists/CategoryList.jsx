import axios from "axios";
import { useEffect, useState } from "react";
import { HiOutlineFolderOpen, HiShoppingCart } from "react-icons/hi";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/cartSlice";
import { toast } from "react-hot-toast";

const CategoryList = () => {
  let category = useParams();
  let dispatch = useDispatch();
  const [CardList, setCardList] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let response = axios.get("http://localhost:1111/products");
      setCardList((await response).data);
    };
    fetchData();
  }, []);

  let AddToCart = async (id) => {
    toast.success("Add To Cart ✔✨!");
    let AddCart = CardList.filter((card) => card.id === id);
    dispatch(
      addToCart({
        id: AddCart[0].id,
        name: AddCart[0].name,
        cover: AddCart[0].cover,
        category: AddCart[0].category,
        descreption: AddCart[0].descreption,
        discount: AddCart[0].discount,
        price: AddCart[0].price,
      })
    );
    // let response = axios.post("http://localhost:1111/cart", {obj});
  };

  let filterList = CardList.filter((card) => card.category === category.id);
  return (
    <>
      <div className="grid xl:grid-cols-6 md:grid-cols-4 grid-cols-2 bg-slate-200">
        {filterList.length === 0 ? (
          <div className="flex my-10 mx-auto items-center">
            <HiOutlineFolderOpen size={50} />
            ohhh no not eny data
          </div>
        ) : (
          filterList.map((card) => (
            <div
              key={card.id}
              className="flex p-4 shadow-2xl rounded-lg bg-slate-100 m-5"
            >
              <div className="relative">
                <img src={card.cover} className=" w-52 rounded-2xl" />
                <span className="absolute -top-2 -rotate-12 bg-red-600 rounded-full px-2 py-1 text-white font-semibold">
                  {card.discount}%
                </span>
                <h5 className="my-2 font-sans text-xl ">{card.name}</h5>
                <div className="flex items-center">
                  <h5 className="text-2xl ">{card.price}</h5>
                  <h5 className="line-through mx-2">
                    {((100 / card.discount) * card.price - card.price).toFixed(
                      0
                    )}
                  </h5>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    className="flex rounded-lg justify-center items-center text-white font-semibold bg-red-400 hover:bg-red-600 w-full py-1"
                    onClick={() => AddToCart(card.id)}
                  >
                    <span className="mx-2">add to chart</span>{" "}
                    <HiShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default CategoryList;
