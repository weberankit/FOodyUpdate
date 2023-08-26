import { useState, useEffect } from "react";
import { Menu_Api_Url } from "../Component/constant";
const useRestrodeatilFetching = (id) => {
  const [mainItem, setMainItem] = useState(null);
  useEffect(() => {
    togetRestroDetail();
  }, []);

  async function togetRestroDetail() {
    try {
      const callApi = await fetch(Menu_Api_Url + id);
      const json = await callApi.json();
      // console.log(json)
      setMainItem(json.data);
    } catch (error) {
       console.error("fetching issue",error)
    }
  }
  return mainItem;
};

export default useRestrodeatilFetching;
