import { Link } from "react-router-dom";
import {  useState,useContext } from "react";
import Restro, { promotedRestro } from "./Restro";
import useBodyfetchingList from "../utils/useBodyfetchingList";
import Search from "./Search";
import { buttonState, displaySearchField} from "../utils/UserContext";
import RestroShimmer from "./ShimmerEffect";
import { storeLatvalue } from "../utils/userLocation";


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
  const{geo ,setgeo} =useContext(buttonState)
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
  const valueLat=storeLatvalue()
  console.log( valueLat[0])
//const [lativalue , setlativalue] =useState("28.7041")
//const [longivalue , setlongivalue] =useState("77.1025")

  useBodyfetchingList(setList, setfilterList ,geo.latino,geo.longino);
 


  

/*
 
*/











if (!list) return <RestroShimmer/>
  
 return   (


  
    <>


    <div className="mx-auto">

   { icon.ico == true? Search(setInputValue ,inputValue,filterOutRestroList,list,setfilterList):""
}

<button className="p-3 ml-16 bg-orange-400 text-center hover:bg-white hover:border  " onClick={()=>{
 // setlativalue(()=>valueLat[0])
 // setlongivalue(()=>valueLat[1])
setgeo({latino:valueLat[0] , longino:valueLat[1]})
//setgeo(()=>valueLat[1])
valueLat.length == 0 && alert("Either your location is denied or swiggy is not avail in your area")

}}>Nearby</button>


      <div className="flex flex-wrap justify-evenly">
        {filterList.length === 0 ? <h1 className="text-center text-2xl">nothing found</h1> : ""}
        {filterList.map((item) => {
          console.log(item)
          return (
            <Link key={item?.info?.id} to={"/restrodetail/" + item?.info?.id}>
              {item?.info?.isOpen == true ? (
                <PromotedList {...item.info }  />
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
