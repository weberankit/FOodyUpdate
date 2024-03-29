import { Link ,useLocation } from "react-router-dom";
import Status from "../utils/useOnlineStatus";
import {displaySearchField} from "../utils/UserContext";
import { useContext , useState } from "react";
import { useSelector } from "react-redux";
import userLocation from "../utils/userLocation";
const Header = () => {
  const online = Status();

  const {icon,setIco} = useContext(displaySearchField);
 console.log(icon)
  const cartItemNo = useSelector((store) => store.cart.item);

   const currentLocation=useLocation();

   
const [display , setDisplay] = useState(false)

const [userInfolocation ,setUserInfolocation] = useState()

 userLocation(setUserInfolocation)
  console.log(userInfolocation)
  return (
    <>
      
  
  <div className="border-b-2 border-slate-400" >
       
   <div className=" md:hidden p-3" onClick={()=>{setDisplay(!display)}}>   <i className="fa-solid fa-bars"></i></div>
       

   <div className={` ${display === false ? "hidden" : "block"}  navbar p-4  md:flex md:justify-between `}>
        <div className="nav-logo  flex">

       
         
            <div className="  flex items-center text-4xl font-extrabold text-red-500 drop-shadow-md shadow-red-500/50">
              
              <div className="text-2xl px-1 text-black">
                <i className="fa-solid fa-utensils"></i>
                </div>
               <div> MyKhana</div> 
              <div className="p-1 mt-4 text-green-300 text-sm">
                {online == true ? <i className="fa-solid fa-circle"></i> : "offline"}
              </div>
             </div>

          </div >
          <div className="flex font-bold items-center" > {userInfolocation !== undefined ? <div>{userInfolocation?.location?.name}  <span className="text-slate-400"> {userInfolocation?.location?.region}</span></div>:"location denied" }</div>
       
          

       <div className="nav-links md:flex font-semibold">
         <ul className="p-2 md:flex md:space-x-20  ">
           <Link to="/">
             <li className="hover:text-red-500 ">{currentLocation.pathname == "/"?<h1 className="text-red-500">Home</h1>:<h1>Home</h1>}</li>
           
           </Link>
          
            {
        
            }
         <li onClick={()=>{setIco({ico:true})}} className="cursor-pointer  md:border-b-2"  >
          search
          
          </li>


            <Link to="/About">
              <li className="hover:text-red-500">{currentLocation.pathname == "/About"?<h1 className="text-red-500">About</h1>:<h1>About</h1>}</li>
            </Link>

            <Link to="/Mybag">
              <li className=" hover:text-red-500">
              {currentLocation.pathname == "/Mybag"?<h1 className="text-red-500">MyCart (<span className="text-red-400">{cartItemNo?.length}</span>)</h1>:
             <h1> MyCart (<span className="text-red-400">{cartItemNo?.length}</span>)</h1>
              }</li>
                
            </Link>
          </ul>
        </div>

        <div className="login-system p-2">Login</div>
  
      </div>
</div>

    </>
  );
};
export default Header;
