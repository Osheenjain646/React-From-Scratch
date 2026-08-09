const RestuarantCard20 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish20.jpg" alt="Sizzling Lamb Seekh Kebab" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Istanbul Kebabs</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.7 ⭐</span>
                    <span className="distance">2.1 km away</span>
                </div>
                <p className="tag-line">Charcoal-grilled Middle Eastern delicacies</p>
            </div>
        </div>
    );
};

export default RestuarantCard20;