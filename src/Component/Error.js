                                                                                                                 


import { useRouteError } from "react-router-dom";
const Error=()=>{

const err= useRouteError();
//console.log(err )

    return(                             
<div className="text-center p-4 m-3 text-black-400">
<h1 >Oops!!</h1>
<h2 >something went wrong!!</h2>
<h3>Sometimes API does not support phones</h3>
<p>sorry for your inconvenience if this error is occur than that means either SWIGGY API  once again changes
    <p> may be their is network isuue </p>
  <p>  you can check my linkedin to see this project OR linkedin post link  https://www.linkedin.com/posts/ankitkrs_activity-7103294244844371969-L9aT?utm_source=share&utm_medium=member_desktop
</p>
</p>
<h2 >Error:{err?.status + err?.statusText}</h2>
</div>
                                   
    );
}; 
export default Error;