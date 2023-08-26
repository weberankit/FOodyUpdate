import { useEffect } from "react";



const useBodyfetchingList = (setList, setfilterList) => {
  useEffect(() => {
    getMenuCardData();
  }, []);




async function getMenuCardData() {
  
  //const maxtry=5;
   // let startTry=0;
    // exponential backoff retry to call api when got error
  // while(startTry<maxtry){

 try{
   const data =await fetch(
     "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
   )
    



     console.log(data)
    
    const json = await data.json();
   
    
    setList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    
    setfilterList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    
  }catch (error) {
    console.error("fetching issue",error)
 }
}
  }
  

  
  
  

export default useBodyfetchingList;
