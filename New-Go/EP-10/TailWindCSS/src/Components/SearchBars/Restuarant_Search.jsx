import { useState } from "react";
import applyFilterAndSearch from "../../Utils/applyFilterAndSearch";

const Restuarant_Search = ({ restuarantData, setFilteredRestuarantData }) => {

    const [filterBtn, setFilterBtn] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <>
            <div className=" flex justify-between w-2/5 mx-1 my-0.5 gap-4">
                <input
                    type="text"
                    className="px-0.5 border border-black rounded-md outline-none focus-visible:ring-1 focus-visible:ring-black"
                    placeholder="Search for restuarant..."
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                    }} />
                <button className="border px-1 w-18 rounded-md border-orange-500 font-bold bg-orange-500 text-white hover:bg-white hover:text-orange-500 cursor-pointer hover:transition-all hover:duration-500 hover:scale-105 "
                    onClick={() => {
                        applyFilterAndSearch(searchQuery, filterBtn, restuarantData, setFilteredRestuarantData);
                    }}
                >
                    Search
                </button>
                <button
                    className={`border px-1 w-18 rounded-md border-orange-500 font-bold bg-orange-500 text-white hover:bg-white hover:text-orange-500 cursor-pointer hover:transition-all hover:duration-500 hover:scale-105 ${filterBtn ? "border-red-500" : ""}`}
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