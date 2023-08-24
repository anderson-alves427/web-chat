import { useEffect, useState } from "react";
import { ChatContext, UserData } from "./chatContext";

const ChatProvider = ({ children } : { children: React.ReactNode }) => {
	const [userData, setUserData] = useState<UserData>({} as UserData);

	const handleChangeUserData = (data: UserData) => {
		setUserData(data);
	}

	useEffect(() => {
		const userDataLocalStorage = localStorage.getItem('userData');

		if (userDataLocalStorage) {
			setUserData(JSON.parse(userDataLocalStorage));
		}

	}, []);


	return (
		<ChatContext.Provider value={{userData, handleChangeUserData}}>
			{children}
		</ChatContext.Provider>
	);
}

export { ChatProvider };

