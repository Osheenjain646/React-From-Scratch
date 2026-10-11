import ItemList from "./ItemList";

const RestaurantMenuAccordian = ({menuAccordions , openIndex ,setOpenIndex}) => {
    return(
        // res-menu-accordians-container
            <div className="space-y-4"> {/* res-menu-accordians-list-container */}
                {menuAccordions.map((accordion, index) => { // res-menu-accordian-categories-mapping
                    const isOpen = index === openIndex; // res-menu-accordian-category-header-active-status (if open) , initially for first accordian is open

                    return (
                        // res-menu-accordian with header having category name and no of dishes , downward arrow if closed , upward arrow if open , onclick it will open and close the accordian
                        // if isOpen then the ul of dish's li is visible
                        <div
                            key={accordion.title + index}
                            className="bg-white border border-gray-100 rounded-2xl shadow-xs overflow-hidden"
                        >
                            <button
                                type="button"
                                className="w-full px-5 py-4 flex justify-between items-center bg-white hover:bg-gray-50/80 transition-colors text-left cursor-pointer select-none"
                                onClick={() => {if(openIndex===index){
                                    setOpenIndex(-1);
                                }else{
                                    setOpenIndex(index);
                                }}}
                            >
                                <span className="text-lg font-bold text-gray-900 tracking-tight">
                                    {accordion.title} ({accordion.itemCards.length})
                                </span>
                                <span className={`text-gray-500 transition-transform duration-200 text-xs font-semibold ${isOpen ? "rotate-180" : ""}`}>
                                    ▼
                                </span>
                            </button>

                            {/* if isOpen is true then the ul will be rensered */}
                            {isOpen && <ItemList accordion={accordion}/>}
                        </div>
                    );
                })}
            </div>
    )
}

export default RestaurantMenuAccordian;