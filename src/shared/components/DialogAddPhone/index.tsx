import React, { useState }  from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { IContactsData } from "../../../modules/Home/context/ChatContext";

type DialogAddPhoneProps = {
	children: React.ReactNode;
};

export const DialogAddPhone = ( { children }: DialogAddPhoneProps) => {
	const [addContactData, setAddContactData] = useState({} as IContactsData);

	const handleClickSaveNumber = () => {
		const savedContactsLocalStorage = localStorage.getItem('savedContacts');

		if (savedContactsLocalStorage) {
			const contacts = JSON.parse(savedContactsLocalStorage);
			localStorage.setItem('savedContacts', JSON.stringify([addContactData, ...contacts]));
		} else {
			localStorage.setItem('savedContacts', JSON.stringify([addContactData]));
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setAddContactData(prevState => ({
			...prevState,
			[name]: value
		}))
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
					<form>
							<div className="space-y-1">
								<Label htmlFor="nome">Nome</Label>
								<Input id="nome" name="nome" value={addContactData.nome} onChange={handleChange}/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="nome">Contato</Label>
								<Input id="contato" name="contato" placeholder="85 98659-7552" value={addContactData.contato} onChange={handleChange}/>
							</div>
						<DialogFooter className="mt-6">
							<Button
								type="submit"
								className="min-w-[100px] bg-purple-600"
								onClick={handleClickSaveNumber}
							>
								Salvar
							</Button>
						</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
