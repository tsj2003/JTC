"use client";
import { usePaginationStore } from "@/app/_zustand/paginationStore";
import React from "react";

const Pagination = () => {
  const { page, incrementPage, decrementPage } = usePaginationStore();
  return (
    <div className="join flex justify-center py-12">
      <button
        className="join-item btn btn-lg bg-brand-ink text-white hover:bg-white hover:text-brand-ink"
        onClick={() => decrementPage()}
      >
        «
      </button>
      <button className="join-item btn btn-lg bg-brand-ink text-white hover:bg-white hover:text-brand-ink">
        Page {page}
      </button>
      <button
        className="join-item btn btn-lg bg-brand-ink text-white hover:bg-white hover:text-brand-ink"
        onClick={() => incrementPage()}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
