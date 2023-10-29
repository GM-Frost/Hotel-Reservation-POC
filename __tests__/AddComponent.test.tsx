import { render, screen } from "@testing-library/react";
import AddComponent from "../components/AddComponent";

describe("Add Component", () => {
  it("Should have a heading from user component", () => {
    render(<AddComponent />); // Arrange
    const myElem = screen.getByRole("heading", {
      name: "Title",
    }); //Act
    expect(myElem).toBeInTheDocument(); // Assert
  });
});
