import React, { Component } from "react";

export default class NavFeature extends Component {
  render() {
    return (
      <div className="mt-12 w-full sm:max-w-xl mx-auto px-6 h-16">
        <div className="grid grid-cols-4 gap-5 justify-items-center">
          <div className="h-16 w-16 bg-activeComponent-500 rounded">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-diactiveComponent-100 mt-4 mx-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <p className="font-sans text-icons text-center text-diactiveComponent-100">
                Data Mahasiswa
              </p>
            </div>
          </div>
          <div className="h-16 w-16 bg-activeComponent-500 rounded justify-items-center">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-diactiveComponent-100 mt-4 mx-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <p className="font-sans text-icons text-center text-diactiveComponent-100">
                KWU HME
              </p>
            </div>
          </div>
          <div className="h-16 w-16 bg-activeComponent-500 rounded">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-diactiveComponent-100 mt-4 mx-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
              <p className="font-sans text-icons text-center text-diactiveComponent-100">
                Teknokreator
              </p>
            </div>
          </div>
          <div className="h-16 w-16 bg-activeComponent-500 rounded">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-diactiveComponent-100 mt-4 mx-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>

              <p className="font-sans text-icons text-center text-diactiveComponent-100">
                More
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
