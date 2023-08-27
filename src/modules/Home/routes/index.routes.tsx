import { RouteObject } from "react-router-dom";
import { Home } from "../page";
import { userDataLoader } from "../../../shared/routes/loaders.routes";

const homeRoutes: RouteObject[] = [
	{ path: "/chat", element: <Home />, loader: userDataLoader},

];

export { homeRoutes };

