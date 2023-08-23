import { useState } from "react";
import { Input } from "../../../shared/components/ui/input";
import { Label } from "../../../shared/components/ui/label";
import { Button } from "../../../shared/components/ui/button";

export const SignIn = () => {
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
	<main className="p-4 bg-gray-50 h-screen">
		<h1 className="font-bold text-gray-700 text-2xl">
			Web Chat
		</h1>
		<div className=" w-full mt-6 flex items-center justify-center">
			<div className="w-1/3 p-14 rounded-lg shadow-lg bg-white">
				<form>
					<h2  className="text-center text-gray-700 font-semibold text-lg">Cadastro de usuário</h2>
					<div className="space-y-1 mt-8">
						<Label htmlFor="nome">Nome</Label>
						<Input id="nome" name="nome" value={dadosCadastro.nome} onChange={handleChange}/>
					</div>
					<div className="space-y-2 mt-4">
						<Label htmlFor="nome">Contato</Label>
						<Input id="contato" name="contato" placeholder="85 98659-7552" value={dadosCadastro.contato} onChange={handleChange}/>
					</div>
					<Button
						type="submit"
						className="min-w-[100px] bg-purple-600 mt-7 w-full"
						onClick={handleClickSaveNumber}
					>
						Salvar
					</Button>
				</form>
			</div>
		</div>
	</main>
	);
}
