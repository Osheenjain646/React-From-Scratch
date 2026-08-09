const RestuarantCard15 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish15.jpg" alt="Steamed Crystal Shrimp Dumplings" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Dim Sum Delight</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.7 ⭐</span>
                    <span className="distance">3.8 km away</span>
                </div>
                <p className="tag-line">Authentic Cantonese bamboo steamer dim sum</p>
            </div>
        </div>
    );
};

export default RestuarantCard15;