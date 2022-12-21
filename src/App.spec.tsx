import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("VIACEP", () => {
  it("should fill input", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("digite o cep");

    fireEvent.change(input, { target: { value: "000000000" } });

    expect(input).toHaveValue("000000000");
  });

  it("cep valido deve preencher o formulario com os valores", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText("digite o cep");

    fireEvent.change(input, { target: { value: "82640610" } });
    fireEvent.blur(input, {});

    expect(
      await screen.findByText("Rua Pedro Spisla Filho")
    ).toBeInTheDocument();
  });
});
