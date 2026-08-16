import Restuarant_Search from "./SearchBars/Restuarant_Search";
import RestuarantCardTemplate from "./Restuarant_cards/RestuarantCardTemplate";
import { useEffect, useState } from "react";

const Body = () => {
    const [restuarantData, setReastuarantData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.544004&lng=77.2484095&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const jsonData = await data.json();
            console.log(jsonData);

            setReastuarantData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restuarants);
        };

        fetchData();
    }, []);

    return (
        <div className="body-container">
            <Restuarant_Search setReastuarantData={setReastuarantData} />
            <div className="restuarant-cards">
                {restuarantData.map((restuarant) => (
                    <RestuarantCardTemplate key={restuarant?.info?.id} resData={restuarant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
