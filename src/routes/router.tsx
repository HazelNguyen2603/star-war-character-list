import { paths } from "config";
import { CharacterPage, ErrorPage } from "pages";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: paths.default,
    element: <Navigate to={paths.character} />,
  },
  {
    path: paths.character,
    element: <CharacterPage />,
  },

  { path: paths.error, element: <ErrorPage /> },
  {
    path: "*",
    element: <Navigate to={paths.error} />,
  },
]);

export default router;
