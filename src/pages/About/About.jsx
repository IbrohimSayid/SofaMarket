import React from "react";

function About() {
  return (
    <>
      <div className="flex flex-col items-center h-screen pt-32  bg-gray-100">
        <h1 className="text-6xl font-bold text-gray-800">
          We love{" "}
          <span className="bg-blue-500 text-white px-2 py-1 rounded">
            comfy
          </span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-lg text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
          quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia
          optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo
          sed officiis ea tempore! Similique eos minima sit porro, ratione
          aspernatur!
        </p>
      </div>
    </>
  );
}

export default About;
