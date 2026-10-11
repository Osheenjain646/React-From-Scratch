import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import Header from "../../Components/Header";
import { Provider } from "react-redux";
import ReduxStore from "../../Utils/ReduxStore"


describe("Header Component", () => {
    it("Should render the Header Component with a Login Button", () => {
        render(
            <BrowserRouter>
                <Provider store={ReduxStore}>
                    <Header></Header>
                </Provider>
            </BrowserRouter>
        );
        const loginButton = screen.getByRole("button", { name: /login/i });
        expect(loginButton).toBeInTheDocument();
    });
});
