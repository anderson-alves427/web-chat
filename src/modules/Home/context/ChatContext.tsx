import React, { createContext } from "react";

export interface IUserData {
	nome: string;
	contato: string;
}

export interface IContactsData extends IUserData {
}

export interface IHistoricoMensagens {
	id: string;
	nome_pessoa: string;
	avatar: string;
	mensagem: string | null;
	data: string | null;
	notificacao: number | null;
	contato: string;
}

export type ChatContextProps = {
	userData: IUserData;
	handleChangeUserData: (data: IUserData) => void;
	contactsData: IContactsData[];
	setContactsData: React.Dispatch<React.SetStateAction<IContactsData[]>>
	historicoMensagens: IHistoricoMensagens[];
	addHistoricoContact: (data: IContactsData) => void;
}

export const ChatContext = createContext<ChatContextProps>({} as ChatContextProps);
