const RestuarantCard32 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish32.jpg" alt="Classic Chili Cheese Dog" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">New York Hot Dog Cart</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.2 ⭐</span>
                    <span className="distance">0.7 km away</span>
                </div>
                <p className="tag-line">Iconic street style hot dogs with mustard</p>
            </div>
        </div>
    );
};

export default RestuarantCard32;