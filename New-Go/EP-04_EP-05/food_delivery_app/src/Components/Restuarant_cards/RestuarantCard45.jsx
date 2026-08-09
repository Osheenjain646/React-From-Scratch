const RestuarantCard45 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish45.jpg" alt="Warm Salted Soft Pretzel" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Bavarian Bakery</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.4 ⭐</span>
                    <span className="distance">2.9 km away</span>
                </div>
                <p className="tag-line">Traditional German pretzels served with mustard</p>
            </div>
        </div>
    );
};

export default RestuarantCard45;