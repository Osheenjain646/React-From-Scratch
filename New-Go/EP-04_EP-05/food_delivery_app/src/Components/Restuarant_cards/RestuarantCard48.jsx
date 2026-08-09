const RestuarantCard48 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish48.jpg" alt="Traditional Chicken Gyro Wrap" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Greek Gyro Tavern</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.5 ⭐</span>
                    <span className="distance">2.4 km away</span>
                </div>
                <p className="tag-line">Warm pita stuffed with tzatziki & seasoned chicken</p>
            </div>
        </div>
    );
};

export default RestuarantCard48;