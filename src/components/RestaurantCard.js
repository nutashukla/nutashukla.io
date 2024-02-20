import { restaurantList } from "./config";
import { IMG_Link } from "./config";

    const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating}) => {
    return (
      <div className="card">
         <img src = {IMG_Link + cloudinaryImageId}/>
         <h2>{name}</h2>
         <h3>{cuisines}</h3>
         <h3>{avgRating} Stars</h3>
      </div>
    );
   }

   export default RestaurantCard;