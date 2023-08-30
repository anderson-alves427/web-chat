import { DialogAddPhone } from "../DialogAddPhone";

interface IconsMenuProps {
	children: React.ReactNode;
}

export const DialogsMenu = ({ children }: IconsMenuProps) => {
	return (
		<>
			<DialogAddPhone>{children}</DialogAddPhone>
		</>
	);
};
