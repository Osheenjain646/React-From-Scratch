import RestuarantCardTemplate from "../../Components/Restuarant_cards/RestuarantCardTemplate";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../../Utils/Test_Mock_Data/RestuarantMOCK_DATA.json";
import PromotedRestuarantCardTemplate from "../../Components/Restuarant_cards/PromotedRestaurantCardTemplate";
import { it, expect } from "vitest"

it("should render the restuarant card component with props data", () => {
    render(<RestuarantCardTemplate resData={MOCK_DATA}></RestuarantCardTemplate>);

    const name = screen.getByText("Delhi Haveli");

    expect(name).toBeInTheDocument();
});

// HW
it("Should render the restuarant card component with with a promoted label", () => {
    const PromotedCard = PromotedRestuarantCardTemplate(RestuarantCardTemplate);

    render(
        <PromotedCard resData={MOCK_DATA}></PromotedCard>
    );

    const Label = screen.getByText("Open");

    expect(Label).toBeInTheDocument();
});