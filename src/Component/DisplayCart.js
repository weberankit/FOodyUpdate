import { useDispatch } from "react-redux";

import { removeItem, increment } from "../utils/UseCartSlice";



/*
 function finalPrice(dataInfo){
       
   const priceOftotalItem=finalPrice()
   console.log(priceOftotalItem)
*/
const DisplayCart = ({ dataInfo }) => {
 

   //finalPrice(dataInfo)
const dispatch = useDispatch();
  const incrdispatch = useDispatch();

const totalPrice = dataInfo.map((item) => (item?.itemNo * item?.items?.card?.info?.price) / 100)
    .reduce((x, y) => x + y, 0);
    





  
  return (
    
    <>
<div className="text-center">
    <h1 className="bg-lime-400 p-3 "> Total Price Rs:{totalPrice} </h1> 
  </div>
 { dataInfo.map((item) => {
   // console.log(item);

    const priceItem = item.itemNo * (item.items.card.info.price / 100);
 
    return (

      <div key={item?.items?.card?.info?.id} className="p-6 shadow-2xl">
        
        <div className="flex justify-evenly ">

          <div className="w-2/5 m-3">
        <p >{item?.items?.card?.info?.name}</p>
          <button onClick={() => incrdispatch(increment(item))} className="p-1 rounded-md hover:bg-lime-400">
          <i className="fa-solid fa-plus"></i>
          </button>
            <button onClick={() => dispatch(removeItem(item))}  className="p-1 rounded-lg hover:bg-slate-500"><i className="fa-regular fa-trash-can"></i></button>
          </div>

          <div className="3/5">
          <p>item quantity:{item?.itemNo}</p>
          <p>{priceItem == NaN?<h1 className="text-center">price of Item is not given</h1>:""}</p>
          <p>
            price:{item?.itemNo*item?.items?.card?.info?.price / 100}
          </p>

         </div>
        </div>
      
       
         

      </div>

    );




  })
 }


  </>
  )

};
export default DisplayCart;
