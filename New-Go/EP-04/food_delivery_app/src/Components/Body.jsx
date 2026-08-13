import Restuarant_Search from "./SearchBars/Restuarant_Search";
import { restuarantList } from "./Data/restuarants";
import RestuarantCardTemplate from "./Restuarant_cards/RestuarantCardTemplate";

const Body = () => {
    return (
        <div className="body-container">
            <Restuarant_Search />
            <div className="restuarant-cards">
                {restuarantList.map((restuarant) => (
                    <RestuarantCardTemplate key={restuarant.info.id} resData={restuarant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
