const RestuarantCard31 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish31.jpg" alt="Traditional Beef Pho Soup" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Hanoi Pho House</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.7 ⭐</span>
                    <span className="distance">2.8 km away</span>
                </div>
                <p className="tag-line">Warm comforting Vietnamese noodle soup</p>
            </div>
        </div>
    );
};

export default RestuarantCard31;