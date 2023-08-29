import { io } from "socket.io-client";

const clientBuilder = () => {
	const client = io('http://localhost:8080');
	client.on("connect", () => {
		console.log("ws-chat connected");
	});

	client.on("disconnect", () => {
		console.log("ws-chat disconnected");
	});

	return client;
};

const socket = clientBuilder();

export { socket };
