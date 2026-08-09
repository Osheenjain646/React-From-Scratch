const RestuarantCard13 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish13.jpg" alt="Special Maharaja Thali" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Grand India Thali</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.6 ⭐</span>
                    <span className="distance">2.7 km away</span>
                </div>
                <p className="tag-line">Wholesome feast of authentic Indian curries</p>
            </div>
        </div>
    );
};

export default RestuarantCard13;