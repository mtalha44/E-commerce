import { useEffect, useState } from "react";
import "./AllProduct.css";
import { ProductsBest3 } from "./ProductsBest3";
import { fetchElectronicsData } from "../Electronics/ElectronicsApiData";

export const TopProducts = () => {
    const [ electronicsData, setsetElectronicsData ] = useState(null); 
    const [ error , setError ] = useState(null);
    const [ loading , setLoading ] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchElectronicsData();
          setsetElectronicsData(data);
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
        <h1 className="all-products-title">Top Products</h1>
        <ul className="feature-products-list">
        { loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
            electronicsData && electronicsData.slice(0,4).map((curData) => {
           return <ProductsBest3 curdata={curData} key={curData.id} />;
          })
        )}
        </ul>
      </div>
    )
}