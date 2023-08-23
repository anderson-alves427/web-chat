import React, { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

type DialogAddPhoneProps = {
	children: React.ReactNode;
};

export const DialogAddPhone = ( { children }: DialogAddPhoneProps) => {
	const [dadosCadastro, setDadosCadastro] = useState({
		nome: '',
		contato: ''
	})

	const handleClickSaveNumber = () => {
		const savedContactsLocalStorage = localStorage.getItem('savedContacts');

		if (savedContactsLocalStorage) {
			const contacts = JSON.parse(savedContactsLocalStorage);
			localStorage.setItem('savedContacts', JSON.stringify([dadosCadastro, ...contacts]));
		} else {
			localStorage.setItem('savedContacts', JSON.stringify([dadosCadastro]));
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setDadosCadastro(prevState => ({
			...prevState,
			[name]: value
		}))
	}
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
								<Input id="nome" name="nome" value={dadosCadastro.nome} onChange={handleChange}/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="nome">Contato</Label>
								<Input id="contato" name="contato" placeholder="85 98659-7552" value={dadosCadastro.contato} onChange={handleChange}/>
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
