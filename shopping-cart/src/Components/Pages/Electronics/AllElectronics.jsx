import { useEffect, useState } from "react";
import { AllElectronicsCards  } from "./AllElectronicsCard"
import { fetchElectronicsData } from "./AllDummyElectronicsData"
import "../Ui/styling.css"
import "../Home/Ui/CardStyling.css"

export const AllElectronics = () => {
  const [ controlItems , setControlItems ] = useState(25);
  const [ allElectronicsData , setElectronicsData ] = useState([]);

    const fetchData = async () => {
              try {
                const data = await fetchElectronicsData();
                setElectronicsData(data);
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
                <h1>Sleek Tech, Smart Living</h1>
                <p>Beautifully designed, high-performance electronics for modern living.</p>
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
                {allElectronicsData && allElectronicsData.length > 0 ? (
                  allElectronicsData.slice(0 , controlItems ).map((curdata) => (
                    <AllElectronicsCards key={curdata.id} curdata={curdata}/>
                  ))
                 ) : (
                   <p>No Electronics found.</p>
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


