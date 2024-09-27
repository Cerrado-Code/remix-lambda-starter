import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center bg-white h-[100vh] text-black">
      <div className="mx-auto flex w-full flex-col justify-center px-5 pt-0 md:h-[unset] md:max-w-[50%] lg:h-[100vh] min-h-[100vh] lg:max-w-[50%] lg:px-6 ">
        <div className="my-auto mb-auto mt-8 flex flex-col md:mt-[70px] w-[350px] max-w-[450px] mx-auto md:max-w-[450px] lg:mt-[130px] lg:max-w-[450px] shadow-xl p-5 rounded-lg">
          <p className="text-[32px] font-bold text-black self-center">Login</p>
          <div className="mt-8">
            <button
              className="inline-flex items-center justify-center whitespace-nowrap  text-sm 
              font-medium border border-gray-300 shadow-md hover:bg-slate-50  rounded-md h-10 px-4 w-full text-zinc-950 py-6 active:bg-slate-100 my-1"
              type="submit"
            >
              <span className="mr-2"></span>
              <span className="text-black">Google</span>
            </button>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap  text-sm 
              font-medium border border-gray-300 shadow-md hover:bg-slate-50  rounded-md h-10 px-4 w-full text-zinc-950 py-6 active:bg-slate-100 my-1"
              type="submit"
            >
              <span className="mr-2"></span>
              <span className="text-black">Facebook</span>
            </button>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap  text-sm 
              font-medium border border-gray-300 shadow-md hover:bg-slate-50  rounded-md h-10 px-4 w-full text-zinc-950 py-6 active:bg-slate-100 my-1"
              type="submit"
            >
              <span className="mr-2"></span>
              <span className="text-black">Instagram</span>
            </button>
          </div>
          <div className="relative my-4">
            <div className="relative flex items-center py-1">
              <div className="grow border-t border-zinc-200"></div>
              <div className="grow border-t border-zinc-200"></div>
            </div>
          </div>
          <div>
            <div className="grid gap-5">
              <div className="grid gap-1">
                <p>Email</p>
                <input
                  className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0"
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  name="email"
                />
                <p>Password</p>
                <input
                  id="password"
                  placeholder="Password"
                  type="password"
                  className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border
                   border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950
                    placeholder:text-zinc-400 focus:outline-0 "
                  name="password"
                />
              </div>
              <div className="flex flex-col justify-center">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap  text-sm 
              font-medium border border-gray-300 shadow-md hover:bg-slate-50  rounded-md h-10 px-4 w-full text-zinc-950 py-6 active:bg-slate-100"
                type="submit"
              >
                Login
              </button>
              <p className="text-md hover:text-slate-600 cursor-pointer self-center">Ainda não é cliente? Cadastre-se</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
