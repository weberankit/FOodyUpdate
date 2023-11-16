import { img_cdn_link } from "./constant";

const Restro=({name,area,avgRating,costForTwo,id,cuisines,cloudinaryImageId})=>{
return(
    <>
    
 <div key={id} 
 className="foodItem-container relative  px-2  py-5 shadow-2xl hover:shadow-inner hover:outline-1 hover:outline-orange-300  hover:outline-dotted  ">
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
           <h5 className="p-1 bg-red-400 rounded-sm">{avgRating}<span className='text-white' > <i className="fa-solid fa-star"></i> </span></h5>

           
            {
            typeof costForTwo === "string"?<h5 className="text-gray-500">RS{costForTwo.slice(0,4)}</h5>:<h5 className="text-gray-500">{costForTwo/100}</h5>
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
   console.log(Restro)
   return(props)=>{
   //   {console.log(props  )}
      return(
         
<>
<label ></label>
         <Restro {...props}/>
</>
      )
   }

   
}
export default Restro;