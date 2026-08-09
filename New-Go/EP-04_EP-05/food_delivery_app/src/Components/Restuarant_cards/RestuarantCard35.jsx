const RestuarantCard35 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish35.jpg" alt="Butter Poached Lobster Roll" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Maine Lobster Shack</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.9 ⭐</span>
                    <span className="distance">4.8 km away</span>
                </div>
                <p className="tag-line">Fresh coastal lobster on toasted brioche bun</p>
            </div>
        </div>
    );
};

export default RestuarantCard35;