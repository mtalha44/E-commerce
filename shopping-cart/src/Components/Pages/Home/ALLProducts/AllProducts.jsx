
import "./AllProduct.css";
import { FeatureProducts } from "./FeatureProducts";
import { TopProducts } from "./TopProductrs";
// import { fetchElectronicsData } from "../Electronics/ElectronicsApiData";
import { FurnitureProducts } from "./FurnitureProducts";

export const AllProducts = () => {
  


  return (
    <section className="all-products flex-row" id="all-products">

      <div>
        <FeatureProducts/>
      </div>
      
      <div>
        <TopProducts/>
      </div>
      <div>

        <FurnitureProducts/>
      </div>
      
    </section>
  );
};
