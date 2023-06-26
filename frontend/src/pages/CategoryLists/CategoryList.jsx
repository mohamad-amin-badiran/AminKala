import axios from "axios";
import { useEffect, useState } from "react";
import { HiOutlineFolderOpen, HiShoppingCart } from "react-icons/hi";
import { useParams, useLocation } from "react-router-dom";

const CategoryList = () => {
  let category = useParams();
  const [CardList, setCardList] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let response = axios.get("http://localhost:1111/products");
      setCardList((await response).data);
    };
    fetchData();
  }, []);
  let AddToCart = async (id) => {
    let addProduct = CardList.filter((card) => card.id === id);
    let obj = {
      name: addProduct[0].name,
      category: addProduct[0].category,
      cover: addProduct[0].cover,
      descreption: addProduct[0].descreption,
      discount: addProduct[0].discount,
      price: addProduct[0].price,
    };
    console.log(obj);
    let response = axios.post("http://localhost:1111/cart", {obj});
    console.log(response);
    console.log(addProduct[0]);
  };
  let filterList = CardList.filter((card) => card.category === category.id);
  return (
    <>
      <div className="flex flex-wrap bg-slate-200">
        {filterList.length === 0 ? 
        <div className="flex my-10 mx-auto items-center">
          <HiOutlineFolderOpen size={50}/>
          ohhh no not eny data
        </div> :
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
          ))}
      </div>
    </>
  );
};

export default CategoryList;
