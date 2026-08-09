const RestuarantCard3 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish3.jpg" alt="Dragon Roll Platter" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Sakura Sushi</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.8 ⭐</span>
                    <span className="distance">3.1 km away</span>
                </div>
                <p className="tag-line">Fresh ocean catch & traditional rolls</p>
            </div>
        </div>
    );
};

export default RestuarantCard3;