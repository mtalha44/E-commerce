import { newDummyData } from "../../../Products/DummyProduct/DummyData";

export const fetchBestData = async () => {  
      const data = newDummyData;
      const bestProduct = data[7];
      return bestProduct.items;
};
  