                                                                                                                 


import { useRouteError } from "react-router-dom";
const Error=()=>{

const err= useRouteError();
//console.log(err )

    return(                             
<div className="text-center p-4 m-3 text-pink-400">
<h1 >Oops!!</h1>
<h2 >something went wrong!!</h2>
<p>sorry for your inconvenience if this error is occur than that means either SWIGGY API  once again changes
    you can check my linkedin to see this project OR may be their is netowrk isuue 
</p>
<h2 >{err?.status + err?.statusText}</h2>
</div>
                                   
    );
}; 
export default Error;