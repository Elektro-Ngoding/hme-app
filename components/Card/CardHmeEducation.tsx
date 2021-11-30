export default function CardHmeEducation() {
  return (
    
      <div className="h-72 bg-white my-3 mx-2 rounded shadow-md">
        <div className="flex items-center h-10 rounded-t-md px-2 gap-1">
          <div className="h-6 w-6 rounded-full bg-red-100"></div>
          <span className="text-xs font-bold">{"MarkZukerberg"}</span>
        </div>
        <div className="h-44 bg-green-500"></div>
        <div>
          <div className="font-sans font-bold text-md pl-2 truncate">
            {"Arduino Fingerprint Sensor Tutorial"}
          </div>
          <div className="h-10 flex grid grid-cols-6 gap-4">
            <div className="ml-2 flex col-start-1 col-end-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-diactiveComponent-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="text-sm text-diactiveComponent-500">100 k</span>
            </div>
            <div className="flex col-end-7 col-span-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-diactiveComponent-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
  );
}
