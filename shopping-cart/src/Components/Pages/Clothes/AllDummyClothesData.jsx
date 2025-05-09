import { newDummyData } from "../../Products/DummyProduct/DummyData";

export const fetchClothesData = async () => {  
      const data = newDummyData;
      const clothesData = data[4];
      return clothesData.items;
};
  