import { useEffect } from "react";
import { Menu } from "../../../shared/components/Menu"
import { Historico } from "../components/Historico";
import { Mensagem } from "../components/Mensagem";
import { socket } from "../../../shared/api/socket";
import { useChatContext } from "../context/ChatHook";

export const Home = () => {
	const { userData } = useChatContext();

	useEffect(() => {
		socket.emit('join-room', userData.contato);

		socket.on('message-chat', (message) => {
      console.log(message);
    });


		return () => {
      socket.disconnect();
    };

	}, [userData]);

    return (
		<div className="flex h-screen">
			<Menu />
			<Historico />
			<Mensagem />
		</div>
		);
}
