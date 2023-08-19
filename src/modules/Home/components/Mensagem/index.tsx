import { Avatar, AvatarFallback, AvatarImage } from "../../../../shared/components/ui/avatar";
import { BsTelephone, BsThreeDotsVertical, BsCameraVideo } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../../../shared/components/ui/tooltip";
import { GoPaperclip } from "react-icons/go";
import { AiOutlineCamera } from "react-icons/ai";

export const Mensagem = () => {
	return (
		<section className="w-full h-full p-3">
      <div className="h-16 flex justify-between items-center border-b-2">
				<div className="flex items-center">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>Anderson</AvatarFallback>
					</Avatar>
					<div className="ml-2">
						<p className="font-bold">Anderson Alves</p>
						<span className="text-sm">Online - Last seen, 2:02 pm</span>
					</div>
				</div>
				<div>
					< ul className="flex">
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
      <div className="h-[calc(100%_-_4rem)] flex flex-col justify-between">
				<div className="h-full">Mensagens</div>
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
						<input type="text" className="w-full outline-0 ml-2"/>
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
		</section>
	);
}
