import { Menu } from "../../../shared/components/Menu"
import { Historico } from "../components/Historico";
import { Mensagem } from "../components/Mensagem";

export const Home = () => {
    return (
		<div className="flex h-screen">
			<Menu />
			<Historico />
			<Mensagem />
		</div>
		);
}
