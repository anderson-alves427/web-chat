const paths = {
	http: {
		production: "https://api.app.icc.livsaude.com.br/solus/v2/chat",
		development: "https://api.tst.pep.livsaude.com.br/v2_chat/chat",
		// development: "http://192.168.15.58:80/chat",
	},
	websocket: {
		production: "https://api.app.icc.livsaude.com.br",
		development: "https://api.tst.pep.livsaude.com.br",
		// development: "http://192.168.15.58:80",
	},
};

const pathBuilder = (protocol: "http" | "websocket", mode: string) => {
	return mode === "production"
		? paths[protocol].production
		: paths[protocol].development;
};

const wsSuffixBuilder = (mode: string) => {
	return mode === "production" ? "/solus/v2/socket.io" : "/socket.io";
};

const httpPath = pathBuilder("http", import.meta.env.MODE);

const websocketConfig = {
	url: pathBuilder("websocket", import.meta.env.MODE),
	suffix: wsSuffixBuilder(import.meta.env.MODE),
};

export { httpPath, websocketConfig };
