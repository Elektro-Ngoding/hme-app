import React from "react";
import CardHmeEducation from "../components/Card/CardHmeEducation";
import Layout from "../components/Layout/Layout";

export default function hmeEducation() {
  return (
    <Layout
      pageTitle="HME Education"
      pageDeskripsi="Belajar dengan mudah dapatkan tutorial yang kamu butuhkan, dan jadilah kontributor untuk berbagi ilmu kalian"
      pageUrl={`/hmeEducation`}
    >
      <section className="flex flex-col flex-1 bg-mainBackground-500">
        <div className="w-full sm:max-w-xl mx-auto pt-4 px-4 h-44  rounded-b-lg sticky top-0 bg-mainBackground-500">
          <div className=" mt-14 bg-gray-200 rounded-full h-14 mb-2">
            <div className="flex items-center mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <form action="post">
                <input
                  className="ml-2 h-14 w-64 rounded bg-gray-200 font-size-xl"
                  type="text"
                  placeholder="Search"
                />
              </form>
            </div>
          </div>
          <div className="ml-2 h-10 flex items-center gap-1 pb-3">
            <div className="rounded-full bg-activeComponent-500 text-gray-100 px-3">
              Tutorial
            </div>
            <div className="rounded-full bg-diactiveComponent-500 text-gray-100 px-3">
              Book
            </div>
            <div className="rounded-full bg-diactiveComponent-500 text-gray-100 px-3">
              Exam
            </div>
          </div>
        </div>
        <div className="w-full sm:max-w-xl mx-auto pt-2 mx-auto px-8 mb-14">
          <CardHmeEducation />
          <CardHmeEducation />
          <CardHmeEducation />
          <CardHmeEducation />
        </div>

        <div className="flex items-center justify-center fixed w-32 bottom-20 right-0 z-40">
          <div className="h-16 w-16 rounded-full bg-activeComponent-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-100 m-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </section>
    </Layout>
  );
}
