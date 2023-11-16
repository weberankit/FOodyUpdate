import { useParams } from "react-router-dom";
//import { Menu_Api_Url } from "./constant";
import {  useState } from "react";
import { img_cdn_link } from "./constant";
import useRestrodeatilFetching from "../utils/useRestodeatilFetching";
import CategoryItemDisplay from "./CategoryItemDisplay";

import { RestroDetailshimmerEffect } from "./ShimmerEffect";
 

import { useEffect } from "react";



const Restrodetail = () => {
  const { id } = useParams();


  const [isValue, setIsValue] = useState(0);
  const [imgloaded, setImgloaded] = useState(false);












   



  const mainItem = useRestrodeatilFetching(id);



   

///this below is need to be delete
     useEffect(() => {
      if (mainItem) {
        const { cloudinaryImageId } = mainItem?.cards[0]?.card?.card?.info;
        const src = img_cdn_link + cloudinaryImageId;
  
        const img = new Image();
        img.onload = () => {
          setImgloaded(true);
        };
        img.src = src;
      }
    }, [mainItem]);





  if (!mainItem) {

    return <RestroDetailshimmerEffect/> ;
  }

 
    



  const { name, cuisines, areaName, cloudinaryImageId } =
    mainItem?.cards[0]?.card?.card?.info;
  
      const src = img_cdn_link + cloudinaryImageId;
 

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

              showItemList={index === isValue ? true : false}//controliing the whole thing
              setUpdateItemList={() => setIsValue(index)}//onclick decide showItem T or F
              
              setCollaspe={() => setIsValue("")}
            />
          );
        })}
      </div>
    </>
  );


};


export default Restrodetail;
