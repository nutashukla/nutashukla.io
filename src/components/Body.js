import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./config"; 
import { useEffect, useState} from "react"
import Shimmer from "./Shimmer";

function filterData(searchTest, allRestaurant){
  const filterData = allRestaurants.filter((restaurant) => 
  restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = ()=> {

function filterData(searchTest, allRestaurant){
    return allRestaurants.filter((restaurant) => 
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
  }
  
  const [searchText, setSearchText] = useState("")
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  useEffect(()=>{
    getRestaurants();
  },[]);

  async function getRestaurants() {
    const data = await fetch(
      //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2955992&lng=82.98228960000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.48699959666544&lng=80.27419913560152&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4966095&lng=77.3987876&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"

    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
    if (!allRestaurants) return null;
    if(filteredRestaurants?.length === 0) return <h1>No Restaurant Found</h1>
     return allRestaurants.length === 0 ? (<Shimmer/> ): (
      <>
      <input 
      type = "text" 
      placeholder="search" 
      className="search-box"
      value = {searchText}
      onChange = {(e) => {
      setSearchText(e.target.value);
      }}
      />
      <button onClick = {()=>{
          const data = filterData(searchText, allRestaurants);
          setFilteredRestaurants(data);

        }}>
          Search
          </button>
     <div className='resturnt-list'>
      {filteredRestaurants.map((restaurant, index) => <RestaurantCard {...restaurant.info} key = {index}/>)}
     </div>
     </>
     );
 }

 export default Body;