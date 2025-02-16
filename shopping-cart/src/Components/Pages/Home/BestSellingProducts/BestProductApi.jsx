import { newDummyData } from "../../../Products/DummyProduct/DummyData";

export const fetchBestData = async () => {  
      const data = newDummyData;
      const clothesData = data[7];
      return clothesData.items;
};
  