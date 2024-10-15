import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./searchbar.css";
//import { words } from "@/lib/data";

const Searchbar = ({ search, setSearch, fetchproducts }) => {
  return (
    <div className="searchbar relative">
      <div className="relative">
        <input
          type="search"
          value={search}
          placeholder="Type Here"
          className=" inputfield p-4 rounded-full bg-slate-800 text-white"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={()=>fetchproducts()}
          className=" searchbutton absolute right-1 -translate-y-1/2 p-4 bg-slate-600 rounded-full"
        >
          <AiOutlineSearch />
        </button>
      </div>
    </div>
    // <form className=" searchbar relative">

    // {/* {activeSearch.length > 0 && (
    //   <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
    //     {activeSearch.map((s) => (
    //       <span>{s}</span>
    //     ))}
    //   </div>
    // )} */}
    // </form>
  );
};

export default Searchbar;
