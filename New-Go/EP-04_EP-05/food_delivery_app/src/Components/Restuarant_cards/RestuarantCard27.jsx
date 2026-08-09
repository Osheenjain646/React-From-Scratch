const RestuarantCard27 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish27.jpg" alt="Steamed Chicken Darjeeling Momos" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Himalayan Momos</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.8 ⭐</span>
                    <span className="distance">2.3 km away</span>
                </div>
                <p className="tag-line">Juicy dumplings served with spicy tomato chutney</p>
            </div>
        </div>
    );
};

export default RestuarantCard27;