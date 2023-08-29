import { useEffect } from "react";
import { Menu } from "../../../shared/components/Menu"
import { Historico } from "../components/Historico";
import { Mensagem } from "../components/Mensagem";
import { socket } from "../../../shared/api/socket";

export const Home = () => {

	useEffect(() => {
			socket.on('teste', () => {
				console.log('----')
			});
			// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);
    return (
		<div className="flex h-screen">
			<Menu />
			<Historico />
			<Mensagem />
		</div>
		);
}
