import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SmartRating from "../SmartRating";

describe("Button component", () => {
  it("Button should render correctly", () => {
    render(<SmartRating testIdPrefix="smart-rating-test-id" theme="primary" />);
    // const button = screen.getByRole("button");
    // expect(button).toBeInTheDocument();
    const buttons = screen.getAllByRole("button");
    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
});
