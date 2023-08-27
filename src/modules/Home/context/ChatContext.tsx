import React, { createContext } from "react";

export interface IUserData {
	nome: string;
	contato: string;
}

export interface IContactsData extends IUserData {
}

export type ChatContextProps = {
	userData: IUserData;
	handleChangeUserData: (data: IUserData) => void;
	contactsData: IContactsData[];
	setContactsData: React.Dispatch<React.SetStateAction<IContactsData[]>>
}

export const ChatContext = createContext<ChatContextProps>({} as ChatContextProps);
