import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../ui/tooltip";
import { GoSignOut } from "react-icons/go";
import { IconsMenu } from "./iconsMenu";
import { menuDataType } from "./types/menuDataType";
import { MenuData } from "./menuData";
import { DialogsMenu } from "./dialogsMenu";

export const Menu = () => {
	return (
		<div className="bg-purple-600 min-h-full overflow-y-auto p-3 flex flex-col justify-between">
			<div>
				<ul className="space-y-4 flex flex-col items-center">
					<li className="mb-10">
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>Avatar</AvatarFallback>
						</Avatar>
					</li>

					{MenuData.map((item: menuDataType) => {
						if (item.action === "open-modal") {
							return (
								<li key={item.id}>
									<DialogsMenu nome={item.nome}>
										<button>
											<TooltipProvider>
												<Tooltip>
													<TooltipTrigger>
														<IconsMenu
															nome={item.icon}
															size={30}
															color="white"
														/>
													</TooltipTrigger>
													<TooltipContent>
														<p>{item.nome}</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</button>
									</DialogsMenu>
								</li>
							);
						}
						return (
							<li key={item.id}>
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger>
											<IconsMenu nome={item.icon} size={30} color="white" />
										</TooltipTrigger>
										<TooltipContent>
											<p>{item.nome}</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="flex justify-center">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<GoSignOut size={30} color="white" />
						</TooltipTrigger>
						<TooltipContent>
							<p>Sair</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
		</div>
	);
};
