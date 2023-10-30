import Addbutton from "@/components/Addbutton";
import { screen, render } from "@testing-library/react";

describe("AddButton", () => {
  test("should render the AddButton component", () => {
    render(<Addbutton />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
