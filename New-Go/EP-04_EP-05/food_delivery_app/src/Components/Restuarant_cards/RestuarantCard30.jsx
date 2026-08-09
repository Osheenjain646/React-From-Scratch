const RestuarantCard30 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish30.jpg" alt="Ultimate Loaded Beef Nachos" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Nacho Libre Mexican</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.4 ⭐</span>
                    <span className="distance">3.2 km away</span>
                </div>
                <p className="tag-line">Melted cheese, guacamole & sour cream</p>
            </div>
        </div>
    );
};

export default RestuarantCard30;