import { Avatar, AvatarFallback, AvatarImage } from "../../../../shared/components/ui/avatar";
import { BsTelephone, BsThreeDotsVertical, BsCameraVideo } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../../../shared/components/ui/tooltip";
import { GoPaperclip } from "react-icons/go";
import { AiOutlineCamera } from "react-icons/ai";
import { useChatContext } from "../../context/ChatHook";
import React, { useState } from "react";
import { socket } from "../../../../shared/api/socket";

export const Mensagem = () => {
	const { selectedMessage, userData, setSelectedMessage } = useChatContext();
	const [text, setText] = useState('');

	const handleClickSendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			socket.emit('message-chat', {
				id_pessoa_remetente: userData.contato,
				message: text,
				id_pessoa_destinatario: selectedMessage.id,
				nome_destinatario: userData.nome
			});

			setSelectedMessage(prevState => {
					return {
						...prevState,
						messages: [
							...prevState.messages,
							...[{
									id_pessoa: userData.contato,
									nome_pessoa: prevState.nome_pessoa,
									mensagem: text,
									data: '08:00',
							}]
						]
					}
			});
			setText('');
		}
	}

	return (
		<section className="w-full h-full p-3">

			{Object.keys(selectedMessage).length === 0 ? (
				<div>Escolha um chat</div>

			) : (
				<>
					<div className="h-16 flex justify-between items-center border-b-2">
						<div className="flex items-center">
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>{selectedMessage.nome_pessoa}</AvatarFallback>
							</Avatar>
							<div className="ml-2">
								<p className="font-bold">{selectedMessage.nome_pessoa}</p>
								<span className="text-sm">Online - Last seen, 2:02 pm</span>
							</div>
						</div>
						<div>
							<ul className="flex">

								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger>
											<li className="ml-2"><BsTelephone size={25} className="text-purple-500" /></li>
										</TooltipTrigger>
										<TooltipContent>
											<p>Ligação de voz</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger>
											<li className="mx-6"><BsCameraVideo size={25} className="text-purple-500" /></li>
										</TooltipTrigger>
										<TooltipContent>
											<p>Ligação de vídeo</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger>
											<li className="mr-3"><BsThreeDotsVertical size={25} className="text-purple-500" /></li>
										</TooltipTrigger>
										<TooltipContent>
											<p>Outros</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</ul>
						</div>
					</div>
					<div className="h-[calc(100%_-_4rem)] flex flex-col justify-bet
					ween">
						<div className="h-full overflow-y-auto my-3">
							{
								selectedMessage.messages.length > 0 && (
									<>
										{selectedMessage.messages.map((message, index) => (
											<div className={`flex w-full mt-5 ${message.id_pessoa === '1' ? 'justify-end' : 'justify-start'}`} key={index}>
												<div className={`flex flex-col space-y-1 justify-end mx-3 max-w-4xl`}>
													<div className={`p-3 rounded-2xl ${message.id_pessoa === '1' ? 'bg-purple-500' : 'bg-gray-300'}`}>
														<p  className={`${message.id_pessoa === '1' ? 'text-white' : ''}`}>
															{message.mensagem}
														</p>
													</div>
													<span className="text-end text-xs text-gray-500 font-semibold">{message.data}</span>
												</div>
											</div>
										))}
									</>
								)
								}
						</div>
						<div className="w-full flex justify-between">
							<div className="flex w-full shadow-md rounded-lg border p-2">
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger>
											<GoPaperclip size={25} className="text-purple-500" />
										</TooltipTrigger>
										<TooltipContent>
											<p>Outros</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
								<input type="text" className="w-full outline-0 ml-2" value={text} onChange={(e) => setText(e.target.value)} onKeyUp={handleClickSendMessage}/>
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger>
											<BsThreeDotsVertical size={25} className="text-purple-500" />
										</TooltipTrigger>
										<TooltipContent>
											<p>Outros</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger>
											<AiOutlineCamera size={25} className="text-purple-500" />
										</TooltipTrigger>
										<TooltipContent>
											<p>Foto</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</div>
							<div className="ml-2 flex items-center">
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger>
											<BsThreeDotsVertical size={25} className="text-purple-500" />
										</TooltipTrigger>
										<TooltipContent>
											<p>Outros</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</div>
						</div>
					</div>

				</>
			)}
		</section>
	);
}
