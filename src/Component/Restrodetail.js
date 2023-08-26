import { useParams } from "react-router-dom";
//import { Menu_Api_Url } from "./constant";
import {  useState } from "react";
import { img_cdn_link } from "./constant";
import useRestrodeatilFetching from "../utils/useRestodeatilFetching";
import CategoryItemDisplay from "./CategoryItemDisplay";
import { useState } from "react";
import { RestroDetailshimmerEffect } from "./ShimmerEffect";
const Restrodetail = () => {
  const { id } = useParams();
  const [isValue, setIsValue] = useState(0);
  
  {
    /*when not using utils as customhooks 
    const[mainItem , setMainItem]=useState("");
console.log(id)
useEffect(()=>{
togetRestroDetail()
},[])
async function togetRestroDetail(){
   try{
   const callApi=await fetch(Menu_Api_Url+id);
   const json=await callApi.json();
   console.log(json)
   setMainItem(json.data)
   }
   catch(error){
   console.error("fetching issue",error)
   }
  return mainItem
}
    
*/
  }

  //console.log(id)
  //console.log(useRestrodeatilFetching(id))
  const mainItem = useRestrodeatilFetching(id);
  if (!mainItem) {

    return <RestroDetailshimmerEffect/> ;
  }

  //console.log(mainItem);
  //debugger

  const { name, cuisines, areaName, cloudinaryImageId } =
    mainItem?.cards[0]?.card?.card?.info;
  /*const { itemCards } =
    mainItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  */

  //console.log(mainItem.cards)

  const filterFoodList =
    mainItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (item) => {
        return (
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  console.log(filterFoodList);

  return (
    <>
      <div key={cloudinaryImageId} className="px-2  py-5 hover:shadow-2xl">
      
     
        <div className="flex justify-center">
          <img src={img_cdn_link + cloudinaryImageId} className="h-96 rounded-md" ></img>
        </div>
    <div className="flex justify-evenly">
    <h1>{name}</h1>
    <h2>{areaName}</h2>
   </div>

      </div>

      <div>
        
        {filterFoodList.map((item, index) => {
          return (
            <CategoryItemDisplay
              data={item?.card?.card}
              keys={id}

              showItemList={index === isValue ? true : false}
              setUpdateItemList={() => setIsValue(index)}
              setCollaspe={() => setIsValue("")}
            />
          );
        })}
      </div>
    </>
  );

  //
  /*
return(
<>
<div className="main-card-detail">
  <div>
  <p>{name}</p>
  <p>{cuisines}</p>
  <p>{areaName}</p>

  </div>
  <div>
  <img src={img_cdn_link+cloudinaryImageId}></img> 
  </div>
</div>

<div className="food-item-deati">
  <div>
  {
    itemCards.map(item=>{
    //  console.log(item,"new")
      const {name,price,imageId}=item?.card?.info
       return(
<>
<div>
        <p>{name}</p>
        <p>{price}</p>
        
</div>
<div>
<p><img src={img_cdn_link+ imageId}></img></p>


</div>
</>

        )
         
    })
  }

  </div>
</div>


</>
)*/
};
export default Restrodetail;
