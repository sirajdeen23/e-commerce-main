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
    // Use Vite's BASE_URL so the router works when the app is served
    // from a subpath (e.g. GitHub Pages). Do NOT use
    // `process.env.PUBLIC_URL` here — that's for Create React App.
    basename: import.meta.env.BASE_URL || "/",
  });
  return <RouterProvider router={router} />;
};

export default AppRoutes;
