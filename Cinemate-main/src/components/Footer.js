import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2030{" "}
            <Link to="/" className="hover:underline">
              Cinemate
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="https://instagram.com/upendra_007_?igshid=ZGUzMzM3NWJiOQ=="
                target="_blank"
                rel="noreferrer"
                className="mr-4 hover:underline md:mr-6 "
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/upendra-m-63b1b8256/"
                target="_blank"
                rel="noreferrer"
                className="mr-4 hover:underline md:mr-6"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="mr-4 hover:underline md:mr-6"
              >
                Youtube
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Upendra-23"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </footer>
  );
};
