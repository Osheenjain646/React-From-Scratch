const RestuarantCard14 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish14.jpg" alt="Triple-Decker Club Sandwich" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Deli Sandwich Club</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.3 ⭐</span>
                    <span className="distance">1.1 km away</span>
                </div>
                <p className="tag-line">Stacked with fresh cold cuts & cheddar</p>
            </div>
        </div>
    );
};

export default RestuarantCard14;