import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col space-y-4 p-5 justify-center align-middle min-h-screen">
      <h1 className="text-center font-bold text-3xl">
        Welcome to Easy service
      </h1>
      <Link to="/login" prefetch="intent">
        <h2 className="text-center text-red-500 text-xl">Login Page</h2>
      </Link>
    </div>
  );
}
