const RestuarantCard49 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish49.jpg" alt="Pistachio Sicilian Gelato" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Artisan Gelato Lab</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.9 ⭐</span>
                    <span className="distance">1.8 km away</span>
                </div>
                <p className="tag-line">Authentic dense Italian ice cream made daily</p>
            </div>
        </div>
    );
};

export default RestuarantCard49;