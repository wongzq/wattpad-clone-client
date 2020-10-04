import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  beforeEach(() => render(<App />));

  it("renders 'wattpad' anywhere in the document", () => {
    const wattpadTexts = screen.getAllByText(/wattpad/i);
    for (const wattpadText of wattpadTexts) {
      expect(wattpadText).toBeInTheDocument();
    }
  });
});
