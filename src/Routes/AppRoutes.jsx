import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import { ROUTES_CONFIG } from "../Routes/routes";
import RequiredAuth from "./RequiredAuth";
import RoutesLayout from "./RoutesLayout";

const AppRoutes = () => {
  const routes = createRoutesFromChildren(
    <Route path="/" element={<RoutesLayout />}>
      {ROUTES_CONFIG.map(({ path, element }, index) => (
        <Route
          key={index}
          path={path}
          element={<RequiredAuth>{element}</RequiredAuth>}
        />
      ))}
    </Route>
  );

  const router = createBrowserRouter(routes, {
    // use Vite's BASE_URL so router works when app is served from a subpath
    basename: import.meta.env.BASE_URL || "/",
  });
  return <RouterProvider router={router} />;
};

export default AppRoutes;
