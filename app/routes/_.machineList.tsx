import { Link } from "@remix-run/react";

export default function MachineList() {
  return (
    <div className="flex flex-col justify-center items-center w-svw h-svh gap-12">
      <h1 className="font-inter font-semibold text-[#A8C027] text-5xl">
        จำนวนเครื่องที่ต้องการซ่อม
      </h1>

      <div className="flex flex-col w-[70svw] h-[50svh] bg-white shadow-2xl items-center p-10 rounded-xl overflow-auto gap-10">
        <div className="w-[95%] h-fit p-10 bg-[#F5F5F5] rounded-xl">
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col justify-evenly w-full">
              <h1 className="font-inter font-bold text-xl mb-2">
                รายละเอียดเครื่องซ่อมที่ 1
              </h1>
              <div className="flex flex-row gap-4">
                <h1 className="font-inter text-lg">Serial Number :</h1>
                <h1 className="font-inter text-lg">2S38A7</h1>
              </div>
              <div className="flex flex-row gap-4">
                <h1 className="font-inter text-lg">Model / Type :</h1>
                <h1 className="font-inter text-lg">Derivatsiya</h1>
              </div>
              <div className="flex flex-row gap-4">
                <h1 className="font-inter text-lg">Warranty :</h1>
                <h1 className="font-inter text-lg">2021-09-20 10:30 AM</h1>
              </div>
              <div className="flex flex-row gap-4">
                <h1 className="font-inter text-lg">Rated :</h1>
                <h1 className="font-inter text-lg">12 Cubicmetre</h1>
              </div>
            </div>

            <Link to="/machineDetails">
              <div className="flex flex-row w-[15rem] bg-[#DEE33E] p-4 rounded-xl items-center justify-center">
                <h1 className="font-inter font-bold w-full text-center">
                  Edit Details
                </h1>
              </div>
            </Link>
          </div>
        </div>

      </div>
      <div className="flex flex-row gap-5">
        <Link to="/work">
          <button className="w-[10rem] h-[3rem] p-2 bg-[#030303] text-white rounded-xl font-bold">
            Back
          </button>
        </Link>
        <Link to="/machineDetails">
          <button className="w-[10rem] h-[3rem] p-2 bg-[#51C0F4] text-black rounded-xl font-bold">
            Add
          </button>
        </Link>
        <Link to="/work">
          <button className="w-[10rem] h-[3rem] p-2 bg-[#DEE33E] text-black rounded-xl font-bold">
            Save
          </button>
        </Link>
      </div>
    </div>
  );
}
