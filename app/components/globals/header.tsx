"use client";

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { pages } from "@/libs/data/pages";

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header className="fixed w-full bg-white/50 dark:bg-black/50 z-50 top-0 p-3 border-b border-black dark:border-white">
      <nav className="px-4 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Toolbox
            </span>
          </a>
          <div className="flex items-center">
            <button
              onClick={toggleNavbar}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isNavbarOpen ? <XMarkIcon /> : <Bars3Icon />}
              </svg>
            </button>
          </div>
          {isNavbarOpen && (
            <div
              className="justify-between items-center w-full"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium">
                {pages.map((p, i) => {
                  return (
                    <li key={i}>
                      <a
                        href={p.link}
                        className="block my-1 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded"
                        aria-current="page"
                      >
                        {p.name} {p.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
