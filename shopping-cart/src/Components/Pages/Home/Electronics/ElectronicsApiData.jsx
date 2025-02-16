import { newDummyData } from "../../../Products/DummyProduct/DummyData";

export const fetchElectronicsData = async () => {  
      const data = newDummyData;
      const clothesData = data[6];
      return clothesData.items;
};
  