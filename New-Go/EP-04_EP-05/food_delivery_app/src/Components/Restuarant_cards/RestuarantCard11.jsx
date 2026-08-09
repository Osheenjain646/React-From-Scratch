const RestuarantCard11 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish11.jpg" alt="Maple Syrup Berry Pancakes" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Fluffy Pancakes Corner</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.7 ⭐</span>
                    <span className="distance">2.2 km away</span>
                </div>
                <p className="tag-line">Sweet morning delights & whipped cream</p>
            </div>
        </div>
    );
};

export default RestuarantCard11;