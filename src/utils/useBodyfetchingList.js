import { useEffect, useState } from "react";
import { storeLatvalue } from "./userLocation";


const useBodyfetchingList = (setList, setfilterList,lativalue,longivalue) => {
 
/*
  const [lativalue, setlativalue] = useState("28.7041");
  const [longivalue, setlongivalue] = useState("77.1025");

//const [lativalue , setlativalue] =useState("28.7041")
//const [longivalue , setlongivalue] =useState("77.1025")
//console.log(lativalue,longivalue)



 const valueLat=storeLatvalue()
  console.log(valueLat,"me",valueLat.length)



  useEffect(() => {
    if (valueLat.length !== 0) {
      setlativalue(valueLat[0]);
      setlongivalue(valueLat[1]);
    }
  }, [valueLat]);

  useEffect(() => {
    getMenuCardData();
  }, [lativalue, longivalue]);

*/


useEffect(()=>{
  getMenuCardData()
},[lativalue,longivalue])


async function getMenuCardData() {
  
 try{
 
  let data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lativalue}&lng=${longivalue}&page_type=DESKTOP_WEB_LISTING`
    
  );





/*//
if(valueLat.length>0){
  setlativalue(valueLat[0])
  setlongivalue(valueLat[1])
}
*/
   
    
    const json = await data.json();
   console.log(json)
  let store=  json.data.cards.filter((item)=>{
    return item.card?.card?.gridElements?.infoWithStyle?.restaurants
   })
console.log(store)



/*if restro is not located in your location city then default nagpur list shown*/
if(store.length==0){
  //alert("hey In your area swiggiy is not present this list of resaturant  is belong to nagpur")
 

 //data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458&lng=79.0882&page_type=DESKTOP_WEB_LISTING")
//const json=await data.json()
///console.log(json)

//setList(
  // json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
 // );
  //setfilterList(
  //    json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  
   // );



}



//if city has more than one buch of menucard then using any one for now only
//note we can use both by array cloning but not now
if(store.length>=1){
  console.log("yes")
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
