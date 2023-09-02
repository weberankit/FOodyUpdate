import { createContext } from "react";
import { storeLatvalue } from "./userLocation";
const storeValue=storeLatvalue()
//export const HeaderContext = createContext({
 // user: {
 //   name: "MyKirana",
 // },
//});
export const displaySearchField=createContext({
  icon:{
    display:false
  },  
})


export const buttonState= createContext({

  values:{
    latSate:"28.7041",
    longState:"77.1025"
  }
})