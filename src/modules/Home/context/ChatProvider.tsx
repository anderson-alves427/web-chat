import { useEffect, useState } from "react";
import { ChatContext, IContactsData, IHistoricoMensagens, IUserData } from "./ChatContext";
import { historicoMensagensMock } from "../mocks/historicoMensagens";

const ChatProvider = ({ children } : { children: React.ReactNode }) => {
	const [userData, setUserData] = useState<IUserData>({} as IUserData);
	const [contactsData, setContactsData] = useState<IContactsData[]>([]);
	const [historicoMensagens, sethistoricoMensagens] = useState<IHistoricoMensagens[]>(historicoMensagensMock);

	const handleChangeUserData = (data: IUserData) => {
		setUserData(data);
	}

	const addHistoricoContact = (data: IContactsData) => {
		sethistoricoMensagens(prev => ([{
			avatar: 'https://github.com/shadcn.png',
			data: null,
			id: '123',
			mensagem: null,
			nome_pessoa: data.nome,
			notificacao: null,
			contato: data.contato
		}, ...prev]))
	}

	useEffect(() => {
		const userDataLocalStorage = localStorage.getItem('userData');
		const savedContactsLocalStorage = localStorage.getItem('savedContacts');

		if (userDataLocalStorage) {
			setUserData(JSON.parse(userDataLocalStorage));
		}

		if (savedContactsLocalStorage) {
			setContactsData(JSON.parse(savedContactsLocalStorage));
		}

	}, []);


	return (
		<ChatContext.Provider value={{
				userData,
				handleChangeUserData,
				contactsData,
				setContactsData,
				historicoMensagens,
				addHistoricoContact
			}}>
			{children}
		</ChatContext.Provider>
	);
}

export { ChatProvider };

