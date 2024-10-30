import { Link } from "@remix-run/react";
import { useState } from "react";
import { DOMAIN } from "./server/domain";

export default function AddCustomer() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [province, setProvince] = useState("");
  const [creditLimit, setCreditLimit] = useState<number>(0);
  const [error, setError] = useState("");

  async function MachineLists() {
    if (name === "" || phone === "" || province === "" || creditLimit === 0) {
      setError("Please fill all the required fields");
      return;
    }
    const response = await fetch(DOMAIN + "/customers/addNewCustomer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        tel: phone,
        province: province,
        credit_limit: creditLimit,
      }),
    });

    window.location.href = "/machineLists";
  }

  return (
    <div className="flex flex-col justify-center items-center w-svw h-svh">
      <div className="flex flex-col justify-center items-center w-[60svw] h-fit gap-5 bg-white rounded-xl shadow-xl p-10">
        <h1 className="font-inter font-semibold text-[#A8C027] text-5xl mb-12">
          รายละเอียดเครื่องที่จะซ่อม
        </h1>

        <div className="flex flex-col gap-14">
          <div className="flex flex-row gap-24">
            <div>
              <div>
                <span className="font-urbanist text-gray-600">
                  Serial Number
                </span>
                <span className="font-urbanist text-red-600">*</span>
              </div>
              <input
                className="w-[25rem] h-fit bg-white p-2 pl-4 text-black rounded-xl font-bold border-[#C2C2C2] border-2"
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                  setError("");
                }}
              />
            </div>

            <div>
              <div>
                <span className="font-urbanist text-gray-600">Rated</span>
                <span className="font-urbanist text-red-600">*</span>
              </div>
              <input
                className="w-[25rem] h-fit bg-white p-2 pl-4 text-black rounded-xl font-bold border-[#C2C2C2] border-2"
                type="text"
                onChange={(e) => {
                  setPhone(e.target.value);
                  setError("");
                }}
              />
            </div>
          </div>

          <div className="flex flex-row gap-24">
            <div>
              <div>
                <span className="font-urbanist text-gray-600">
                  Model / Type
                </span>
                <span className="font-urbanist text-red-600">*</span>
              </div>
              <input
                className="w-[25rem] h-fit bg-white p-2 pl-4 text-black rounded-xl font-bold border-[#C2C2C2] border-2"
                type="text"
                onChange={(e) => {
                  setProvince(e.target.value);
                  setError("");
                }}
              />
            </div>

            <div>
              <div>
                <span className="font-urbanist text-gray-600">Warranty</span>
                <span className="font-urbanist text-red-600">*</span>
              </div>

              <select
                name="Warranty"
                id="Warranty"
                className="w-[25rem] h-fit bg-white p-2 pl-4 text-black rounded-xl font-bold border-[#C2C2C2] border-2"
              >
                <option value="true">In Warranty</option>
                <option value="false">No Warranty</option>
              </select>
            </div>
          </div>
        </div>

        {error != "" ? (
          <h1 className="text-red-600 font-bold translate-y-4">{error}</h1>
        ) : (
          ""
        )}

        <div className="flex flex-row gap-24">
          <Link to="/machineList" prefetch="intent">
            <div className="w-[10rem] h-fit bg-[#E53636] text-black font-bold rounded-lg p-2 hover:scale-105 active:scale-95 mt-8 text-center">
              Cancel
            </div>
          </Link>

          <Link
            to="/machineList"
            prefetch="intent"
            onClick={(e) => {
              e.preventDefault();
              //   handleAddCustomer();
            }}
          >
            <div className="w-[10rem] h-fit bg-[#DEE33E] text-black font-bold rounded-lg p-2 hover:scale-105 active:scale-95 mt-8 text-center">
              ADD
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
