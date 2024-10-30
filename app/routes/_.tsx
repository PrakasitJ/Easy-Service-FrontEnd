import { Link, Outlet } from "@remix-run/react";

export default function Navbar() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-svw z-50">
        <div className="flex justify-between items-center w-svw h-20 bg-black text-white opacity-90">
          <div className="ml-5 font-bold text-2xl select-none" draggable>
            Service Innovation
          </div>
          <div className="flex justify-between items-center gap-5 mr-5">
            <Link to="/customerList" prefetch="intent">
              <div className="font-bold hover:text-gray-500">Inventory</div>
            </Link>
            <Link to="/customerList" prefetch="intent">
              <div className="font-bold hover:text-gray-500">Work Order</div>{" "}
            </Link>
            <Link to="/customerList" prefetch="intent">
              <div className="font-bold hover:text-gray-500">Document</div>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
