import React from "react";
import { FaDownload, FaEye } from "react-icons/fa";
import LightAcrossButton from "../common/buttons/lightAcross/LightAcrossButton";
import CV from './Resume-1.pdf';

const CVButton = () => {
  return (
    <div className="relative group py-2">
      {/* Main Button */}
      {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
    My Resume 
      </button> */}
      <LightAcrossButton text={"My Resume"} />

      {/* Dropdown Menu */}
      <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md hidden group-hover:block">
        <ul className="py-2 w-40 2xl:w-52">
          {/* View CV */}
          <li>
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-800 2xl:text-[20px]"
            >
              <FaEye className="mr-2 text-green-500" />
              View 
            </a>
          </li>

          {/* Download CV */}
          <li>
            <a
              href={CV}
              download="hFahad_CV.pdf"
              className="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-800 2xl:text-[20px]"
            >
              <FaDownload className="mr-2 text-blue-500" />
              Download 
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CVButton;
