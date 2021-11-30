import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function Footer() {
  const router = useRouter();
  const [userLogIn, setUserLogIn] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("userLogIn");
    if (user === "false") {
      setUserLogIn(false);
    } else if (user === "true") {
      setUserLogIn(true);
    } else {
      const userSession = sessionStorage.getItem("userLogIn");
      if (userSession === "false") {
        setUserLogIn(false);
      } else if (userSession === "true") {
        setUserLogIn(true);
      }
    }
  }, []);
  return (
    <nav className="flex items-center justify-center fixed bottom-0 w-full h-16 px-2 bg-white border-t border-gray-300 z-30">
      <div className="flex items-center justify-center w-full max-w-xl mx-auto ">
        <ul className="flex items-center justify-evenly w-full py-2">
          <li className="relative">
            <Link href="/">
              <a
                className={
                  router.pathname == "/"
                    ? "inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-activeComponent-500 font-semibold hover:text-activeComponent-500"
                    : "inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-gray-600 hover:text-activeComponent-500"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </a>
            </Link>
          </li>
          <li className="relative">
            <Link href="/hmeEducation">
              <a
                className={
                  router.pathname == "/hmeEducation"
                    ? "inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-activeComponent-500 font-semibold hover:text-activeComponent-500"
                    : "inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-gray-600 hover:text-activeComponent-500"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </a>
            </Link>
          </li>
          <li className="relative">
            <Link href="/eCash">
              <a
                className={
                  router.pathname == "/eCash"
                    ? "inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-activeComponent-500 font-semibold hover:text-activeComponent-500"
                    : "inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-gray-600 hover:text-activeComponent-500"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </a>
            </Link>
          </li>
          <li className="relative">
            {userLogIn ? (
              <Link href="/dashboard">
                <a
                  className={
                    router.pathname == "/dashboard"
                      ? "inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-activeComponent-500 font-semibold hover:text-activeComponent-500"
                      : "inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-gray-600 hover:text-activeComponent-500"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="text-xs truncate">Dashboard</span>
                </a>
              </Link>
            ) : (
              <Link href="/profile">
                <a
                  className={
                    router.pathname == "/profile"
                      ? "inline-flex flex-col items-center justify-center text-center h-8 w-8 border-2 rounded-full border-activeComponent-500 font-semibold hover:text-activeComponent-500"
                      : "inline-flex flex-col items-center justify-center text-center h-12 text-gray-600 hover:text-activeComponent-500"
                  }
                >
                  <Image
                    className="rounded-full"
                    src="https://res.cloudinary.com/fandilladp/image/upload/v1629587035/uydpw9sjoatxvci4t3uj.jpg"
                    width="30"
                    height="30"
                    alt=""
                  />
                </a>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
