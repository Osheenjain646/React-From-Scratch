import { RESTUARANT_IMAGE_URL } from "../Utils/API_KEYS";

const RestaurantMenuHeader = ({ name, areaName, cloudinaryImageId, costForTwoMessage, cuisines, slaString, avgRating }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm mb-8"> {/* res-menu-header */}
            <div className="flex justify-between items-start gap-4">{/* res-menu-info-card */}
                <div className="flex-1">{/* res-menu-info with name , cuisines , outlet name , delivery-time ,  */}
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{name}</h1>
                    <p className="text-sm font-medium text-gray-500 mt-1">{cuisines?.join(', ')}</p>
                    <p className="text-xs text-gray-500 mt-1">
                        <span className="font-semibold text-gray-700">Outlet:</span> {areaName}
                    </p>
                    {slaString && (
                        <p className="text-xs text-gray-500 mt-0.5">
                            <span className="font-semibold text-gray-700">Delivery:</span> {slaString}
                        </p>
                    )}

                    {/* res-menu-info-card with rating and cost for two */}
                    <div className="flex items-center gap-4 mt-4 pt-3 border-t border-dashed border-gray-200 text-sm">
                        <div className="flex items-center gap-1 font-semibold text-gray-900">
                            <span className="inline-flex items-center justify-center bg-emerald-600 text-white text-xs px-1.5 py-0.5 rounded font-bold">
                                ★ {avgRating || "4.2"}
                            </span>
                        </div>
                        <span className="font-semibold text-gray-800">{costForTwoMessage}</span>
                    </div>
                </div>

                {/* res-menu-info-card-image-container */}
                {cloudinaryImageId && (
                    <div className="w-28 h-28 shrink-0 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                        <img
                            src={RESTUARANT_IMAGE_URL + cloudinaryImageId}
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default RestaurantMenuHeader;