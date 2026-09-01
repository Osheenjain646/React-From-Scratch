import Restuarant_Search from "./SearchBars/Restuarant_Search";
import RestuarantCardTemplate from "./Restuarant_cards/RestuarantCardTemplate";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_DATA_URL } from "../Utils/API_KEYS";

const Body = () => {
    const [restuarantData, setReastuarantData] = useState([]);
    const [filteredRestuarantData, setFilteredRestuarantData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(
                RESTAURANT_DATA_URL
            );
            const jsonData = await data.json();
            console.log(jsonData);

            setReastuarantData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestuarantData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        };

        fetchData();
    }, []);

    // Conditional Rendering

    if (restuarantData.length === 0) return (<Shimmer />)

    return (
        <div className="body-container">
            <Restuarant_Search restuarantData={restuarantData} filteredRestuarantData={filteredRestuarantData} setFilteredRestuarantData={setFilteredRestuarantData} />
            <div className="restuarant-cards">
                {filteredRestuarantData.map((restuarant) => (
                    <Link to={"/restuarant/" + restuarant.info.id} key={restuarant.info.id}><RestuarantCardTemplate resData={restuarant} /></Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
