import { useState } from "react";
// import { Link } from "react-router-dom";
import Navimg from "../imges/images.jpeg";
import bars from "../imges/Path.png";

export const Nav = () => {
  const [logo, setLogo] = useState(false);

  return (
    <>
      <header className="flex justify-around ite py-4  w-full mt-3">
        <span className="flex justify-between">
          <img src={bars} alt="Nav img" />
          <h2 className="ml-5 font-semibold">logoispsum</h2>
        </span>

        <nav className="hidden sm:inline-flex gap-x-4 text-gray-900 text-xl font-medium">
          <span className="hover:text-blue-700 hover:underline">Home</span>

          <span className="hover:text-blue-700 hover:underline">Features </span>
          <span className="hover:text-blue-700 hover:underline">Pricing</span>

          <span className="hover:text-blue-700 hover:underline">Blog</span>
        </nav>

        <nav>
          <button className="bg-[#FF7143] text-white w-32 h-11 rounded-xl sm:inline-block hidden   ">
            GetStarted
          </button>
        </nav>

        <span onClick={() => setLogo(!logo)} className="sm:hidden inline-block">
          <img src={Navimg} alt="" className="w-10" />
        </span>
      </header>

      {logo ? (
        <div className="bg-blue-300 text-center sm:hidden ">
          <nav className="flex flex-col gap-4 text-gray-600 text-xl font-medium">
            <span className="hover:text-blue-700 hover:underline">Home</span>

            <span className="hover:text-blue-700 hover:underline">
              Features{" "}
            </span>
            <span className="hover:text-blue-700 hover:underline">Pricing</span>
            <span className="hover:text-blue-700 hover:underline">Blog</span>
          </nav>

          <nav>
            <button className="bg-[#FF7143] text-white mt-3 w-32 h-11 rounded-xl  ">
              GetStarted
            </button>
          </nav>
        </div>
      ) : null}
    </>
  );
};
