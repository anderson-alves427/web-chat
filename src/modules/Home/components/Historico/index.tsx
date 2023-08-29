import { GoSearch } from "react-icons/go";
import { useChatContext } from "../../context/ChatHook";
import { Avatar, AvatarFallback, AvatarImage } from "../../../../shared/components/ui/avatar";
import { IHistoricoMensagens } from "../../context/ChatContext";

export const Historico = () => {
	const {  historicoMensagens, setSelectedMessage } = useChatContext();

	const handleClick = (item: IHistoricoMensagens) => {
		setSelectedMessage(item);
	}

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
