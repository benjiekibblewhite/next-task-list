import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { EmptyState } from "../components/EmptyState/EmptyState";
import { Mood } from "@mui/icons-material";

describe("Empty State Component", () => {
  it("renders the provided content", () => {
    const text = "title";
    render(<EmptyState text={text} Icon={<Mood data-testid="mood-icon" />} />);
    const heading = screen.getByText(text);
    const icon = screen.getByTestId("mood-icon");
    expect(heading).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
});
