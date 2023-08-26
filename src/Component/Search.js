const Search=(setInputValue ,inputValue,filterOutRestroList,list,setfilterList)=>(

    <div 
    className="search-container flex flex-col m-5 md:grid md:place-items-center md:w-full lg:flex lg:flex-row justify-center border-2bg-orange-200	background-color: rgb(254 215 170) ">
      <div  
      className=" p-3.5 md:w-full">
     
    <input 
    className=" w-10/12  outline-0 m-0.5 py-1 bg-red-200 md:w-11/12"
         value={inputValue}
         onChange={(e) => {
           setInputValue(e.target.value);
           //console.log(e.target.value);
           //   setList(filterList)
         }}
       ></input>
       <button
        className="ml-1 px-4 py-1 mx-2 absolute"
         onClick={() => {
           const filterfunList = filterOutRestroList(inputValue, list);
           setfilterList(filterfunList);
         }}
       >
    <i 
    className="fa-solid fa-magnifying-glass fa-beat text-red-400" ></i>
       
       </button>
    
       </div>
      {/* sorting */}
       <div className=" flex w-10/12">

 <button onClick={()=>{
const topRestro=list.filter(item=>item?.info?.avgRating>4)
setfilterList(topRestro)
} } 
className="bg-orange-200	text-xs p-2 mx-4 rounded-1xl">
  Top Restaurant</button>

<button onClick={()=>{
const fastRestro=list.filter(item=>item?.info?.sla?.deliveryTime>20)
setfilterList(fastRestro)
} }
 className="bg-orange-200	text-xs p-2 mx-4 rounded-1xl ">
  Fastest delivery</button>


      </div>


   </div>
   


)
export default Search;