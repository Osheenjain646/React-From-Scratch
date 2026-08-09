const RestuarantCard2 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish2.jpg" alt="Smokey Bacon Cheeseburger" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Burger Junction</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.5 ⭐</span>
                    <span className="distance">2.4 km away</span>
                </div>
                <p className="tag-line">Juicy handcrafted gourmet burgers</p>
            </div>
        </div>
    );
};

export default RestuarantCard2;