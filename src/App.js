import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import "../index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Component/Error";
import Body from "./Component/Body";
import Restrodetail from "./Component/Restrodetail";
import { HeaderContext ,displaySearchField } from "./utils/UserContext";
import { useContext } from "react";
import { Provider } from "react-redux";
import myAppStore from "./utils/myappStorage";
//import Search from "./Component/Search";
import '@fortawesome/fontawesome-free/css/all.css';






const MyBag = lazy(() => import("./Component/Mybag"));
const About = lazy(() => import("./Component/About"));







const Applayout = () => {













  //calling default value usecontext
  const { user } = useContext(HeaderContext);
  //search
  const {icon} = useContext(displaySearchField)
  //setting default value and setShopNmae for updating
  const [users, setShopName] = useState({ name: user.name });
  //for user login we can set value by using setSopname

  //for aearch
 // console.log(icon.display)
  const [ico, setIco] = useState({ icons: icon.display });
 // console.log(ico)

  return (
    <Provider store={myAppStore}>
      <HeaderContext.Provider value={{ user: users, setShopName }}>
      <displaySearchField.Provider value={{ icon:ico , setIco}}> 
        <Header />
        <Outlet />
        </displaySearchField.Provider>
      </HeaderContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      




      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>loading</h1>}>
            {" "}
            <About />{" "}
          </Suspense>
        ),
      },
      {
        path: "/Mybag",
        element: (
          <Suspense fallback={<h1>loading</h1>}>
            <MyBag />
          </Suspense>
        ),
      },
      {
        path: "/restrodetail/:id",
        element: <Restrodetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Applayout/>)
root.render(<RouterProvider router={appRouter} />);
