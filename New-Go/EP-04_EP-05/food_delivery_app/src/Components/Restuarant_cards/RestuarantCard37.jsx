const RestuarantCard37 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish37.jpg" alt="Classic Beef Baked Lasagna" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Mama Mia Lasagna</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.7 ⭐</span>
                    <span className="distance">3.3 km away</span>
                </div>
                <p className="tag-line">Layered pasta with ragù & melted mozzarella</p>
            </div>
        </div>
    );
};

export default RestuarantCard37;