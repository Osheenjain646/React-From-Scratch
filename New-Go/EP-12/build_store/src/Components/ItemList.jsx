import { RESTUARANT_DISH_IMAGE_URL } from "../Utils/API_KEYS";
import useHandleAddItem from "../Utils/useHandleAddItem";

const ItemList = ({accordion}) => {

    const handleAddItem = useHandleAddItem();

    return (
        // ul list of dishes
        <ul className="divide-y divide-gray-100 px-5">
            {/* mapping the itemcards of the accordian */}
            {accordion.itemCards.map((item) => {
                const info = item?.card?.info;
                const isVeg = info?.itemAttribute?.vegClassifier !== "NONVEG";
                const price = (info?.defaultPrice || info?.price || 0) / 100;
                const rating = info?.ratings?.aggregatedRating?.rating;
                const ratingCount = info?.ratings?.aggregatedRating?.ratingCountV2;

                {/* rendering the li of dishes in the current itemcard of the ul */ }
                return (
                    <li key={info?.id} className="py-6 flex justify-between items-start gap-6">
                        {/* left side info of the dish of the li with vegclassifier , name , price , rating and description */}
                        <div className="flex-1 pr-2">
                            <div className="mb-1.5 flex items-center">
                                <span className={`w-4 h-4 border-2 rounded-sm flex items-center justify-center ${isVeg ? "border-emerald-600" : "border-rose-600"}`}>
                                    <span className={`w-2 h-2 rounded-full ${isVeg ? "bg-emerald-600" : "bg-rose-600"}`} />
                                </span>
                            </div>

                            <h3 className="text-base font-bold text-gray-900 tracking-tight leading-snug">
                                {info?.name}
                            </h3>
                            <p className="text-sm font-semibold text-gray-800 mt-1">
                                ₹{price}
                            </p>

                            {rating && (
                                <div className="flex items-center gap-1 mt-1 text-xs font-semibold text-emerald-700">
                                    <span>★ {rating}</span>
                                    {ratingCount && (
                                        <span className="text-gray-400 font-normal">({ratingCount})</span>
                                    )}
                                </div>
                            )}

                            {info?.description && (
                                <p className="text-xs text-gray-500 line-clamp-2 mt-2 leading-relaxed">
                                    {info?.description}
                                </p>
                            )}
                        </div>

                        {/* right side info of the dish li with dish image and a add button just like to add the item in the cart  */}
                        <div className="relative w-32 h-28 shrink-0 flex flex-col items-center">
                            {info?.imageId ? (
                                <img
                                    src={RESTUARANT_DISH_IMAGE_URL + info?.imageId}
                                    alt={info?.name}
                                    className="w-full h-24 object-cover rounded-xl shadow-xs"
                                />
                            ) : (
                                <div className="w-full h-24 bg-gray-100 rounded-xl flex items-center justify-center text-xs text-gray-400">
                                    No Image
                                </div>
                            )}

                            <button
                                type="button"
                                className="absolute -bottom-2 bg-white text-emerald-600 border border-gray-200 hover:bg-gray-50 text-xs font-black uppercase px-6 py-1.5 rounded-lg shadow-md cursor-pointer transition-all active:scale-95 tracking-wide"
                                onClick={() => handleAddItem(item)}
                            >
                                ADD
                            </button>
                        </div>
                    </li>
                );
            })}
        </ul>
    )
}

export default ItemList;