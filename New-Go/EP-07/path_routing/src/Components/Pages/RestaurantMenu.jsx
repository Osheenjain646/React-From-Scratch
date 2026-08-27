import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const [resInfo, setResInfo] = useState(null);


    useEffect(() => {
        const fetchMenu = async () => {
            const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.544004&lng=77.2484095&restaurantId=" + resId);
            const jsonData = await data.json();
            console.log(jsonData);
            setResInfo(jsonData);
        }
        fetchMenu();
    }, [resId]);

    if (resInfo === null) return (<Shimmer />);

    const { name, cuisines, areaName, avgRating, costForTwoMessage, cloudinaryImageId } = resInfo?.data?.cards[2]?.card?.card?.info || {};

    const { cards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR || {};
    const { slaString } = resInfo?.data?.cards[2]?.card?.card?.info?.sla || {};

    return (
        <div className="res-menu">
            <h2>{name}</h2>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/" + cloudinaryImageId} alt={"Domino's Image"} />
            <h4>⭐ {avgRating} • {costForTwoMessage} • {slaString}</h4>
            <h5>{cuisines.join(', ')}</h5>
            <p><h6>Outlet:</h6>{areaName}</p>
            {cards.slice(1).map(cat => <ul key={cat}>
                <h3>{cat.card.card.itemCards.title + "(" + cat.card.card.itemCards.length + ")"}</h3>
                {cat.card.card.itemCards.map(item => <li key={item.card.info.id}>
                    {item.card.info.itemAttribute.vegClassifier === "NONVEG" ? <span className="green-dot"></span> : <span className="red-dot"></span>}
                    <h4>{item.card.info.name}</h4>
                    <h5>{item.card.info.defualtPrice / 100}</h5>
                    <p>{item.card.info.ratings.aggregatedRating.rating}{"(" + item.card.info.ratings.aggregatedRating.ratingCountV2 + ")"}</p>
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + item.card.info.imageId} alt={item.card.info.name} />
                    <p>{item.card.info.description}</p>
                </li>)}
            </ul>)}
        </div>
    );
};

export default RestaurantMenu;