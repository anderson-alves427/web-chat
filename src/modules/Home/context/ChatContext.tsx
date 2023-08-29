import React, { createContext } from "react";

export interface IUserData {
	nome: string;
	contato: string;
}

export interface IContactsData extends IUserData {
}

export interface Messages {
	id_pessoa: string;
	nome_pessoa: string;
	mensagem: string;
	data: string;
}

export interface IHistoricoMensagens {
	id: string;
	nome_pessoa: string;
	avatar: string;
	notificacao: number | null;
	contato: string;
	messages: Messages[];
}

export type ChatContextProps = {
	userData: IUserData;
	handleChangeUserData: (data: IUserData) => void;
	contactsData: IContactsData[];
	setContactsData: React.Dispatch<React.SetStateAction<IContactsData[]>>
	historicoMensagens: IHistoricoMensagens[];
	addHistoricoContact: (data: IContactsData) => void;
	selectedMessage: IHistoricoMensagens;
	setSelectedMessage: React.Dispatch<React.SetStateAction<IHistoricoMensagens>>
}

export const ChatContext = createContext<ChatContextProps>({} as ChatContextProps);
