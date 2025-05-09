import { newDummyData } from "../../Products/DummyProduct/DummyData";

export const fetchPopularData = async () => {  
      const data = newDummyData;
      const popularData = data[7];
      const shuffledPopularData = popularData.items.sort(() => Math.random() - 0.5);
      return shuffledPopularData;
};
  