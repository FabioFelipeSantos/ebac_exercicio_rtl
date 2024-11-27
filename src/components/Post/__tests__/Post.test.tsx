import { render, screen } from "@testing-library/react";
import Post from "../../Post";

describe("Teste para o componente PostComment", () => {
	it("Deve renderizar o componente corretamente", () => {
		render(
			<Post
				imageUrl=""
				children={<>Olha só que legal minha miniatura do Batmóvel.</>}
			/>
		);
		expect(screen.getByText("Olha só que legal minha miniatura do Batmóvel.")).toBeInTheDocument();
	});
});
