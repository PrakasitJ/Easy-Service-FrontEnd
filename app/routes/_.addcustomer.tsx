import { Link, useNavigate } from "@remix-run/react";
import { useState } from "react";
import { DOMAIN } from "./server/domain";

export default function AddCustomer() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [tax, setTax] = useState("");
  const [province, setProvince] = useState("");
  const [creditLimit, setCreditLimit] = useState<number>(0);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleAddCustomer() {
    if (
      name === "" ||
      phone === "" ||
      address === "" ||
      tax === "" ||
      province === "" ||
      creditLimit === 0
    ) {
      setError("Please fill all the required fields");
      return;
    }
    const response = await fetch(DOMAIN + "/customers/addNewCustomer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        tel: phone,
        address: address,
        tax_id: tax,
        province: province,
        credit_limit: creditLimit,
      }),
    });

    navigate("/customerList");
  }

  return (
    <div className="flex flex-col justify-center items-center w-svw h-svh">
      <div className="flex flex-col justify-center items-center w-[60svw] h-fit gap-5 bg-white rounded-xl shadow-xl p-10">
        <h1 className="font-inter font-semibold text-[#A8C027] text-5xl mb-12">
          เพิ่มข้อมูลลูกค้า
        </h1>

        <div className="flex flex-col gap-14">
          <div className="flex flex-row gap-24">
            <div>
              <div>
                <span className="font-urbanist text-gray-600">
                  Name/Company
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
                <span className="font-urbanist text-gray-600">
                  Phone Number
                </span>
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
                <span className="font-urbanist text-gray-600">Address</span>
                <span className="font-urbanist text-red-600">*</span>
              </div>
              <input
                className="w-[25rem] h-fit bg-white p-2 pl-4 text-black rounded-xl font-bold border-[#C2C2C2] border-2"
                type="text"
                onChange={(e) => {
                  setAddress(e.target.value);
                  setError("");
                }}
              />
            </div>

            <div>
              <div>
                <span className="font-urbanist text-gray-600">Custom TAX</span>
                <span className="font-urbanist text-red-600">*</span>
              </div>
              <input
                className="w-[25rem] h-fit bg-white p-2 pl-4 text-black rounded-xl font-bold border-[#C2C2C2] border-2"
                type="text"
                onChange={(e) => {
                  setTax(e.target.value);
                  setError("");
                }}
              />
            </div>
          </div>

          <div className="flex flex-row gap-24">
            <div>
              <div>
                <span className="font-urbanist text-gray-600">Province</span>
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
                <span className="font-urbanist text-gray-600">
                  Credit Limit
                </span>
                <span className="font-urbanist text-red-600">*</span>
              </div>
              <input
                className="w-[25rem] h-fit bg-white p-2 pl-4 text-black rounded-xl font-bold border-[#C2C2C2] border-2"
                type="number"
                onChange={(e) => {
                  setCreditLimit(parseInt(e.target.value));
                  setError("");
                }}
              />
            </div>
          </div>
        </div>

        {error != "" ? (
          <h1 className="text-red-600 font-bold translate-y-4">{error}</h1>
        ) : (
          ""
        )}

        <div className="flex flex-row gap-24">
          <Link
            to="/customerList"
            prefetch="intent"
          >
            <div className="w-[10rem] h-fit bg-[#E53636] text-black font-bold rounded-lg p-2 hover:scale-105 active:scale-95 mt-8 text-center">
              Cancel
            </div>
          </Link>

          <Link
            to="/customerList"
            prefetch="intent"
            onClick={(e) => {
              e.preventDefault();
              handleAddCustomer();
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
