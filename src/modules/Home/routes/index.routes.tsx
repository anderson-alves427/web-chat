import { RouteObject } from "react-router-dom";
import { Home } from "../page";

const homeRoutes: RouteObject[] = [
	{ path: "/chat", element: <><Home /></>},

];

export { homeRoutes };

