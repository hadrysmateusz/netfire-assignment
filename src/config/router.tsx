import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../components/ErrorPage";
import { LOCAL_URLS, PAGES } from "./pages";
import { Root } from "../routes/Root";
import { Products } from "../routes/Products";
import { About } from "../routes/About";
import { Home } from "../routes/Home";

export const router = createBrowserRouter([
  {
    path: LOCAL_URLS[PAGES.home],
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
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
      {
        path: LOCAL_URLS[PAGES.home],
        element: <Home />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
