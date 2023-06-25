import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const CategoryCard = () => {
  const [Cards, setCards] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let response = axios.get("http://localhost:1111/Cards");
      setCards((await response).data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex justify-around my-10 p-10 bg-slate-100 ">
        <div className="grid grid-cols-4 gap-4">
          {Cards &&
            Cards.map((card, index) => (
              <div className="" key={index}>
                <Link to={`/category/${card.title}`} className="">
                  <img src={card.cover} className="w-52" alt={card.title} />
                  <p className="text-center">{card.title}</p>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
