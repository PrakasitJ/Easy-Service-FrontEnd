import { useEffect, useRef, useState } from "react";
import { DOMAIN } from "./server/domain";
import { Link } from "@remix-run/react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [success, setSuccess] = useState(false);
  const [fetching, setFetching] = useState(false);
  const link = useRef<HTMLAnchorElement>(null);

  const handleLogin = async () => {
    const response = await fetch(DOMAIN + "/user/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data: LoginResponse = await response.json();
    if (data.error) {
      setError(data.error);
    } else {
      setSuccess(true);
      setError("Log in success");
      if (link.current) link.current.click();
    }
  };

  useEffect(() => {
    if (!fetching) return;

    if (username === "") {
      setSuccess(false);
      setError("Username is required");
    } else if (password === "") {
      setSuccess(false);
      setError("Password is required");
    } else if (fetching) {
      handleLogin();
    }
    setFetching(false);
  }, [fetching]);

  return (
    <div className="flex flex-col justify-center items-center w-svw h-svh bg-gray-50">
      <div className="flex flex-col justify-center items-center w-[25rem] h-fit gap-5 bg-white rounded-xl shadow-xl p-10">
        <h1 className="mb-4 font-bold text-2xl text-black">Login to your account</h1>
        <input
          className="w-full h-fit bg-[#FAFAFA] p-2 pl-4 text-black rounded-xl font-bold"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-full h-fit bg-[#FAFAFA] p-2 pl-4 text-black rounded-xl font-bold"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-row w-fit gap-2 items-center justify-center">
            <input type="checkbox" />
            <h1 className="w-full font-medium text-xs text-black">Remember me</h1>
          </div>
          <h1 className="w-fit text-[#9FA324] text-xs font-bold">
            Forget Password?
          </h1>
        </div>

        {error != "" ? (
          <h1
            className={`translate-y-2 ${
              success ? "text-green-500" : "text-red-500"
            }`}
          >
            {error}
          </h1>
        ) : (
          ""
        )}

        <button
          className="w-full h-fit bg-[#DEE33E] text-black font-bold rounded-lg p-2 mt-2 hover:bg-[#e5e960] active:scale-95"
          onClick={(e) => {
            e.preventDefault();
            setFetching(true);
          }}
        >
          Sign in with email
        </button>

        <div className="flex flex-row w-full justify-center gap-2">
          <h1 className="w-fit text-[#718096] text-xs">
            Don’t have an account?
          </h1>
          <Link to="/register" prefetch="intent">
            <h1 className="w-fit text-[#9FA324] text-xs font-bold">
              Get Started
            </h1>
          </Link>
        </div>

        <Link
          ref={link}
          to="/customerList"
          prefetch="intent"
          className="fixed bottom-0"
        />
      </div>
    </div>
  );
}
