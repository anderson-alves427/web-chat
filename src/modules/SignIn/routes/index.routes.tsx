import { RouteObject } from "react-router-dom";
import { SignIn } from "../pages";

const signInRoutes: RouteObject[] = [
	{ path: "/", element: <SignIn/>},
];

export { signInRoutes };

