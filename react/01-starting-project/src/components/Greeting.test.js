import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a test", () => {
    //Arrange
    render(<Greeting />);

    //Act

    //Assert
    const helloWorldElement = screen.getByText("Hello World");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders Its Good to see you as a test", () => {
    render(<Greeting />);

    const greetingElement = screen.getByText("It's good to see you");
    expect(greetingElement).toBeInTheDocument();
  });
  test("renders 'Changed!' if button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render if button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const hiddenElement = screen.queryByText("It's good to see you", {exact: false});
    expect(hiddenElement).toBeNull();
  });
});
