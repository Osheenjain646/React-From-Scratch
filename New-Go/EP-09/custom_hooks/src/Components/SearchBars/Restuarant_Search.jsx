import { useState } from "react";
import applyFilterAndSearch from "../../Utils/applyFilterAndSearch";

const Restuarant_Search = ({ restuarantData, setFilteredRestuarantData }) => {

    const [filterBtn, setFilterBtn] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <>
            <div className="Restuarant-search-bar-container">
                <input
                    type="text"
                    className="Restuarant-search-bar"
                    placeholder="Search for restuarant..."
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                    }} />
                <button className="Restuarant-search-button"
                    onClick={() => {
                        applyFilterAndSearch(searchQuery, filterBtn, restuarantData, setFilteredRestuarantData);
                    }}
                >
                    Search
                </button>
                <button
                    className={`filter-button ${filterBtn ? "active" : ""}`}
                    onClick={() => {
                        setFilterBtn(!filterBtn);
                        applyFilterAndSearch(searchQuery, !filterBtn, restuarantData, setFilteredRestuarantData);
                    }}
                >
                    <span className="filter-icon">⭐</span>
                    {filterBtn ? "Top Rated (4.5+) ✕" : "Top Rated Restaurants"}
                </button>
            </div>
        </>
    );
};

export default Restuarant_Search;