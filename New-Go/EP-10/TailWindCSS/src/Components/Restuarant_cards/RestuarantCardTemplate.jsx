import { IMAGE_URL } from "../../Utils/API_KEYS";

const RestuarantCardTemplate = (props) => {
    const { resData } = props;
    const { name, cloudinaryImageId, areaName, cuisines, avgRating } = resData.info;
    const { slaString } = resData.info.sla;
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src={IMAGE_URL + cloudinaryImageId} alt="Dish Image" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">{name}</h3>
                <div className="rating-distance-container">
                    <span className="rating">⭐ {avgRating}</span>
                    <span className="distance">{slaString}</span>
                </div>
                <p className="cuisines">{cuisines.join(", ")}</p>
                <p className="area-Name">{areaName}</p>
            </div>
        </div>
    );
};

export default RestuarantCardTemplate;