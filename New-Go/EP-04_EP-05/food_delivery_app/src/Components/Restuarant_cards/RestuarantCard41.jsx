const RestuarantCard41 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish41.jpg" alt="Tandoori Paneer Tikka Platter" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Punjabi Rasoi</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.6 ⭐</span>
                    <span className="distance">2.2 km away</span>
                </div>
                <p className="tag-line">Marinated cottage cheese charred in tandoor</p>
            </div>
        </div>
    );
};

export default RestuarantCard41;