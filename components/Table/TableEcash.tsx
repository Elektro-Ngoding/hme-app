
interface Type{
    nameTable: any;
}
export default function TableEcash(props: Type) {
    return (
        <div className="h-40 pt-2">
        <span className="ml-2 text-2xl font-sans ">
          {props.nameTable}
        </span>
        <div className="my-2 mx-3">
          <div className="bg-activeComponent-100 grid grid-cols-3 px-1 rounded">
            <p className="font-bold text-sm font-sans truncate">
              {"Pembayaran Uang KAS"}
            </p>{" "}
            <p className="font-bold text-sm font-sans truncate">{"5000"}</p>{" "}
            <p className="font-bold text-sm font-sans truncate">
              {"12 juli 2021"}
            </p>
          </div>
          <div className="grid grid-cols-3 px-1 rounded">
            <p className="font-bold text-sm font-sans truncate">
              {"Pembayaran Uang KAS"}
            </p>{" "}
            <p className="font-bold text-sm font-sans truncate">{"5000"}</p>{" "}
            <p className="font-bold text-sm font-sans truncate">
              {"12 juli 2021"}
            </p>
          </div>
          <div className="bg-activeComponent-100 grid grid-cols-3 px-1 rounded">
            <p className="font-bold text-sm font-sans truncate">
              {"Pembayaran Uang KAS"}
            </p>{" "}
            <p className="font-bold text-sm font-sans truncate">{"5000"}</p>{" "}
            <p className="font-bold text-sm font-sans truncate">
              {"12 juli 2021"}
            </p>
          </div>
        </div>
      </div>
    )
}
