import React from "react";

const Navbar = () => (
    <nav class="flex items-center justify-between flex-wrap bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3">
    <div class="flex items-center flex-shrink-0 text-white mr-10">
      
      <span class="font-semibold text-xl tracking-tight font-mono">DirtyCode</span>
    </div>
    
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">


        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-lime-50 hover:text-black mr-4">
          About
        </a>


        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-lime-50 hover:text-black mr-4">
          Statistics
        </a>


        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-lime-50 hover:text-black">
          Contact Us
        </a>


      </div>
      <div>
        <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white 
        hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0">Download</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
