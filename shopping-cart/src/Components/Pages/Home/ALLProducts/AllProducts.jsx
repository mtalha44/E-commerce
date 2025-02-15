import { useEffect, useState } from "react";
import { fetchClothesData } from "../ClotheSection/ClotheCardApi";
import { ProductsBest3 } from "./ProductsBest3";
import "./AllProduct.css";

export const AllProducts = () => {
  const [clothesData, setClothesData] = useState([]);
  const [ clothecardloading, setClotheCardLoading] = useState(true);
  const [ clothecarderror, setClothCardError] = useState(null);
  const [ electronicsData, setElectronicsData ] = useState([]);
  const [ electronicerror , setelectronicError ] = useState(null);
  const [ electronicloading , setelectronicLoading ] = useState(true);

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
  }, []);

  return (
    <section className="all-products flex-row" id="all-products">
      <div className="feature-products">
        <h1 className="all-products-title">Feature Products</h1>
        <ul className="feature-products-list">
        {clothecarderror ? (
          <p>Loading...</p>
        ) : clothecarderror ? (
          <p>Error: {clothecarderror.message}</p>
        ) : (
         clothesData && clothesData.slice(0,4).map((curData) => {
           return <ProductsBest3 curdata={curData} key={curData.id} />;
          })
        )}
        </ul>
      </div>
      <div className="feature-products">
        <h1 className="all-products-title">Feature Products</h1>
        <ul className="feature-products-list">
        {electronicloading ? (
          <p>Loading...</p>
        ) : electronicerror ? (
          <p>Error: {electronicerror.message}</p>
        ) : (
         clothesData && clothesData.slice(0,4).map((curData) => {
           return <ProductsBest3 curdata={curData} key={curData.id} />;
          })
        )}
        </ul>
      </div>
      
      
    </section>
  );
};
