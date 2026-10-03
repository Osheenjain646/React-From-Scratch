import { RESTUARANT_DISH_IMAGE_URL } from "../Utils/API_KEYS";
import useHandleAddItem from "../Utils/useHandleAddItem";


const CartList = ({ items }) => {

    const handleAddItem = useHandleAddItem();

    return (
        <div className="bg-white border border-gray-100 rounded-2xl shadow-xs overflow-hidden">
            <ul className="divide-y divide-gray-100 px-5">
                {items.map((item) => {
                    const info = item?.card?.info;
                    const isVeg = info?.itemAttribute?.vegClassifier !== "NONVEG";
                    const price = (info?.defaultPrice || info?.price || 0) / 100;
                    const rating = info?.ratings?.aggregatedRating?.rating;
                    const ratingCount = info?.ratings?.aggregatedRating?.ratingCountV2;

                    return (
                        <li key={info?.id} className="py-6 flex justify-between items-start gap-6">
                            <div className="flex-1 pr-2">
                                <div className="mb-1.5 flex items-center">
                                    <span className={`w-4 h-4 border-2 rounded-sm flex items-center justify-center ${isVeg ? "border-emerald-600" : "border-rose-600"}`}>
                                        <span className={`w-2 h-2 rounded-full ${isVeg ? "bg-emerald-600" : "bg-rose-600"}`} />
                                    </span>
                                </div>

                                <h3 className="text-base font-bold text-gray-900 tracking-tight leading-snug text-left">
                                    {info?.name}
                                </h3>
                                <p className="text-sm font-semibold text-gray-800 mt-1 text-left">
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
        </div>
    )
}

export default CartList;