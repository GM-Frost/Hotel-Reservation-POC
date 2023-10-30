"use client";
import Addbutton from "@/components/Addbutton";
import Datatable from "@/components/Datatable";
import SearchComponent from "@/components/SearchComponent";
import React, { useState } from "react";

const Homepage = () => {
  const [searchFilter, setSearchFilter] = useState("");
  const [sortFilter, setSortFilter] = useState("firstName");
  return (
    <>
      <h1 className="text-2xl font-bold flex justify-center items-center">
        POC for Reservations
      </h1>
      <div className="flex justify-end mr-3 flex-wrap">
        <Addbutton />
      </div>
      <SearchComponent
        onSearchChange={setSearchFilter}
        onSortChange={setSortFilter}
        currentSort={sortFilter}
      />
      <div className="justify-center flex-wrap w-full">
        <Datatable search={searchFilter} sort={sortFilter} />
      </div>
    </>
  );
};

export default Homepage;
