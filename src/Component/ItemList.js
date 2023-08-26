import { useDispatch } from "react-redux";
import { addItem } from "../utils/UseCartSlice";
import { img_cdn_link } from "./constant";
const ItemList = ({ dataInfo }) => {
  const dispatch = useDispatch();
 // console.log(dataInfo);

  return dataInfo.map((item) => {
    return (
      <>
      <div key={item?.card?.info?.name} className="flex justify-evenly">
     <div className="p-3 w-64">
       <h2>{item?.card?.info?.name}</h2>
        <span>RS {item?.card?.info?.price/100}</span>
       </div>

     
          

          <div className="w-64 m-2 relative">
          
         <img src={img_cdn_link + item?.card?.info?.imageId} className="h-32  rounded-md ">
         </img>


<div  className="bg-red-300 rounded-xl absolute bottom-0 left-16 p-2 cursor-pointer hover:bg-slate-400"
          onClick={() => {
            dispatch(addItem(item));
          }}
        >
          add
        </div>

          </div>

            </div>
      </>
    );
  });
};
export default ItemList;
