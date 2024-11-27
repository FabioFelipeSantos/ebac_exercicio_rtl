import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from "../";

const comentarios = ["Realmente sua miniatura é linda!", "Essa miniatura representa muito bem o carro."];

describe("Teste para o componente PostComment", () => {
	it("Deve renderizar o componente corretamente", () => {
		render(<PostComment />);
		expect(screen.getByText("Comentar")).toBeInTheDocument();
	});

	it("Deve renderizar os comentários 'Realmente sua miniatura é linda!' e 'Essa miniatura representa muito bem o carro.'", () => {
		render(<PostComment />);

		const textInput = screen.getByTestId("text-input");
		const button = screen.getByTestId("btn-enviar-mensagem");

		fireEvent.change(textInput, {
			target: { value: comentarios[0] },
		});
		fireEvent.click(button);
		expect(screen.getByText("Realmente sua miniatura é linda!")).toBeInTheDocument();

		fireEvent.change(textInput, {
			target: { value: comentarios[1] },
		});
		fireEvent.click(button);
		expect(screen.getByText("Essa miniatura representa muito bem o carro.")).toBeInTheDocument();

		expect(screen.getAllByTestId("comentario-item")).toHaveLength(2);
	});
});
