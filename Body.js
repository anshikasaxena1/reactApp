import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../../utils/restaurantData";
const Body=()=>{
    //local state variable - supe powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    useEffect(()=>{
        fetchData();

    }, []);

    const fetchData = async()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4506465&lng=77.5841978&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json=await data.json();
        console.log(json);
    };


    return(
        <div className="body">
            <div className="filter">
            <button className="filter-btn" 
            onClick={()=>{
                const filteredList=listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4.2
                    );
                    setListOfRestaurants(filteredList); 
            }}>
                Top Rated Restaurant</button>
            </div>
            <div className="rest-container">
            {
                listOfRestaurants.map((restaurant)=>(
                   
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))
            }
            </div>

        </div>
    )
}

export default Body;
C:\Users\Dell\Desktop\react_project\src\components\Body.js