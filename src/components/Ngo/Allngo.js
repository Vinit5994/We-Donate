/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import dummyImage from "../../images/dummy.webp";
import { getNgos } from "../../firebase";
import Logo from "../Logo";
const Allngo = () => {
  const [dashboardAnimation, setDashboardAnimation] = useState("");
  const [ngos, setNgos] = useState();

  useEffect(() => {
    setTimeout(() => {
      setDashboardAnimation("hidden");
    }, 1000);
    getNgos().then(({ success, ngos }) => {
      if (success) setNgos(ngos);
    });
  }, []);

  return (
    <>
      <div>
        
        <div className="flex border-b-4 drop-shadow-lg justify-between px-12">
          <Link to="/">
            <div className="flex m-4">
              <Logo dimension={2} />
              <p className="flex items-center font-bold text-xl justify-center mx-3">
                DoNation
              </p>
            </div>
          </Link>

          <div className="flex justify-center items-center ">
            <ul className="flex items-center">
              <a href="/about">
                <li className="mx-4 -my-2 font-semibold hover:underline cursor-pointer text-lg">
                  About
                </li>
              </a>
              <Link to="/ngo">
                <li className="mx-4 -my-2 font-semibold hover:underline cursor-pointer text-lg">
                  NGOs
                </li>
              </Link>
              {/* <a href="/testimonials">
                <li className="mx-4 -my-2 font-semibold hover:underline cursor-pointer text-lg">
                  Testimonials
                </li>
              </a> */}
            </ul>
          </div>
        </div>
      </div>
      {/* Animation of dahboard for showing palete */}
      <div className={`my-24 sm:mt-8 px-16 ${dashboardAnimation}`}>
        <div class=" shadow-2xl rounded-md p-12 max-w-lg w-full ">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-slate-300 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-300 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-300 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-300 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for the showcase of exact data */}
      <div
        className={`${
          dashboardAnimation === "" ? "hidden" : ""
        }  mt-24 sm:mt-8`}
      >
        <div className=" px-2 xsm:px-12 grid xlg:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-12 ">
          {ngos?.map(({ uid, name, image, mobile, description }) => (
            <div
              key={uid}
              className="shadow-[0_1px_16px_2px_rgba(0,0,0,.2)] rounded-xl  px-2 sm:px-8 py-6 flex  flex-col gap-6 bg-slate-50  hover:text-colorPrimary hover:border-colorPrimary hover:border-2 transition-all duration-200 ease-in-out "
            >
              <div className="flex gap-10">
                <img
                  src={image || dummyImage}
                  className="w-24 h-24  rounded-full shadow-2xl"
                />
                <div className="flex flex-col gap-1">
                  <div className="text-2xl tracking-widest text-neutral-500 font-light">
                    {name}
                  </div>
                  <div className="text-base tracking-wide">
                    <span className="text-lg font-semibold tracking-wider pr-1">
                      Phone No :
                    </span>
                    {mobile}
                  </div>
                </div>
              </div>
              <div>
                <span className="text-xl font-medium ">Description:</span>
                <div className="text-neutral-700 pt-2">{description}</div>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-0  justify-between items-center ">
                <div>
                  <Link
                    to={`/ngo/id/${uid}`}
                    className="bg-gradient-to-r from-colorPrimary  to-colorSecondary text-white rounded-2xl px-6 py-2 text-xl font-medium  hover:border-2 transition-all duration-200 ease-in-out "
                  >
                    More info
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Allngo;
