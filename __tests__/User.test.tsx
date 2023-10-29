import { render, screen } from "@testing-library/react";
import User from "../components/User";

describe("User Component", () => {
  it("Should have a heading from user component", () => {
    render(<User />); // Arrange
    const myElem = screen.getByRole("heading", {
      name: "User",
    }); //Act
    expect(myElem).toBeInTheDocument(); // Assert
  });
});
