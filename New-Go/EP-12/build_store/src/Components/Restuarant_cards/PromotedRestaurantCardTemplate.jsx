const PromotedRestaurantCardTemplate = (RestuarantCardTemplate) => {
    return (props) => {
        return (
            <div className="relative hover:scale-105 hover:duration-300">
                <label className="absolute bg-black text-white z-10 top-4 left-4 p-2 rounded-lg font-semibold shadow-md shadow-gray-300 pointer-events-none">
                    Open
                </label>
                <RestuarantCardTemplate {...props} />
            </div>
        )
    }
}

export default PromotedRestaurantCardTemplate;