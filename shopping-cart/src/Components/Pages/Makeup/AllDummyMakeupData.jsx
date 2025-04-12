
import { DummyMakeupData } from "../../Products/DummyProduct/MakeUpData";
export const AllMakeupData = () =>  {
   // const data = DummyMakeupData;
   const allmakeupData = DummyMakeupData.items;
   // const filterdata = makeupData.filter( products => products.brand === "clinique" ); //good option
   return allmakeupData;
}
  