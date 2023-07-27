import React from "react";
import pagenotfound from "../assets/pagenotfound.png";
import { Button } from "../components";
import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  useTitle(`404! page not found`);
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 dark:text-white my-10 font-bold">
            404, Oops!
          </p>
          <div className="max-w-lg overflow-hidden ">
            <img
              className="rounded hover:scale-110 transition duration-500"
              src={pagenotfound}
              alt="404 page not found"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back to Cinemate</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
