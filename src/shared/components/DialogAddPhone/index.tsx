import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import {
	Dialog,
	DialogCloseUi,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { IContactsData } from "../../../modules/Home/context/ChatContext";
import { useChatContext } from "../../../modules/Home/context/ChatHook";

type DialogAddPhoneProps = {
	children: React.ReactNode;
};

export const DialogAddPhone = ({ children }: DialogAddPhoneProps) => {
	const { addHistoricoContact } = useChatContext();
	const [addContactData, setAddContactData] = useState({} as IContactsData);
	const refCloseDialog = useRef<HTMLButtonElement>(null);

	const handleClickSaveNumber = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		const savedContactsLocalStorage = localStorage.getItem("savedContacts");
		addHistoricoContact(addContactData);

		if (savedContactsLocalStorage) {
			const contacts = JSON.parse(savedContactsLocalStorage);
			localStorage.setItem(
				"savedContacts",
				JSON.stringify([addContactData, ...contacts])
			);
			refCloseDialog.current?.click?.();
		} else {
			localStorage.setItem("savedContacts", JSON.stringify([addContactData]));
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setAddContactData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className="max-w-1/2">
				<DialogHeader>
					<DialogTitle>Adicionar contato</DialogTitle>
					<DialogDescription>
						Adicione um número de telefone e seu nome para iniciar uma conversa.
					</DialogDescription>
				</DialogHeader>
				<div>
					<div className="space-y-1">
						<Label htmlFor="nome">Nome</Label>
						<Input
							id="nome"
							name="nome"
							value={addContactData.nome}
							onChange={handleChange}
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="nome">Contato</Label>
						<Input
							id="contato"
							name="contato"
							placeholder="85 98659-7552"
							value={addContactData.contato}
							onChange={handleChange}
						/>
					</div>
					<DialogFooter className="mt-6">
						<DialogCloseUi>
							<Button
								ref={refCloseDialog}
								className="min-w-[100px] bg-purple-600"
							>
								Cancelar
							</Button>
						</DialogCloseUi>
						<Button
							className="min-w-[100px] bg-purple-600"
							onClick={handleClickSaveNumber}
						>
							Salvar
						</Button>
					</DialogFooter>
				</div>
			</DialogContent>
		</Dialog>
	);
};
