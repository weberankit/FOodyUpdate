import { createContext } from "react";
export const HeaderContext = createContext({
  user: {
    name: "MyKirana",
  },
});
export const displaySearchField=createContext({
  icon:{
    display:false
  },  
})