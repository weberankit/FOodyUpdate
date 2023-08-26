const RestroShimmer=()=>{

  const res=new Array(10).fill(undefined);
  console.log(res)

    return(
   <div className="flex flex-wrap m-2 p-4 justify-evenly">
     { res.map((item , index)=>{
    //using index is not ecommend but here its ok as it is shimmer
     return(
     <div key={index} className="foodItem-container m-3.5 px-2 py-5 animate-pulse bg-gray-200 pt-4">
      <div className="flex flex-col">
        <div className="restro-image w-72 h-52 rounded-md bg-gray-400"></div>
        <div className="restro-info w-50 px-2">
          <h1 className="font-bold bg-gray-400 h-6 w-10/12 mb-2 p-2 mt-3.5"></h1>
          <h6 className="font-thin text-sm bg-gray-400 h-4 w-11/12 p-2"></h6>
        
       
        </div>
      </div>
    </div>
     )
   }) 
}
   </div>
    )
}




 export const RestroDetailshimmerEffect=()=>(

  <div className="flex  m-2 p-4 justify-center">
<div  className=" w-full m-3.5 px-2 py-5 animate-pulse bg-gray-200 pt-4 ">
      
     
      <div className=" w-11/12 h-52 rounded-md bg-gray-400">
        <img  className="h-96 rounded-md" ></img>
      </div>
  <div className="">
  <h1  className="font-bold bg-gray-400 h-6 w-10/12 mb-2 p-2 mt-3.5"></h1>
  <h2 className="font-thin text-sm bg-gray-400 h-4 w-11/12 p-2"></h2>
 </div>

    </div>

</div>


)




export default RestroShimmer;
