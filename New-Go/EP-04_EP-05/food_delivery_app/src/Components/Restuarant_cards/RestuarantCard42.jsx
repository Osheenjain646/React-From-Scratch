const RestuarantCard42 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish42.jpg" alt="Cheesy Steak Burrito Bowl" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Burrito Bandito</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.4 ⭐</span>
                    <span className="distance">3.0 km away</span>
                </div>
                <p className="tag-line">Overstuffed Mexican burrito with rice & beans</p>
            </div>
        </div>
    );
};

export default RestuarantCard42;