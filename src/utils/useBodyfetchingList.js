import { useEffect, useState } from "react";
import { storeLatvalue } from "./userLocation";


const useBodyfetchingList = (setList, setfilterList,lativalue,longivalue) => {
 


useEffect(()=>{
  getMenuCardData()
},[lativalue,longivalue])


async function getMenuCardData() {
  
 try{
 
  let data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lativalue}&lng=${longivalue}&page_type=DESKTOP_WEB_LISTING`
    
  );





   
    
    const json = await data.json();
   console.log(json)
  let store=  json.data.cards.filter((item)=>{
    return item.card?.card?.gridElements?.infoWithStyle?.restaurants
   })
console.log(store)



/*if restro is not located in your location city then default nagpur list shown*/
if(store.length==0){
  //alert("hey In your area swiggiy is not present this list of resaturant  is belong to nagpur")
 




}


//here in api there are lots of food array card so we are using only 1st one
//if city has more than one buch of menucard then using any one for now only
//note we can use both by array cloning but not now
if(store.length>=1){
  
  store=store[0]
}
console.log(store)
console.log(store?.card?.card?.gridElements?.infoWithStyle?.restaurants)

setList(store?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    setfilterList(store?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }catch (error) {
    console.error("fetching issue",error)
 }
}





  }
  

  
  
  

export default useBodyfetchingList;
