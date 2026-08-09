const RestuarantCard21 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish21.jpg" alt="Strawberry Glaze Cheesecake" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">New York Cheesecake Co.</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.9 ⭐</span>
                    <span className="distance">3.0 km away</span>
                </div>
                <p className="tag-line">Rich creamy classic NY style slices</p>
            </div>
        </div>
    );
};

export default RestuarantCard21;