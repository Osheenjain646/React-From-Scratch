import { useState } from "react";

const Restuarant_Search = ({ restuarantData, setFilteredRestuarantData }) => {

    const [filterBtn, setFilterBtn] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const applyFilterAndSearch = (searchQuery, isTopRated) => {
        const result = restuarantData.filter((res) => {
            const matchesSearch =
                searchQuery.toLowerCase().trim() === "" ||
                res.info.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
                res.info.cuisines.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase().trim()));
            const matchesRating = !isTopRated || res.info.avgRating >= 4.5;
            return matchesSearch && matchesRating;
        });
        setFilteredRestuarantData(result);
    };

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
                        applyFilterAndSearch(searchQuery, filterBtn);
                    }}
                >
                    Search
                </button>
                <button
                    className={`filter-button ${filterBtn ? "active" : ""}`}
                    onClick={() => {
                        setFilterBtn(!filterBtn);
                        applyFilterAndSearch(searchQuery, !filterBtn);
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