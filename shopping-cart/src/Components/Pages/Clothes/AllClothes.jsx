import { useEffect, useState } from "react";
import { AllClothesCards  } from "./AllClothesCard"
import { fetchClothesData } from "./AllDummyClothesData"
import "../Ui/styling.css"
import "../Home/Ui/CardStyling.css"

export const AllClothes = () => {
  const [ controlItems , setControlItems ] = useState(25);
  const [ allClothesData , setClothesData ] = useState([]);

    const fetchData = async () => {
              try {
                const data = await fetchClothesData();
                setClothesData(data);
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
                <h1>Chic Style, Everyday Comfort</h1>
                <p>Beautifully crafted, on-trend fashion for your modern wardrobe.</p>
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
                {allClothesData && allClothesData.length > 0 ? (
                  allClothesData.slice(0 , controlItems ).map((curdata) => (
                    <AllClothesCards key={curdata.id} curdata={curdata}/>
                  ))
                 ) : (
                   <p>No Clothes found.</p>
                )}
            </ul>
            </div>
            <div className="wrapper see-more flex-row" style={{marginTop :"2rem"}} >
            <div className="link_wrapper">
              <a href="" onClick={(e) => {
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


