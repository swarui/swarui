import React from "react";
import Bootstrap from "../assets/Bootstrap.png";
import Python from "../assets/Python.png";
import Tailwind from "../assets/Tailwind.png";
import Javascript from "../assets/Javascript.png";
import React1 from "../assets/React1.png";
import Css from "../assets/Css.png";
import Html from "../assets/Html.png";
import Figma from "../assets/Figma.png";

export default function Skills() {
  return (
    <div
      style={{ fontFamily: "Afacad" }}
      id="projects"
      className="max-w-[780px] w-[90%] mx-auto py-16"
    >
      <h1 className="text-left text-4xl font-bold text-white mb-2">
        Projects
      </h1>
      <p className="text-left text-gray-400 mb-12">
        My Skillset and Technologies
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-4 gap-5 text-center mt-20">
        <button
          style={{
            backgroundColor: "#3b3b3b",
            padding: "10px 19px",
            borderRadius: "5px",
            fontFamily: "Afacad",
            fontSize: "17px",
            fontWeight: "500",
            border: "1px solid black",
            display: "flex",
            alignItems: "center", // This centers the items vertically
            gap: "8px", // Adjust the space between the image and text
          }}
        >
          <img src={Javascript} className="w-5 h-5" alt="" />
          Javascript
        </button>

        <button
          style={{
            backgroundColor: "#3b3b3b",
            padding: "10px 35px",
            borderRadius: "5px",
            fontFamily: "Afacad",
            fontSize: "17px",
            fontWeight: "400",
            border: "1px solid black",
            display: "flex",
            alignItems: "center", // This centers the items vertically
            gap: "8px", // Adjust the space between the image and text
          }}
        >
          <img src={Html} className="w-5 h-5" alt="" />
          Html
        </button>

        <button
          style={{
            backgroundColor: "#3b3b3b",
            padding: "10px 40px",
            borderRadius: "5px",
            fontFamily: "Afacad",
            fontSize: "17px",
            fontWeight: "500",
            border: "1px solid black",
            display: "flex",
            alignItems: "center", // This centers the items vertically
            gap: "8px", // Adjust the space between the image and text
          }}
        >
          <img src={Css} className="w-6 h-6" alt="" />
          Css
        </button>
        <button
          style={{
            backgroundColor: "#3b3b3b",
            padding: "10px 29px",
            borderRadius: "5px",
            fontFamily: "Afacad",
            fontSize: "17px",
            fontWeight: "500",
            border: "1px solid black",
            display: "flex",
            alignItems: "center", // This centers the items vertically
            gap: "8px", // Adjust the space between the image and text
          }}
        >
          <img src={React1} className="w-5 h-5" alt="" />
          React
        </button>

        <button
          style={{
            backgroundColor: "#3b3b3b",
            padding: "10px 19px",
            borderRadius: "5px",
            fontFamily: "Afacad",
            fontSize: "17px",
            fontWeight: "500",
            border: "1px solid black",
            display: "flex",
            alignItems: "center", // This centers the items vertically
            gap: "8px", // Adjust the space between the image and text
          }}
        >
          <img src={Tailwind} className="w-5 h-5" alt="" />
          Tailwind
        </button>
        <button
          style={{
            backgroundColor: "#3b3b3b",
            padding: "10px 19px",
            borderRadius: "5px",
            fontFamily: "Afacad",
            fontSize: "17px",
            fontWeight: "500",
            border: "1px solid black",
            display: "flex",
            alignItems: "center", // This centers the items vertically
            gap: "8px", // Adjust the space between the image and text
          }}
        >
          <img src={Bootstrap} className="w-5 h-5" alt="" />
          Bootstrap
        </button>

        <button
          style={{
            backgroundColor: "#3b3b3b",
            padding: "10px 25px",
            borderRadius: "5px",
            fontFamily: "Afacad",
            fontSize: "17px",
            fontWeight: "500",
            border: "1px solid black",
            display: "flex",
            alignItems: "center", // This centers the items vertically
            gap: "11px", // Adjust the space between the image and text
          }}
        >
          <img src={Python} className="w-5 h-5" alt="" />
          Python
        </button>
        <button
          style={{
            backgroundColor: "#3b3b3b",
            padding: "10px 25px",
            borderRadius: "5px",
            fontFamily: "Afacad",
            fontSize: "17px",
            fontWeight: "500",
            border: "1px solid black",
            display: "flex",
            alignItems: "center", // This centers the items vertically
            gap: "11px", // Adjust the space between the image and text
          }}
        >
          <img src={Figma} className="w-5 h-5" alt="" />
          Figma
        </button>
      </div>
    </div>
  );
}
