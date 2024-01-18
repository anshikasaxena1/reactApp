import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx"
import RestaurantCard from "./components/RestaurantCard.js";
import Body from "./components/Body.js";







//app component


const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById("first"));


root.render(<AppLayout/>)