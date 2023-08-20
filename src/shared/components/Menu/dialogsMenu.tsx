import { DialogAddPhone } from "../DialogAddPhone";


interface IconsMenuProps {
	nome: string;
	children: React.ReactNode;
}

export const DialogsMenu = ({ nome, children }: IconsMenuProps) => {
	return (
		<>
			<DialogAddPhone>{children}</DialogAddPhone>
		</>
	);
}
