import  { useEffect } from "react";
const obj=[]
const UserLocation = (setLocationdata ) => {
 //const [userLocationdata, setLocationdata] = useState({});

  useEffect(() => {
    userlocationGet();
  }, []);

  const userlocationGet = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        const { latitude, longitude } = position.coords;
   
        getData(latitude, longitude);
       
                 obj[0]=`${latitude}`
                 obj[1]=`${longitude}`
      },
      (error) => {
        console.log("NOT ALLOWED BY USER", error);
        
      }
    );
  };

  async function getData(lat, long) {
    //add key 
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=832ae691de22467692362001232608&q=${lat},${long}&aqi=yes`);
    const result = await response.json();
    console.log(result);
    setLocationdata(result)
    
  }

 //console.log(userLocationdata)


};

export function storeLatvalue(){
 
 return obj
}


export default UserLocation;
