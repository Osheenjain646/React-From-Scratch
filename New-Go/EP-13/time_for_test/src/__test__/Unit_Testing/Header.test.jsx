import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ReduxStore from "../../Utils/ReduxStore";
import Header from "../../Components/Header";

it("Should load header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={ReduxStore}>
                <Header></Header>
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", { name: "Login" });

    expect(loginButton).toBeInTheDocument();
});

it("Should load header component with a cart having 0 items in the start", () => {
    render(
        <BrowserRouter>
            <Provider store={ReduxStore}>
                <Header></Header>
            </Provider>
        </BrowserRouter>
    )

    const cartItem = screen.getByText(/0/);

    expect(cartItem).toBeInTheDocument();
});

it("Should load header component with a cart item or not using regex", () => {
    render(
        <BrowserRouter>
            <Provider store={ReduxStore}>
                <Header></Header>
            </Provider>
        </BrowserRouter>
    )

    const Cart = screen.getByText(/Cart/i);

    expect(Cart).toBeInTheDocument();
});

// Checking the status of the button text having name is changed or not
// it is an event handling test case.
it("should change login button to logout and vice-versa on clicking the button", () => {
    render(
        <BrowserRouter>
            <Provider store={ReduxStore}>
                <Header></Header>
            </Provider>
        </BrowserRouter>
    )

    const LoginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(LoginButton);

    const LogOutButton = screen.getByRole("button", { name: "LogOut" });

    expect(LogOutButton).toBeInTheDocument();
});