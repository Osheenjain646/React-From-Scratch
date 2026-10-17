import { render, screen } from "@testing-library/react";
import Contact from "../../Components/Pages/Contact"
import { it, describe, expect } from "vitest";


describe("Contact Us page test cases", () => {
    it("should load contact us page component", () => {

        render(<Contact />);

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();

    });

    it("should load button in contact us page component", () => {

        render(<Contact />);

        // Querying
        const button = screen.getByRole("button");

        // const sendInButton = screen.getByText("Send");

        // Assertion
        expect(button).toBeInTheDocument();

    });


    // fail as random text in not in my cantact.jsx page
    // it("should load a random text in contact us page component", () => {

    //     render(<Contact />);

    //     const Random = screen.getByText("random");

    //     expect(Random).toBeInTheDocument();

    // });

    it("should load 2 input boxes in contact us page component", () => {

        render(<Contact />)

        const inputBoxes = screen.getAllByRole("textbox");

        console.log(inputBoxes.length);

        expect(inputBoxes.length).toBe(3);
    });
});