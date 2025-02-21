import { ROUTES } from "../constants/routes";
import Overview from "../pages/Overview/";

export const AdminRoutes = {
  path: ROUTES.DASHBOARD,
  children: [
    Overview
  ],
};
