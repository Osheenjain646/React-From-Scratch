import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer";
import useRestuarantMenu from "../../Utils/useRestuarantMenu";
import RestaurantMenuHeader from "../RestaurantMenuHeader";
import RestaurantMenuAccordian from "../RestaurantMenuAccordian";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const [openIndex, setOpenIndex] = useState(0);

    const resInfo = useRestuarantMenu(resId);

    if (resInfo === null) return (<Shimmer />);

    const { name, cuisines, areaName, avgRating, costForTwoMessage, cloudinaryImageId } = resInfo?.data?.cards[2]?.card?.card?.info || {};

    const Cards = resInfo?.data?.cards?.find(c => c?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    const { slaString } = resInfo?.data?.cards[2]?.card?.card?.info?.sla || {};

    {/* filtering the itemcards in for different accordians and using the flatmap to get the nested itemcards in nested item 
        category card in categories to be map in one */}

    const menuAccordions = Cards.flatMap((cat) => {
        const cardData = cat?.card?.card;
        const type = cardData?.['@type'];

        if (type === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
            return [{
                title: cardData?.title || "",
                itemCards: cardData?.itemCards || []
            }];
        }

        if (type === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory") {
            return (cardData?.categories || []).map((subCat) => ({
                title: subCat?.title || "",
                itemCards: subCat?.itemCards || []
            }));
        }

        return [];
    }).filter(acc => acc.itemCards.length > 0);

    return (
        <div className="max-w-200 mx-auto my-8 px-4 font-sans text-gray-800"> {/* res-menu-page-container */}
            <RestaurantMenuHeader name={name} cuisines={cuisines} areaName={areaName} avgRating={avgRating} costForTwoMessage={costForTwoMessage} cloudinaryImageId={cloudinaryImageId} slaString={slaString} />

            <RestaurantMenuAccordian menuAccordions={menuAccordions} openIndex={openIndex} setOpenIndex={setOpenIndex}/>
        </div>
    );
};

export default RestaurantMenu;