import Restuarant_Search from "./SearchBars/Restuarant_Search";
import { restuarantList } from "../Utils/Data/restuarants";
import RestuarantCardTemplate from "./Restuarant_cards/RestuarantCardTemplate";
import { useState } from "react";

const Body = () => {
    const [restuarantData, setReastuarantData] = useState(restuarantList)
    return (
        <div className="body-container">
            <Restuarant_Search setReastuarantData={setReastuarantData}/>
            <div className="restuarant-cards">
                {restuarantData.map((restuarant) => (
                    <RestuarantCardTemplate key={restuarant.info.id} resData={restuarant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
