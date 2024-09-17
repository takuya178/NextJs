"use client";

import React from "react";
import axios from "axios";

const About = () => {
  const getData = async () => {
    const response = await axios.get("/api");
    console.log(response);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={getData}
        >
          getDate
        </button>
      </div>
    </main>
  )
}

export default About;
