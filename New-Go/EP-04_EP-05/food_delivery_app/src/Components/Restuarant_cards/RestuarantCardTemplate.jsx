const RestuarantCardTemplate = (props) => {
    const { resData } = props;
    const { name, cloudinaryImageId, areaName, costForTwo, cuisines, avgRating } = resData.info;
    const { slaString } = resData.info.sla;
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="Dish Image" className="dish-img" />
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