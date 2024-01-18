

const RestaurantCard=(props)=>{
   const {resData}=props;
//destructuring the above method

//optional chaining
const {cloudinaryImageId,name,cuisines,avgRating, costForTwo }= resData?.info;
const {deliveryTime }= resData?.info.sla;
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="img" alt="dish image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo}</h5>
            <h5>{deliveryTime} mins </h5>

        </div>
    )
};

export default RestaurantCard;