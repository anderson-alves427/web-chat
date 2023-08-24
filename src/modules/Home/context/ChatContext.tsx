import { createContext } from "react";

export type UserData = {
	nome: string;
	contato: string;
}
export type ChatContextProps = {
	userData: UserData;
	handleChangeUserData: (data: UserData) => void;
}

export const ChatContext = createContext<ChatContextProps>({} as ChatContextProps);
