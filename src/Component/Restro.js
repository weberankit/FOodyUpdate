import { img_cdn_link } from "./constant";

const Restro=({name,area,avgRating,costForTwo,id,cuisines,cloudinaryImageId})=>{
   // const {name,area,avgRating,costForTwo,id,cuisines,cloudinaryImageId}=props;
    //console.log(name,area);
  // console.log(props)

    //const lengthOFCuisines=cuisines.length
    //console.log(lengthOFCuisines)
    

    return(
    <>
    
 <div key={id} className="foodItem-container  px-2  py-5 hover:shadow-2xl  ">
  <div className="">
   <div className="restro-image">
    <img className="w-72 h-52 rounded-md" src={img_cdn_link+cloudinaryImageId}></img>

   </div>
   <div className="restro-info w-50 px-2">
             
           <h1 className="font-bold">{name}</h1> 
            <h6 className="font-thin text-sm">{
            cuisines.length>3?cuisines.slice(0,3).join(" "):cuisines.join(" ")
              
            }</h6>


        <div className="flex justify-between text-sm">
           <h5>{avgRating}</h5>

           
            {
            typeof costForTwo === "string"?<h5>RS{costForTwo.slice(0,4)}</h5>:<h5>{costForTwo/100}</h5>
           }
        </div>
        <div>
           <p>{area}</p>  
        </div>
   
       


    </div>




  </div>


 </div>
    
    
    </>

    )
}



export const promotedRestro=(Restro)=>{
   return(props)=>{
      return(
<>
<label>promoted</label>
         <Restro {...props}/>
</>
      )
   }

   
}
export default Restro;