import Restuarant_Search from "./SearchBars/Restuarant_Search";
import RestuarantCard1 from "./Restuarant_cards/RestuarantCard1";
import RestuarantCard2 from "./Restuarant_cards/RestuarantCard2";
import RestuarantCard3 from "./Restuarant_cards/RestuarantCard3";
import RestuarantCard4 from "./Restuarant_cards/RestuarantCard4";
import RestuarantCard5 from "./Restuarant_cards/RestuarantCard5";
import RestuarantCard6 from "./Restuarant_cards/RestuarantCard6";
import RestuarantCard7 from "./Restuarant_cards/RestuarantCard7";
import RestuarantCard8 from "./Restuarant_cards/RestuarantCard8";
import RestuarantCard9 from "./Restuarant_cards/RestuarantCard9";
import RestuarantCard10 from "./Restuarant_cards/RestuarantCard10";
import RestuarantCard11 from "./Restuarant_cards/RestuarantCard11";
import RestuarantCard12 from "./Restuarant_cards/RestuarantCard12";
import RestuarantCard13 from "./Restuarant_cards/RestuarantCard13";
import RestuarantCard14 from "./Restuarant_cards/RestuarantCard14";
import RestuarantCard15 from "./Restuarant_cards/RestuarantCard15";
import RestuarantCard16 from "./Restuarant_cards/RestuarantCard16";
import RestuarantCard17 from "./Restuarant_cards/RestuarantCard17";
import RestuarantCard18 from "./Restuarant_cards/RestuarantCard18";
import RestuarantCard19 from "./Restuarant_cards/RestuarantCard19";
import RestuarantCard20 from "./Restuarant_cards/RestuarantCard20";
import RestuarantCard21 from "./Restuarant_cards/RestuarantCard21";
import RestuarantCard22 from "./Restuarant_cards/RestuarantCard22";
import RestuarantCard23 from "./Restuarant_cards/RestuarantCard23";
import RestuarantCard24 from "./Restuarant_cards/RestuarantCard24";
import RestuarantCard25 from "./Restuarant_cards/RestuarantCard25";
import RestuarantCard26 from "./Restuarant_cards/RestuarantCard26";
import RestuarantCard27 from "./Restuarant_cards/RestuarantCard27";
import RestuarantCard28 from "./Restuarant_cards/RestuarantCard28";
import RestuarantCard29 from "./Restuarant_cards/RestuarantCard29";
import RestuarantCard30 from "./Restuarant_cards/RestuarantCard30";
import RestuarantCard31 from "./Restuarant_cards/RestuarantCard31";
import RestuarantCard32 from "./Restuarant_cards/RestuarantCard32";
import RestuarantCard33 from "./Restuarant_cards/RestuarantCard33";
import RestuarantCard34 from "./Restuarant_cards/RestuarantCard34";
import RestuarantCard35 from "./Restuarant_cards/RestuarantCard35";
import RestuarantCard36 from "./Restuarant_cards/RestuarantCard36";
import RestuarantCard37 from "./Restuarant_cards/RestuarantCard37";
import RestuarantCard38 from "./Restuarant_cards/RestuarantCard38";
import RestuarantCard39 from "./Restuarant_cards/RestuarantCard39";
import RestuarantCard40 from "./Restuarant_cards/RestuarantCard40";
import RestuarantCard41 from "./Restuarant_cards/RestuarantCard41";
import RestuarantCard42 from "./Restuarant_cards/RestuarantCard42";
import RestuarantCard43 from "./Restuarant_cards/RestuarantCard43";
import RestuarantCard44 from "./Restuarant_cards/RestuarantCard44";
import RestuarantCard45 from "./Restuarant_cards/RestuarantCard45";
import RestuarantCard46 from "./Restuarant_cards/RestuarantCard46";
import RestuarantCard47 from "./Restuarant_cards/RestuarantCard47";
import RestuarantCard48 from "./Restuarant_cards/RestuarantCard48";
import RestuarantCard49 from "./Restuarant_cards/RestuarantCard49";
import RestuarantCard50 from "./Restuarant_cards/RestuarantCard50";

const allCards = [
    RestuarantCard1,
    RestuarantCard2,
    RestuarantCard3,
    RestuarantCard4,
    RestuarantCard5,
    RestuarantCard6,
    RestuarantCard7,
    RestuarantCard8,
    RestuarantCard9,
    RestuarantCard10,
    RestuarantCard11,
    RestuarantCard12,
    RestuarantCard13,
    RestuarantCard14,
    RestuarantCard15,
    RestuarantCard16,
    RestuarantCard17,
    RestuarantCard18,
    RestuarantCard19,
    RestuarantCard20,
    RestuarantCard21,
    RestuarantCard22,
    RestuarantCard23,
    RestuarantCard24,
    RestuarantCard25,
    RestuarantCard26,
    RestuarantCard27,
    RestuarantCard28,
    RestuarantCard29,
    RestuarantCard30,
    RestuarantCard31,
    RestuarantCard32,
    RestuarantCard33,
    RestuarantCard34,
    RestuarantCard35,
    RestuarantCard36,
    RestuarantCard37,
    RestuarantCard38,
    RestuarantCard39,
    RestuarantCard40,
    RestuarantCard41,
    RestuarantCard42,
    RestuarantCard43,
    RestuarantCard44,
    RestuarantCard45,
    RestuarantCard46,
    RestuarantCard47,
    RestuarantCard48,
    RestuarantCard49,
    RestuarantCard50
];

// Shuffle cards randomly on render for showing the different cards every time 
const shuffledCards = [...allCards].sort(() => Math.random() - 0.5);

const Body = () => {
    return (
        <div className="body-container">
            <Restuarant_Search />
            <div className="restuarant-cards">
                {shuffledCards.map((CardComponent, index) => (
                    <CardComponent key={index} />
                ))}
            </div>
        </div>
    );
};

export default Body;
