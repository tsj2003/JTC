"use client";
import React from "react";
import { useSortStore } from "@/app/_zustand/sortStore";

const SortBy = () => {
  const { sortBy, changeSortBy } = useSortStore();

  return (
    <div className="flex w-full items-center gap-x-3 max-lg:flex-col max-lg:items-start">
      <h3 className="text-base">Sort by:</h3>
      <select
        defaultValue={sortBy}
        onChange={(e) => changeSortBy(e.target.value)}
        className="select select-bordered w-40 border-2 border-gray-400 bg-white px-2 py-2 text-base focus:outline-none max-lg:w-full"
        name="sort"
        aria-label="Sort products"
      >
        <option value="defaultSort">Default</option>
        <option value="titleAsc">Sort A-Z</option>
        <option value="titleDesc">Sort Z-A</option>
        <option value="lowPrice">Lowest Price</option>
        <option value="highPrice">Highest Price</option>
      </select>
    </div>
  );
};

export default SortBy;
