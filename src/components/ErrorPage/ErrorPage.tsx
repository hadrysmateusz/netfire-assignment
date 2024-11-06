import { useRouteError } from "react-router-dom";
import { getRouteErrorMessage } from "./get-route-error-message";

export const ErrorPage = () => {
  const error = useRouteError();
  const errorMessage = getRouteErrorMessage(error);

  return (
    <div className="h-svh text-center flex flex-col justify-center items-center font-primary">
      <h1 className="font-semibold text-gray-4 tracking-tighter text-3xl">Oops! 😅</h1>
      <p className="text-gray-4">An unexpected error has occurred.</p>
      {!!errorMessage && <p className="text-gray-4 italic pt-4">{errorMessage}</p>}
    </div>
  );
};
