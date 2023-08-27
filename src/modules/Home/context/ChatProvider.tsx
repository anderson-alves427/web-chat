import { useEffect, useState } from "react";
import { ChatContext, IContactsData, IUserData } from "./ChatContext";

const ChatProvider = ({ children } : { children: React.ReactNode }) => {
	const [userData, setUserData] = useState<IUserData>({} as IUserData);
	const [contactsData, setContactsData] = useState<IContactsData[]>([]);

	const handleChangeUserData = (data: IUserData) => {
		setUserData(data);
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
		<ChatContext.Provider value={{userData, handleChangeUserData, contactsData, setContactsData}}>
			{children}
		</ChatContext.Provider>
	);
}

export { ChatProvider };

