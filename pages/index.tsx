import CardHome from "../components/Card/CardHome";
import Layout from "../components/Layout/Layout";
import NavFeature from "../components/NavFeature";

function Home() {
  return (
    <Layout
      pageTitle="Beranda"
      pageDeskripsi="Informasi ketersediaan oksigen yang yang ada di setiap kota di Indonesia, yang dikelola langsung oleh mitra penjual"
      pageUrl={`/`}
    >
      <section className="flex flex-col flex-1">
        <div className="w-full sm:max-w-xl mx-auto pt-4 px-4 bg-white h-64  rounded-b-3xl">
          <div className="pt-16 px-6">
            <div className="font-sans text-4xl font-bold text-diactiveComponent-500">
              Save Date
            </div>
            <div className="py-1">
              <div className="font-sans text-xl">
                Elektro-Ngoding Meetup | 2
              </div>
              <div className="font-sans text-base text-diactiveComponent-900">
                <span>RSVP now : </span>
                <a href="https://bit.ly/ektrongoding">
                  https://bit.ly/elektrongoding
                </a>
              </div>
              <div className="font-sans text-base text-diactiveComponent-500">
                mon 12 Oct 2021
              </div>
            </div>
          </div>
        </div>
        <NavFeature />

        <div className="w-full sm:max-w-xl mx-auto pt-4">
          <CardHome />
        </div>
      </section>
    </Layout>
  );
}

export default Home;
