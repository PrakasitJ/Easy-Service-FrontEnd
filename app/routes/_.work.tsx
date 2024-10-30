import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { DOMAIN } from "./server/domain";

export default function Work() {
  const [id, setId] = useState<number>(-1);
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [error, setError] = useState("");
  const [customer, setCustomer] = useState<Customer>();

  useEffect(() => {
    setAddress(sessionStorage.getItem("address") || "No Data");
    setProvince(sessionStorage.getItem("province") || "No Data");
    const id = Array.from(sessionStorage.getItem("selectedCustomer") || "");
    setId(parseInt(id[1]));

    async function fetchCustomer() {
      const response = await fetch(
        `${DOMAIN}/customers/getByID/` + parseInt(id[1])
      );
      const data: Customer[] = await response.json();
      setCustomer(data[0]);
    }
    fetchCustomer();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-svw h-svh gap-12">
      <h1 className="font-inter font-semibold text-[#A8C027] text-5xl">
        หน้าเพิ่มงาน
      </h1>
      <div className="flex flex-col w-[70svw] h-[50svh] bg-white shadow-2xl items-center p-10 rounded-xl">
        <div className="w-[95%] h-fit p-10 bg-[#F5F5F5] rounded-xl">
          <div className="flex flex-row gap-4">
            <h1 className="font-inter">ชื่อลูกค้า : </h1>
            <h1 className="font-inter font-bold">{customer?.name}</h1>
          </div>
          <div className="flex flex-row gap-4">
            <h1 className="font-inter">สถานที่ซ่อม : </h1>
            <h1 className="font-inter">{address}</h1>
          </div>
          <div className="flex flex-row gap-5 mt-14">
            <Link to="/machineList">
              <button className="w-[10rem] h-[3rem] p-2 bg-[#DEE33E] text-black rounded-xl font-bold">
                Edit Power Supply
              </button>
            </Link>
            <Link to="/workDescriptionEdit">
              <button className="w-[10rem] h-[3rem] p-2 bg-[#DEE33E] text-black rounded-xl font-bold">
                Edit Location
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-5">
        <Link to="/customerList">
          <button className="w-[10rem] h-[3rem] p-2 bg-[#030303] text-white rounded-xl font-bold">
            Back
          </button>
        </Link>
        <Link to="/work" >
          <button className="w-[10rem] h-[3rem] p-2 bg-[#DEE33E] text-black rounded-xl font-bold">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
