import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../components/ErrorPage";
import { About, Products, Root } from "../routes";
import { LOCAL_URLS, PAGES } from "./pages";

export const router = createBrowserRouter([
  {
    path: LOCAL_URLS[PAGES.home],
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: LOCAL_URLS[PAGES.products],
    element: <Products />,
    errorElement: <ErrorPage />,
  },
  {
    path: LOCAL_URLS[PAGES.about],
    element: <About />,
    errorElement: <ErrorPage />,
  },
]);
