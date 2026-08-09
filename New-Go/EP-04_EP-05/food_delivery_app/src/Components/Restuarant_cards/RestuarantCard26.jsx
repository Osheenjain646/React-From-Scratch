const RestuarantCard26 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish26.jpg" alt="Smokey Honey Glazed Ribs" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Texas Smokehouse BBQ</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.7 ⭐</span>
                    <span className="distance">3.7 km away</span>
                </div>
                <p className="tag-line">Slow smoked for 14 hours over hickory wood</p>
            </div>
        </div>
    );
};

export default RestuarantCard26;