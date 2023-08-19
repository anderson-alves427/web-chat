import { Menu } from "../../../shared/components/Menu"
import { Historico } from "../components/Historico";

export const Home = () => {
    return (
		<div className="flex h-screen">
			<Menu />
			<Historico />
		</div>
		);
}
