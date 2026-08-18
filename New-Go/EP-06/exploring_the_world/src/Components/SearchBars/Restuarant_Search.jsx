import { useState } from "react";

const Restuarant_Search = ({ restuarantData, setFilteredRestuarantData, filteredRestuarantData }) => {

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
                        if (searchQuery !== "") {
                            setFilteredRestuarantData(filteredRestuarantData.filter((res) => {
                                return res.info.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) || res.info.cuisines.some((c) => {
                                    return c.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
                                })
                            }))
                        } else {
                            setFilteredRestuarantData(restuarantData);
                        }
                    }}
                >
                    Search
                </button>
                <button
                    className={`filter-button ${filterBtn ? "active" : ""}`}
                    onClick={() => {
                        if (filterBtn === false) {
                            setFilteredRestuarantData(filteredRestuarantData.filter((restuarant) => restuarant.info.avgRating >= 4.5));
                            setFilterBtn(true);
                        } else {
                            setFilteredRestuarantData(restuarantData.filter((res) => {
                                return res.info.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) || res.info.cuisines.some((c) => {
                                    return c.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
                                })
                            }));
                            setFilterBtn(false);
                        }
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