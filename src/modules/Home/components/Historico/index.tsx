import { GoSearch } from "react-icons/go";
import { useChatContext } from "../../context/ChatHook";
import { Avatar, AvatarFallback, AvatarImage } from "../../../../shared/components/ui/avatar";
import { IHistoricoMensagens } from "../../context/ChatContext";
import { useEffect } from "react";
import { socket } from "../../../../shared/api/socket";
import { IMessagesChat } from "../../interfaces/IMessagesChat";

export const Historico = () => {
	const {  historicoMensagens, setSelectedMessage, userData, sethistoricoMensagens } = useChatContext();

	const handleClick = (item: IHistoricoMensagens) => {
		setSelectedMessage(item);
	}

	const addMessage = () => {
		socket.on('message-chat', (message: IMessagesChat) => {

			sethistoricoMensagens((prevState) => {
				const indexMessage = prevState.findIndex(item => item.id === message.id_pessoa_destinatario);

				if (indexMessage === -1) {
					const params: IHistoricoMensagens = {
						avatar: 'https://github.com/shadcn.png',
						id: message.id_pessoa_destinatario,
						contato: message.id_pessoa_destinatario,
						nome_pessoa: message.nome_destinatario,
						notificacao: 1,
						messages: [{
							id_pessoa: message.id_pessoa_destinatario,
							data: message.data,
							mensagem: message.message,
							nome_pessoa: message.nome_destinatario
						}]
					}
					return [...[params], ...prevState];
				} else {
					const mensagens = prevState.map((item, index) => {
						if (indexMessage === index) {
							return {
								avatar: item.avatar,
								id: item.id,
								contato: item.contato,
								nome_pessoa: item.nome_pessoa,
								notificacao: item.notificacao,
								messages: [
									...item.messages,
									...
									[{
									id_pessoa: message.id_pessoa_destinatario,
									data: message.data,
									mensagem: message.message,
									nome_pessoa: message.nome_destinatario
									}]
								]
							}
						} else {
							return item;
						}
					})
					return mensagens;
				}

			});
		});
	}

	useEffect(() => {
		setSelectedMessage(prevState => {
			const indexMessageSelected = historicoMensagens.findIndex(item => item.id === prevState.id);

			if (indexMessageSelected !== -1) {
				return {
					...prevState,
					messages: historicoMensagens[indexMessageSelected].messages
				}
			}

			return prevState;
		})
	}, [historicoMensagens, setSelectedMessage]);

	useEffect(() => {
		socket.emit('join-chat', userData.contato);

		addMessage();
		return function cleanup() {
      socket.removeListener("message-chat");
    };

	}, [userData, historicoMensagens]);

	return (
		<section className="w-96 p-3 overflow-y-auto border-r-2">
			<header className="h-32">
				<h2 className="text-gray-700 font-bold text-xl">Conversas</h2>
				<div className="mt-5 p-2 flex shadow-md rounded-lg border">
					<input placeholder="Pesquise..." className="outline-0 w-full"/>
					<GoSearch size={30} className="text-gray-700"/>
				</div>
			</header>
			<div className=" min-h-[calc(100%_-_8rem)]">
				{historicoMensagens.map(item => (
					<div className="flex justify-between cursor-pointer items-center border-b-2 py-2 h-16" onClick={() => handleClick(item)}>
						<div className="flex">
							<Avatar>
								<AvatarImage src={item.avatar} />
								<AvatarFallback>{item.nome_pessoa}</AvatarFallback>
							</Avatar>
							<div className="ml-2">
								<p className="font-semibold">{item.nome_pessoa}</p>
								<span className="text-sm">{ item.messages.length > 0 ? item.messages[item.messages.length -1].mensagem : ''}</span>
							</div>
						</div>
						<div className="flex flex-col justify-between items-end">
							<p className="text-xs">{ item.messages.length > 0 ? item.messages[item.messages.length -1].data : ''}</p>
							<span className="text-xs text-center bg-red-600 w-4 rounded-full text-white">{item.notificacao}</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
