import ItemList from "./ItemList";

const CategoryItemDisplay = ({
  data,
  showItemList,
  setUpdateItemList,
  setCollaspe,
  keys,
}) => {
  
  console.log(showItemList);


 
  return (
    <div key={keys}>  
     
       
      
 {
  //when click on anny div it will call function in restrodetail file to set that div  index
 }
      <div  className="flex justify-evenly p-4 shadow-2xl  bg-gray-100 cursor-pointer" onClick={() => setUpdateItemList()}>
        
       <h1 className="font-bold "> {data.title}</h1>
        <div>
      {
          showItemList && <button onClick={(e) =>{
            e.stopPropagation();
            setCollaspe()
          }} 
          className="bg-orange-200	background-color: rgb(254 215 170) p-3 mx-4 rounded-3xl">collapse</button>
        }

         </div>
      </div>
        



         <div>
         {//we can directly use isvalue === index && other same but not as index of map is not exist here
         }
        {showItemList && <ItemList dataInfo={data?.itemCards} />}
       
       
      </div>
    </div>
  );
};

export default CategoryItemDisplay;
