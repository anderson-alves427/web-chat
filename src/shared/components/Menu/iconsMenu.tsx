import { BsChatDots } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GoHome, GoGear } from "react-icons/go";

interface IconsMenuProps {
	nome: string;
	size: number;
	color: string;
}

export const IconsMenu = ({ nome, size, color}: IconsMenuProps) => {
	return (
		<>
			{nome == 'home' && <GoHome size={size} color={color} className="cursor-pointer"/>}
			{nome == 'chat' && <BsChatDots size={size} color={color} className="cursor-pointer"/>}
			{nome == 'notification' && <IoIosNotificationsOutline size={size} color={color} className="cursor-pointer"/>}
			{nome == 'setup' && <GoGear size={size} color={color} className="cursor-pointer"/>}
		</>
	);
}
