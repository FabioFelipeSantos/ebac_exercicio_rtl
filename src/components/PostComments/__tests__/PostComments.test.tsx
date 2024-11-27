import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from "../";

const comentarios = ["Realmente sua miniatura é linda!", "Essa miniatura representa muito bem o carro."];

describe("Teste para o componente PostComment", () => {
	it("Deve renderizar o componente corretamente", () => {
		render(<PostComment />);
		expect(screen.getByText("Comentar")).toBeInTheDocument();
	});

	it("Deve renderizar o comentário 'Realmente sua miniatura é linda!'", () => {
		render(<PostComment />);
		fireEvent.change(screen.getByTestId("text-input"), {
			target: { value: comentarios[0] },
		});
		fireEvent.click(screen.getByTestId("btn-enviar-mensagem"));
		expect(screen.getByText("Realmente sua miniatura é linda!")).toBeInTheDocument();
	});

	it("Deve renderizar o comentário 'Essa miniatura representa muito bem o carro.'", () => {
		render(<PostComment />);
		fireEvent.change(screen.getByTestId("text-input"), {
			target: { value: comentarios[1] },
		});
		fireEvent.click(screen.getByTestId("btn-enviar-mensagem"));
		expect(screen.getByText("Essa miniatura representa muito bem o carro.")).toBeInTheDocument();
	});
});
