const RestuarantCard29 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish29.jpg" alt="Butter Chicken with Garlic Naan" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Curry Leaf Kitchen</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.9 ⭐</span>
                    <span className="distance">2.5 km away</span>
                </div>
                <p className="tag-line">Velvety tomato gravy with tender chicken</p>
            </div>
        </div>
    );
};

export default RestuarantCard29;