import { useEffect, useState } from "react";
import { ChatContext, IContactsData, IHistoricoMensagens, IUserData } from "./ChatContext";

const ChatProvider = ({ children } : { children: React.ReactNode }) => {
	const [userData, setUserData] = useState<IUserData>({} as IUserData);
	const [contactsData, setContactsData] = useState<IContactsData[]>([]);
	const [historicoMensagens, sethistoricoMensagens] = useState<IHistoricoMensagens[]>([]);
	const [selectedMessage, setSelectedMessage] = useState<IHistoricoMensagens>({} as IHistoricoMensagens);

	const handleChangeUserData = (data: IUserData) => {
		setUserData(data);
	}

	const addHistoricoContact = (data: IContactsData) => {
		sethistoricoMensagens(prev => ([{
			avatar: 'https://github.com/shadcn.png',
			id: data.contato,
			nome_pessoa: data.nome,
			notificacao: null,
			contato: data.contato,
			messages: []
		}, ...prev]));
	}

	useEffect(() => {
		const userDataLocalStorage = localStorage.getItem('userData');
		const savedContactsLocalStorage = localStorage.getItem('savedContacts');

		if (userDataLocalStorage) {
			setUserData(JSON.parse(userDataLocalStorage));
		}

		if (savedContactsLocalStorage) {
			const savedContacts: IContactsData[] = JSON.parse(savedContactsLocalStorage)
			setContactsData(savedContacts);
			savedContacts.forEach(contact => {
				addHistoricoContact(contact)
			});
		}

	}, []);


	return (
		<ChatContext.Provider value={{
				userData,
				handleChangeUserData,
				contactsData,
				setContactsData,
				historicoMensagens,
				addHistoricoContact,
				selectedMessage,
				setSelectedMessage,
				sethistoricoMensagens
			}}>
			{children}
		</ChatContext.Provider>
	);
}

export { ChatProvider };

