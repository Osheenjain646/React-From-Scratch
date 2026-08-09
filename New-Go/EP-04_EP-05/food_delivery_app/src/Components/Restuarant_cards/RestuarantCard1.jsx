const RestuarantCard1 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish1.jpg" alt="Wood-Fired Margherita" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Pizza Palace</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.7 ⭐</span>
                    <span className="distance">1.2 km away</span>
                </div>
                <p className="tag-line">Authentic Italian crusts & fresh mozzarella</p>
            </div>
        </div>
    );
};

export default RestuarantCard1;