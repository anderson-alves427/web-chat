import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogCloseUi, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { PulseLoader } from "react-spinners";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

type DialogAddPhoneProps = {
	children: React.ReactNode;
};

export const DialogAddPhone = ( { children }: DialogAddPhoneProps) => {
	const [isLoading, setIsLoading] = useState(false);

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
								<Input id="nome"/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="nome">Contato</Label>
								<Input id="contato" placeholder="85 98659-7552"/>
							</div>
						<DialogFooter className="mt-6">
							<Button
								type="submit"
								className="min-w-[100px] bg-purple-600"
							>
								{isLoading ? <PulseLoader size={8} color="#FFF" /> : "Salvar"}
							</Button>
						</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
