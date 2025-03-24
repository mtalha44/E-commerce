import { useEffect, useState } from "react";
import "./AllProduct.css";
import { ProductsBest3 } from "./ProductsBest3";
import { newDummyData } from "../../../Products/DummyProduct/DummyData";

const fetchFurnitureData = async () => {  
      const data = newDummyData;
      const furnitureData = data[2];
      return furnitureData.items;
};
  
export const FurnitureProducts = () => {
    const [ furnitureData, setFurnitureData ] = useState(null); 
    const [ error , setError ] = useState(null);
    const [ loading , setLoading ] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchFurnitureData();
          setFurnitureData(data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    })
    return (
        <div className="feature-products">
        <h1 className="all-products-title">Rich Category</h1>
        <ul className="feature-products-list">
        { loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
            furnitureData && furnitureData.slice(0,4).map((curData) => {
           return <ProductsBest3 curdata={curData} key={curData.id} />;
          })
        )}
        </ul>
      </div>
    )
}