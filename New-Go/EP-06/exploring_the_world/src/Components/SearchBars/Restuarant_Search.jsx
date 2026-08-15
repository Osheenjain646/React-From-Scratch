import { restuarantList } from "../../Utils/Data/restuarants";

const Restuarant_Search = ({ setReastuarantData }) => {
    return (
        <>
            <div className="Restuarant-search-bar-container">
                <input type="text" className="Restuarant-search-bar" placeholder="Search for restuarant" />
                <button className="filter-button" onClick={() => {
                    setReastuarantData(restuarantList.filter((restuarant) => restuarant.info.avgRating >= 4.5));
                }}> Top Rated Restuarants</button>
                <button className="Restuarant-search-button">Search</button>
            </div>
        </>
    );
};

export default Restuarant_Search;