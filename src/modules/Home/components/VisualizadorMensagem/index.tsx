import { Avatar, AvatarFallback, AvatarImage } from "../../../../shared/components/ui/avatar";

interface VisualizadorMensagemProps {
  avatar: string;
	nome: string;
	mensagem: string | null;
	data: string | null;
	notificacao: number | null;
}

export const VisualizadorMensagem = ({avatar, nome, data, notificacao, mensagem }: VisualizadorMensagemProps) => {
	return (
		<div className="flex justify-between cursor-pointer items-center border-b-2 py-2 h-16">
			<div className="flex">
				<Avatar>
					<AvatarImage src={avatar} />
					<AvatarFallback>{nome}</AvatarFallback>
				</Avatar>
				<div className="ml-2">
					<p className="font-semibold">{nome} </p>
					<span className="text-sm">{mensagem}</span>
				</div>
			</div>
			<div className="flex flex-col justify-between items-end">
				<p className="text-xs">{data}</p>
				<span className="text-xs text-center bg-red-600 w-4 rounded-full text-white">{notificacao}</span>
			</div>
		</div>
	);
}
