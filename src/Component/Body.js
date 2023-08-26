import { Link } from "react-router-dom";
import { useEffect, useState,useContext } from "react";
import Restro, { promotedRestro } from "./Restro";
import useBodyfetchingList from "../utils/useBodyfetchingList";
import Search from "./Search";
import { displaySearchField} from "../utils/UserContext";
import RestroShimmer from "./ShimmerEffect";
function filterOutRestroList(input, list) {
  const listOfFilterData = list.filter((item) => {
    return item?.info?.name.toLowerCase().includes(input.toLowerCase());
  });
  console.log(listOfFilterData);
  return listOfFilterData;
}

const Body = () => {

  const [list, setList] = useState("");
  const [filterList, setfilterList] = useState("");
  const [inputValue, setInputValue] = useState("");
 
  //for higherordercomponent
  //calling
  const PromotedList = promotedRestro(Restro);
  const {icon}=useContext(displaySearchField)
  //console.log(icon.ico,icon,"iuser")

  /* this basically when not using customhooks 0r useBodyfetchinglist
const[filterList,setfilterList]=useState("")
 const [list , setList] = useState("");
  useEffect(()=>{

    getMenuCardData()
  },[])

 async function getMenuCardData(){
    const data=await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json();
   // console.log(json.data)
    //console.log(json.data?.cards[2]?.data?.data?.cards)
    setList(json.data?.cards[2]?.data?.data?.cards)
    //console.log(Restro())
     setfilterList(json.data?.cards[2]?.data?.data?.cards)

 }
*/
  useBodyfetchingList(setList, setfilterList);
/*
 
*/

if (!list) return <RestroShimmer/>

  return (
    <>
    <div className="mx-auto">

   { icon.ico == true? Search(setInputValue ,inputValue,filterOutRestroList,list,setfilterList):""
}
       



      <div className="flex flex-wrap justify-evenly">
        {filterList.length === 0 ? <h1>nothing found</h1> : ""}
        {filterList.map((item) => {
          console.log(item)
          return (
            <Link key={item?.info?.id} to={"/restrodetail/" + item?.info?.id}>
              {item?.info?.promoted ? (
                <PromotedList {...item.info} />
              ) : (
                <Restro {...item.info} />
              )}
            </Link>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Body;
