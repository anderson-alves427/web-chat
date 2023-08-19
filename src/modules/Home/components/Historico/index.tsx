import { GoSearch } from "react-icons/go";
import { VisualizadorMensagem } from "../VisualizadorMensagem";
import { historicoMensagens } from "../../mocks/historicoMensagens";

export const Historico = () => {
	return (
		<section className="w-80 p-3 overflow-y-auto border-r-2">
			<header className="h-32">
				<h2 className="text-gray-700 font-bold text-xl">Conversas</h2>
				<div className="mt-5 p-2 flex shadow-md rounded-lg border">
					<input placeholder="Pesquise..." className="outline-0 w-full"/>
					<GoSearch size={30} className="text-gray-700"/>
				</div>
			</header>
			<div className=" min-h-[calc(100%_-_8rem)]">
				{historicoMensagens.map(item => (
					<VisualizadorMensagem key={item.id} avatar={item.avatar} nome={item.nome_pessoa} data={item.data} notificacao={item.notificacao} mensagem={item.mensagem}/>
				))}
			</div>
		</section>
	);
}
