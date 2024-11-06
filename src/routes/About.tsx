import { Link } from "react-router-dom";
import { LOCAL_URLS, PAGES } from "../config";

export const About = () => {
  return (
    <>
      <div className="h-svh text-center flex flex-col justify-center items-center font-primary">
        <h1 className="font-semibold text-gray-4 tracking-tighter text-3xl">About</h1>
        <p className="text-gray-4">This is a placeholder route</p>
        <Link to={LOCAL_URLS[PAGES.home]} className="text-gray-4 underline mt-4">
          Go back to Home
        </Link>
      </div>
    </>
  );
};
