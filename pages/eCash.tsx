import React from "react";
import Layout from "../components/Layout/Layout";
import TableEcash from "../components/Table/TableEcash";

export default function eCash() {
  return (
    <Layout
      pageTitle="E-Cash"
      pageDeskripsi="Kemudahan dalam pembayaran uang kas dan transparansi keuangan himpunan"
      pageUrl={`/eCash`}
    >
      <section className="flex flex-col flex-1">
        <div className="w-full sm:max-w-xl mx-auto pt-4 px-4 bg-activeComponent-500 h-64  rounded-b-3xl justify-between ">
          <div className="h-14 mt-20">
            <p className="text-gray-100 text-center font-sans text-4xl py-2">
              {"IDR 5000"}
            </p>
          </div>
          <div className="h-14 mt-2 mx-10">
            <p className="bg-yellow-500 rounded-full shadow-md text-center text-xl font-sans text-gray-100 py-3">
              {"Pay Now"}
            </p>
          </div>
        </div>
        <TableEcash nameTable={"Riwayat Transaksi"} />
        <TableEcash nameTable={"Transparansi Keungan"} />
      </section>
    </Layout>
  );
}
