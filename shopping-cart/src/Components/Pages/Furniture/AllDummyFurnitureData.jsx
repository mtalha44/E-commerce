import { newDummyData } from "../../Products/DummyProduct/DummyData";

export const fetchFurnitureData = async () => {  
      const data = newDummyData;
      const furnitureData = data[2];
      return furnitureData.items;
};
  