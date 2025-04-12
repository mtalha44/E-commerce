import { AllMakeupData } from "./AllDummyMakeupData"
import { AllMakeupCards } from "./AllMakeupCard";

import "./Ui/styling.css";

export const AllMakeup = () => {
    const allmakeupData = AllMakeupData();
    return (
        <>
            {/* <div className="SideBar">
              <SideBar/>
            </div> */}
        <section className="AllMakeupPage">
            <div className="AllMakeupPage-title">
                <h1>Beauty and Makeup Products</h1>
                <p>Discover a wide range of top-quality beauty and makeup products from trusted brands.</p>
            </div>
            <div className="AllMakeupPage-filters">
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
            <ul className="home-card-list"
                style={{ display: "flex", flexWrap: "wrap", margin: "auto" , overflow: "hidden" }}
            >
                {allmakeupData && allmakeupData.length > 0 ? (
                  allmakeupData.map((curdata) => (
                    <AllMakeupCards key={curdata.id} curdata={curdata}/>
                  ))
                 ) : (
                   <p>No makeup found.</p>
                )}
            </ul>
            </div>
        </section>
        </>
    )
}


