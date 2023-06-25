import { useEffect, useState } from "react";
import { getProducts } from "../services/server";
import axios from "axios";
import SlideShow from "./SlidShow";
import CategoryCard from "./CategoryCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = axios.get("http://localhost:1111/products");
      setProducts((await response).data);
    };
    getProducts();
  }, []);
  return (
  	<>
		<SlideShow />
		<CategoryCard /> 
		{/* {
			products.map((product) => (
				<div key={product.id}>
					{product.name}
				</div>
			))
		} */}
	</>
	);
};

export default Home;
