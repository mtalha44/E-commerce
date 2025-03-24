import { fetchClothesData } from "../ClotheSection/ClotheCardApi";
import { useEffect, useState } from "react";
import "./AllProduct.css";
import { ProductsBest3 } from "./ProductsBest3";


export const FeatureProducts = () => {
    const [ clothesData, setClothesData ] = useState(null);
    const [ error , setError ] = useState(null);
    const [ loading , setLoading ] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchClothesData();
          setClothesData(data);
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
        <h1 className="all-products-title">Feature Products</h1>
        <ul className="feature-products-list">
        { loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
         clothesData && clothesData.slice(0,4).map((curData) => {
           return <ProductsBest3 curdata={curData} key={curData.id} />;
          })
        )}
        </ul>
      </div>
    )
}