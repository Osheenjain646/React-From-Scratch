import { IMAGE_URL } from "../../Utils/API_KEYS";

const RestuarantCardTemplate = (props) => {
    const { resData } = props;
    const { name, cloudinaryImageId, areaName, cuisines, avgRating } = resData.info;
    const { slaString } = resData.info.sla;
    return (
        <div className=" flex flex-col p-4 m-4 w-auto h-auto bg-slate-50 shadow-lg shadow-gray-300 rounded-xl hover:transition-all hover:scale-105 hover:duration-300 overflow-hidden">
            <div className="w-auto h-60 overflow-hidden rounded-lg">
                <img src={IMAGE_URL + cloudinaryImageId} alt="Dish Image" className="w-full h-full object-cover transition-all duration-300" />
            </div>
            <div className="px-4 py-5 flex flex-col flex-nowrap gap-2">
                <h3 className="font-bold text-xl font-Poppins overflow-hidden">{name}</h3>
                <div className="mt-0.5 flex justify-between items-center">
                    <span className="font-bold">⭐ {avgRating}</span>
                    <span className="font-bold">{slaString}</span>
                </div>
                <p className="font-medium truncate">{cuisines.join(", ")}</p>
                <p className="text-gray-500 mt-1 text-lg truncate">{areaName}</p>
            </div>
        </div>
    );
};

export default RestuarantCardTemplate;