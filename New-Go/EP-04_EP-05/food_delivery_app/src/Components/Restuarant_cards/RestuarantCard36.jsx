const RestuarantCard36 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish36.jpg" alt="Cinnamon Sugar Churros with Chocolate" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Churro Lovers</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.5 ⭐</span>
                    <span className="distance">2.0 km away</span>
                </div>
                <p className="tag-line">Crispy Spanish fried dough dipped in dark chocolate</p>
            </div>
        </div>
    );
};

export default RestuarantCard36;