import { menuDataType } from "./types/menuDataType";

export const MenuData: menuDataType[] = [
	{
		id: 1,
		nome: 'Home',
		icon: 'home',
		action: 'navigate',
		route: null
	},
	{
		id: 2,
		nome: 'Chats',
		icon: 'chat',
		action: 'navigate',
		route: null
	},
	{
		id: 3,
		nome: 'Add phone',
		icon: 'add-phone',
		action: 'open-modal',
		route: null
	},
	{
		id: 4,
		nome: 'Notificação',
		icon: 'notification',
		action: 'navigate',
		route: null
	},
	{
		id: 5,
		nome: 'Configuração',
		icon: 'setup',
		action: 'navigate',
		route: null
	},
]
