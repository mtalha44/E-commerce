
import { DummyMakeupData } from "../../../Products/DummyProduct/MakeUpData";
export const MakeupData = () =>  {
   // const data = DummyMakeupData;
   const makeupData = DummyMakeupData.items;
   // const filterdata = makeupData.filter( products => products.brand === "clinique" ); //good option
   return makeupData.slice(0,8);
}
  