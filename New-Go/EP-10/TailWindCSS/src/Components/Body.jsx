import Restuarant_Search from "./SearchBars/Restuarant_Search";
import RestuarantCardTemplate from "./Restuarant_cards/RestuarantCardTemplate";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestuarantData from "../Utils/useRestuarantData";
import useOnlineStatus from "../Utils/useOnlineStatus";
import OfflinePage from "./Pages/OfflinePage";

const Body = () => {

    const [restuarantData, filteredRestuarantData, setFilteredRestuarantData] = useRestuarantData();

    // Conditional Rendering

    const onlineStatus = useOnlineStatus();

    if (!onlineStatus) {
        return (
            <OfflinePage />
        )
    }

    if (restuarantData.length === 0) return (<Shimmer />)

    return (
        <div className="body-container">
            <Restuarant_Search restuarantData={restuarantData} setFilteredRestuarantData={setFilteredRestuarantData} />
            <div className="restuarant-cards">
                {filteredRestuarantData.map((restuarant) => (
                    <Link to={"/restuarant/" + restuarant.info.id} key={restuarant.info.id}><RestuarantCardTemplate resData={restuarant} /></Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
