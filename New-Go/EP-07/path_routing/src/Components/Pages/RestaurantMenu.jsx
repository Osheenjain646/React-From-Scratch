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
        <div className="res-menu-container">
            <div className="res-menu-header">
                <div className="res-menu-header-info">
                    <h2 className="res-menu-title">{name}</h2>
                    <p className="res-menu-cuisines">{cuisines.join(', ')}</p>
                    <p className="res-menu-area"><strong>Outlet:</strong> {areaName}</p>
                    <div className="res-menu-stats">
                        <span className="res-menu-rating">⭐ {avgRating}</span>
                        <span className="res-menu-cost">{costForTwoMessage}</span>
                        <span className="res-menu-sla">{slaString}</span>
                    </div>
                </div>
                <div className="res-menu-header-img">
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/" + cloudinaryImageId} alt={name} />
                </div>
            </div>

            <div className="res-menu-categories">
                {cards.slice(1).map((cat, index) => {
                    const itemCards = cat?.card?.card?.itemCards || [];
                    const title = cat?.card?.card?.itemCards?.title || "Category";
                    if (itemCards.length === 0) return null;

                    return (
                        <div key={index} className="menu-category">
                            <h3 className="category-title">{title} ({itemCards.length})</h3>
                            <ul className="category-items">
                                {itemCards.map(item => (
                                    <li key={item.card.info.id} className="menu-item-card">
                                        <div className="menu-item-info">
                                            {item.card.info.itemAttribute?.vegClassifier === "NONVEG" ? <span className="nonveg-icon"></span> : <span className="veg-icon"></span>}
                                            <h4 className="item-name">{item.card.info.name}</h4>
                                            <p className="item-price">₹{(item.card.info.defaultPrice || item.card.info.price) / 100}</p>
                                            <p className="item-rating">
                                                ⭐ {item.card.info.ratings.aggregatedRating.rating} ({item.card.info.ratings.aggregatedRating.ratingCountV2})
                                            </p>
                                            <p className="item-desc">{item.card.info.description}</p>
                                        </div>
                                        <div className="menu-item-img-container">
                                            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + item.card.info.imageId} alt={item.card.info.name} className="item-img" />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RestaurantMenu;