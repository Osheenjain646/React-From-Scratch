const RestuarantCard17 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish17.jpg" alt="Classic Shrimp Pad Thai" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Thai Spice Express</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.6 ⭐</span>
                    <span className="distance">2.9 km away</span>
                </div>
                <p className="tag-line">Sweet & tangy stir-fried rice noodles</p>
            </div>
        </div>
    );
};

export default RestuarantCard17;