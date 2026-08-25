import { useEffect } from "react";

const RestaurantMenu = () => {

    const fetchMenu = async () => {
        const data = await fetch("");
        const jsonData = data.json();
        console.log(jsonData);
    }

    useEffect(()=>{
        fetchMenu();
    },[])

    return (
        <div className="res-menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Dal Makhani</li>
                <li>Poha</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;