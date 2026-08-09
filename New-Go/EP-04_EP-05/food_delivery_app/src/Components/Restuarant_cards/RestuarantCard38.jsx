const RestuarantCard38 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish38.jpg" alt="Nutella Strawberry Sweet Crepe" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Parisian Creperie</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.6 ⭐</span>
                    <span className="distance">2.6 km away</span>
                </div>
                <p className="tag-line">Paper-thin French crepes made to order</p>
            </div>
        </div>
    );
};

export default RestuarantCard38;