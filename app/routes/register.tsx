import { Link } from "@remix-run/react";
import { useState } from "react";
import { DOMAIN } from "./server/domain";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [error, setError] = useState("");

  async function handleAddUser() {
    if (
      username === "" ||
      password === "" ||
      name === "" ||
      surname === "" ||
      address === "" ||
      province === ""
    ) {
      setError("Please fill all the required fields");
      return;
    }
    const response = await fetch(DOMAIN + "/user/addNewUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        name: name,
        surname: surname,
        address: address,
        province: province,
      }),
    });

    window.location.href = "/login";
  }

  return (
    <div className="flex flex-col justify-center items-center w-svw h-svh">
      <div className="flex flex-col justify-center items-center w-[60svw] h-fit gap-5 bg-white rounded-xl shadow-xl p-10">
        <h1 className="font-inter font-semibold text-[#A8C027] text-5xl mb-12">
          สร้างรหัสผู้ใช้งาน
        </h1>

        <div className="flex flex-col gap-14">
          <div className="flex flex-row gap-24">
            <div>
              <div>
                <span className="font-urbanist text-gray-600">
                username
                </span>
                <span className="font-urbanist text-red-600">*</span>
              </div>
              <input
                className="w-[25rem] h-fit bg-white p-2 pl-4 text-black rounded-xl font-bold border-[#C2C2C2] border-2"
                type="text"
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError("");
                }}
              />
            </div>

            <div>
              <div>
                <span className="font-urbanist text-gray-600">
                password
                </span>
                <span className="font-urbanist text-red-600">*</span>
              </div>
              <input
                className="w-[25rem] h-fit bg-white p-2 pl-4 text-black rounded-xl font-bold border-[#C2C2C2] border-2"
                type="text"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
              />
            </div>
          </div>

          <div className="flex flex-row gap-24">
            <div>
              <div>
                <span className="font-urbanist text-gray-600">name</span>
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
                surname
                </span>
                <span className="font-urbanist text-red-600">*</span>
              </div>
              <input
                className="w-[25rem] h-fit bg-white p-2 pl-4 text-black rounded-xl font-bold border-[#C2C2C2] border-2"
                type="text"
                onChange={(e) => {
                  setSurname(e.target.value);
                  setError("");
                }}
              />
            </div>
          </div>

          <div className="flex flex-row gap-24">
            <div>
              <div>
                <span className="font-urbanist text-gray-600">address</span>
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
                <span className="font-urbanist text-gray-600">
                province
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
          </div>
        </div>

        {error != "" ? (
          <h1 className="text-red-600 font-bold translate-y-4">{error}</h1>
        ) : (
          ""
        )}

        <Link
          to="/login"
          prefetch="intent"
          onClick={(e) => {
            e.preventDefault();
            handleAddUser();
          }}
        >
          <div className="w-[10rem] h-fit bg-[#DEE33E] text-black font-bold rounded-lg p-2 hover:scale-105 active:scale-95 mt-8 text-center">
            Create
          </div>
        </Link>
      </div>
    </div>
  );
}
