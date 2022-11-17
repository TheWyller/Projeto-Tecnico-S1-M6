import React from "react";
import { render, screen } from "@testing-library/react";
import { Input } from "../../components/Input";

describe("Input Component", () => {
  it("should be able to render an input", () => {
    render(
      <Input
        label=""
        name=""
        placeholder="Email"
        error=""
        register={() => {}}
      />
    );
    expect(screen.getByPlaceholderText("Email")).toBeTruthy();
  });

  it("should be able to render an error", () => {
    render(
      <Input
        label=""
        name=""
        placeholder=""
        error="Teste_error"
        register={() => {}}
      />
    );
    const error = screen.getByText(/Teste_error/);
    expect(error).toBeInTheDocument();
  });

  it("should be able to render an Label", () => {
    render(
      <Input
        label="Teste_label"
        name=""
        placeholder=""
        error=""
        register={() => {}}
      />
    );
    const label = screen.getByText(/Teste_label/);
    expect(label).toBeInTheDocument();
  });
});
