import { useDispatch, useSelector } from "react-redux";
//import { clearItem } from "../utils/UseCartSlice";
//import ItemList from "./ItemList";
import DisplayCart from "./DisplayCart";
import { clearItem } from "../utils/UseCartSlice";

const Mybag = () => {
  const dispatch = useDispatch();
  const cartItemInfo = useSelector((store) => store?.cart?.item);
//  console.log(cartItemInfo?.length);

  return (
    <div>


      

    { cartItemInfo.length && <button onClick={() => dispatch(clearItem())} className="p-3 bg-red-200  rounded-md float-right hover:bg-red-500"><i className="fa-solid fa-delete-left"></i></button>
   
  }
       <DisplayCart dataInfo={cartItemInfo} />
   {cartItemInfo?.length === 0 && <h1 className="text-center text-slate-800 p-6 m-2">cart is empty</h1>}
    
    </div>
  );
};
export default Mybag;
