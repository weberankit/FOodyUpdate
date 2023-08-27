import  { useEffect } from "react";

const UserLocation = (setLocationdata) => {
 //const [userLocationdata, setLocationdata] = useState({});

  useEffect(() => {
    userlocationGet();
  }, []);

  const userlocationGet = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        const { latitude, longitude } = position.coords;
      //  setLocationdata({ latitude, longitude });
        getData(latitude, longitude);
      },
      (error) => {
        console.log("NOT ALLOWED BY USER", error);
        
      }
    );
  };

  async function getData(lat, long) {
    //add key 
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=yourkey=${lat},${long}&aqi=yes`);
    const result = await response.json();
    console.log(result);
    setLocationdata(result)
    
  }

 //console.log(userLocationdata)


};

export default UserLocation;
