import Restuarant_Search from "./SearchBars/Restuarant_Search";
import RestuarantCardTemplate from "./Restuarant_cards/RestuarantCardTemplate";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restuarantData, setReastuarantData] = useState([]);
    const [filteredRestuarantData, setFilteredRestuarantData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(
                "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.544004&lng=77.2484095&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const jsonData = await data.json();
            console.log(jsonData);

            setReastuarantData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestuarantData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        };

        fetchData();
    }, []);

    // Conditional Rendering

    return restuarantData.length === 0 ? (<Shimmer />) : (
        <div className="body-container">
            <Restuarant_Search restuarantData={restuarantData} filteredRestuarantData={filteredRestuarantData} setFilteredRestuarantData={setFilteredRestuarantData} />
            <div className="restuarant-cards">
                {filteredRestuarantData.map((restuarant) => (
                    <RestuarantCardTemplate key={restuarant.info.id} resData={restuarant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
