import React from "react";
import { Logo } from "../Logo";

export const HeaderCart: React.FC = () => (
  <div className="border-t border-greyscale-100 w-full min-w-fit px-16">
    <div className="w-container mx-auto flex items-center h-[92px] ">
      <Logo className="text-greyscale-900"/>
      <div className="mx-auto flex">
        <div className="h-[45px] px-4 w-96 flex items-center rounded-l-md border-t border-l border-b border-greyscale-100">
          <svg
            className="mr-2 text-greyscale-900"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.4999 18L13.8749 14.375"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="text-[15px] leading-[140%] text-greyscale-500">Search</span>
        </div>
        <div className="rounded-r-md bg-primary text-white flex items-center justify-center px-6 py-[14px] text-bodysmall leading-[120%] font-semibold">
          Search
        </div>
      </div>

      <div>
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Heart">
            <path
              id="Vector"
              d="M15.9995 28.5722C-10.6667 13.8333 7.99999 -2.16668 15.9995 7.95072C24 -2.16669 42.6666 13.8333 15.9995 28.5722Z"
              stroke="#1A1A1A"
              stroke-width="1.5"
            />
          </g>
        </svg>
      </div>
      <div className="w-[1px] h-6 bg-greyscale-200 mx-4"></div>
      <div className="relative">
        <svg
          width="34"
          height="35"
          viewBox="0 0 34 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Bag">
            <path
              id="Rectangle"
              d="M11.3333 14.6667H7.08333L4.25 30.25H29.75L26.9167 14.6667H22.6667M11.3333 14.6667V10.4167C11.3333 7.28705 13.8704 4.75 17 4.75V4.75C20.1296 4.75 22.6667 7.28705 22.6667 10.4167V14.6667M11.3333 14.6667H22.6667M11.3333 14.6667V18.9167M22.6667 14.6667V18.9167"
              stroke="#1A1A1A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
        <div className="flex items-center justify-center absolute px-1 top-[-2px] right-[-2px] text-[10px] leading-[10px] h-[20px] min-w-[20px] border border-white text-white bg-primary-hard rounded-full">
          2
        </div>
      </div>
      <div className="ml-3">
        <div className="text-greyscale-700 text-[11px] leading-[120%] mb-[7px]">
          Shopping cart:
        </div>
        <div className="text-greyscale-900 text-[14px] leading-none font-medium">
          $57.00
        </div>
      </div>
    </div>
  </div>
);
