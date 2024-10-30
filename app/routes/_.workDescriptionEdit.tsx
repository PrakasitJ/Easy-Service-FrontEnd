import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";

export default function WorkDescriptionEdit() {
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("address") != null) {
      setAddress(sessionStorage.getItem("address") || "");
    }
    if (sessionStorage.getItem("province") != null) {
      setProvince(sessionStorage.getItem("province") || "");
    }
  }, []);

  useEffect(() => {
    if (address == "" && province == "") {
      setError("");
    } else if (address == "") {
      setError("Please fill in the address");
    } else {
      sessionStorage.setItem("address", address);
      setError("");
    }
  }, [address]);

  useEffect(() => {
    if (address == "" && province == "") {
      setError("");
    } else if (province == "") {
      setError("Please fill in the province");
    } else {
      sessionStorage.setItem("province", province);
      setError("");
    }
  }, [province]);
  return (
    <div className="flex flex-col justify-center items-center w-svw h-svh">
      <div className="flex flex-col justify-center items-center w-[60svw] h-fit gap-5 bg-white rounded-xl shadow-xl p-10">
        <h1 className="font-inter font-semibold text-[#A8C027] text-5xl mb-12">
          สถานที่ซ่อม
        </h1>

        <div className="flex flex-col gap-14">
          <div className="flex flex-row gap-24">
            <div>
              <div>
                <span className="font-urbanist text-gray-600">Address</span>
                <span className="font-urbanist text-red-600">*</span>
              </div>
              <input
                className="w-[25rem] h-fit bg-white p-2 pl-4 text-black rounded-xl font-bold border-[#C2C2C2] border-2"
                type="text"
                defaultValue={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  setError("");
                }}
              />
            </div>

            <div>
              <div>
                <span className="font-urbanist text-gray-600">Province</span>
                <span className="font-urbanist text-red-600">*</span>
              </div>
              <input
                className="w-[25rem] h-fit bg-white p-2 pl-4 text-black rounded-xl font-bold border-[#C2C2C2] border-2"
                type="text"
                defaultValue={province}
                onChange={(e) => {
                  setProvince(e.target.value);
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

        <div className="flex flex-col gap-14 w-full">
          <div className="flex flex-row w-full justify-center gap-24">
            <Link to="/work" prefetch="intent">
              <div className="w-[5rem] h-fit bg-[#030303] text-white  font-bold rounded-lg p-2 hover:scale-105 active:scale-95 mt-8 text-center">
                Back
              </div>
            </Link>

            <Link to="/work" prefetch="intent">
              <div className="w-[5rem] h-fit bg-[#DEE33E] text-black font-bold rounded-lg p-2 hover:scale-105 active:scale-95 mt-8 text-center">
                Next
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
