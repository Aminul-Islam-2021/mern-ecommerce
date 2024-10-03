import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [isLogIn, setIsLogIn] = useState(true);
  return (
    <>
      <div className=" flex justify-between bg-white p-3 gap-2 items-center border-b fixed top-0 left-0 right-0 z-10 lg:px-36">
        <div>Logo</div>
        <div className=" hidden md:flex gap-3 lg:gap-6 ">
          <Link to={"/"}>Home</Link>
          <Link to={"/products"}>Products</Link>
          <Link to={"/blogs"}>Blogs</Link>
          <Link to={"/test"}>Test</Link>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search..."
            className=" border rounded-full w-full p-1 outline-none px-6 lg:w-72"
          />
        </div>
        <div className=" flex gap-4 items-center lg:gap-8 ">
          <p>
            <FaRegHeart size={18} />
          </p>
          <div className=" relative">
            <GrCart size={18} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full h-4 w-4 flex items-center justify-center">
                4
              </span>
          </div>
          {isLogIn ? (
            <>
              <CgProfile size={18}/>
            </>
          ) : (
            <>
              <p>signin</p>
              <p>signup</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
