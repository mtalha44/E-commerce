
import { newDummyData } from "../../../Products/DummyProduct/newDummyData"
export const MakeupData = () =>  {
   const data = newDummyData.map((cur , index) => cur.category === 'makeup' && cur)
   const makeupdata = data[0].items;
   return makeupdata.slice(0,8);
}
  