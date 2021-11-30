import Image from "next/image";
import Layout from "../components/Layout/Layout";

export default function profile() {
  return (
    <Layout
      pageTitle="Profile"
      pageDeskripsi="Update and setting your configuration account"
      pageUrl={`/profile`}
    >
      <section className="flex flex-col flex-1">
        <div className="w-full sm:max-w-xl mx-auto pt-4 px-4 ">
          <div className="mt-16 h-32 px-8">
            <div className="h-32 rounded bg-white grid grid-cols-3 gap-2 p-2">
              <div className="px-2">
                <Image
                  className="rounded-lg w-16"
                  src="https://res.cloudinary.com/fandilladp/image/upload/v1629587035/uydpw9sjoatxvci4t3uj.jpg"
                  width="60"
                  height="60"
                  alt="profile"
                />
              </div>
              <div className="col-span-2 overflow-auto">
                <div className="font-bold text-md">{"Mark Zukerberg"}</div>
                <div className="text-sm text-diactiveComponent-500">
                  {"Mark@gmail.com"}
                </div>
                <div className="mt-1 text-sm text-diactiveComponent-500 text-justify">
                  {"No 15 uti street off ovie palace road effurun delta state "}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-500 h-14 mt-2">
            <p>Skill</p>
            <div className="px-2 py-3 h-10 flex items-center gap-1 pb-3 bg-gray-200">
              <div className="rounded-full bg-activeComponent-500 text-gray-100 px-3">
                Embeded
              </div>
              <div className="rounded-full bg-diactiveComponent-500 text-gray-100 px-3">
                AI
              </div>
              <div className="rounded-full bg-diactiveComponent-500 text-gray-100 px-3">
                Devops
              </div>
            </div>
          </div>
          <div className="bg-red-500 h-96 mt-2"></div>
          <div className="h-14 mt-2">
            <div className="bg-activeComponent-500 rounded-full h-14 mx-4 text-center py-3">
              <p className="text-gray-100 text-xl items-center">Update</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
