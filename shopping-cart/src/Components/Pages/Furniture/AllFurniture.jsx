import { useEffect, useState } from "react";
import { AllFurnitureCards  } from "./AllFurnitureCard"
import { fetchFurnitureData } from "./AllDummyFurnitureData"
import "../Ui/styling.css"
import "../Home/Ui/CardStyling.css"

export const AllFurniture = () => {
  const [ controlItems , setControlItems ] = useState(25);
  const [ allFurnitureData , setFurnitureData ] = useState([]);

    const fetchData = async () => {
              try {
                const data = await fetchFurnitureData();
                setFurnitureData(data);
              } catch (err) {
                // setError(err);
                console.log(err);
              } finally {
                // setLoading(false);
                console.log("");
              }
            }
            useEffect(() => {
                fetchData();
            },[])

    return (
        <>
        <section className="AllProductPage">
            <div className="AllProductPage-title">
                <h1>Elegant and Functional Furniture</h1>
                <p>Transform your space with stylish, high-quality furniture pieces designed for comfort, durability, and timeless beauty.</p>
            </div>
            <div className="AllProductPage-filters">
              <label htmlFor="sort-options" className="filters-label">
                Filter Products By
              </label>
              <select id="sort-options" className="filters-select">
                <option value="default">Newest</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
                <option value="brand">Brand</option>
              </select>
            </div>
                        

            <div className="home-card-list-container">
            <ul className="home-card-list product-card-list"
                style={{ display: "flex", flexWrap: "wrap", margin: "auto" , overflow: "hidden" }}
            >
                {allFurnitureData && allFurnitureData.length > 0 ? (
                  allFurnitureData.slice(0 , controlItems ).map((curdata) => (
                    <AllFurnitureCards key={curdata.id} curdata={curdata}/>
                  ))
                 ) : (
                   <p>No makeup found.</p>
                )}
            </ul>
            </div>
            <div className="wrapper see-more flex-row" style={{marginTop :"2rem"}} >
            <div className="link_wrapper">
              <a href="#" onClick={(e) => {
                e.preventDefault();
                setControlItems(controlItems + 5 );
                
              }
                }>See more</a>
            </div>
          </div>
        </section>
        </>
    )
}


