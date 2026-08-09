const RestuarantCard16 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish16.jpg" alt="Glazed Chocolate Sprinkles" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Donut Paradise</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.4 ⭐</span>
                    <span className="distance">1.4 km away</span>
                </div>
                <p className="tag-line">Soft freshly baked artisan donuts</p>
            </div>
        </div>
    );
};

export default RestuarantCard16;