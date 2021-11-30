import { useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("");

  const handleTheme = () => {
    setTheme("dark");
  };

  return (
    <header className="flex items-center justify-center fixed w-full h-16 z-40">
      <div className="w-full sm:max-w-xl mx-auto flex items-center justify-between h-full px-10">
        <div className="flex flex-row items-end">
          <div className="flex flex-1 items-center mt-1">
            <div className="align-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-diactiveComponent-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative">
          {theme === "dark" ? (
            <button
              className="flex items-center justify-center rounded-md h-10 w-10 ml-4 hover:bg-gray-100 hover:bg-opacity-10 focus:bg-gray-100 focus:bg-opacity-10"
              id="headlessui-popover-button-1"
              type="button"
              aria-expanded="false"
              onClick={() => {
                handleTheme();
              }}
            >
              <div className="inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-diactiveComponent-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
            </button>
          ) : (
            <button
              className="flex items-center justify-center rounded-md h-10 w-10 ml-4 hover:bg-gray-100 hover:bg-opacity-10 focus:bg-gray-100 focus:bg-opacity-10"
              id="headlessui-popover-button-1"
              type="button"
              aria-expanded="false"
              onClick={() => {
                handleTheme();
              }}
            >
              <div className="inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-diactiveComponent-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
