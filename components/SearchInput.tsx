"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { sanitize } from "@/lib/sanitize";

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const router = useRouter();

  const searchProducts = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sanitizedSearch = sanitize(searchInput);
    router.push(`/search?search=${encodeURIComponent(sanitizedSearch)}`);
    setSearchInput("");
  };

  return (
    <form className="flex w-full justify-center" onSubmit={searchProducts}>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search fans, TV, fridge, AC..."
        className="input input-bordered w-full rounded-r-none bg-white outline-none focus:outline-none"
      />
      <button
        type="submit"
        className="btn rounded-l-none rounded-r-xl bg-brand-ink text-white hover:bg-brand-copper"
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
