import { createBrowserRouter } from "react-router-dom";
import { homeRoutes } from '../../modules/Home/routes/index.routes';
import { signInRoutes } from "../../modules/SignIn/routes/index.routes";

export const router = createBrowserRouter([
		...signInRoutes,
    ...homeRoutes
  ]);
