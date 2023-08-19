import { createBrowserRouter } from "react-router-dom";
import { homeRoutes } from '../../modules/Home/routes/index.routes';

export const router = createBrowserRouter([
    ...homeRoutes
  ]);