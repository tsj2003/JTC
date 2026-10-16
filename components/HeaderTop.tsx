"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { FaHeadphones } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { brand } from "@/lib/brand";
import LanguageToggle from "./LanguageToggle";

const HeaderTop = () => {
  const { data: session }: any = useSession();

  const handleLogout = () => {
    setTimeout(() => signOut(), 1000);
    toast.success("Logout successful!");
  };
  return (
    <div className="bg-brand-ink text-brand-cream">
      <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-sm sm:px-8">
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <li>
            <a href={brand.phoneHref} className="flex min-h-11 items-center gap-x-2 font-semibold">
              <FaHeadphones className="text-brand-amber" />
              {brand.phone}
            </a>
          </li>
          <li>
            <a href={brand.phone2Href} className="flex min-h-11 items-center gap-x-2 font-semibold">
              <FaHeadphones className="text-brand-amber" />
              {brand.phone2}
            </a>
          </li>
          <li>
            <a href={brand.emailHref} className="flex min-h-11 items-center gap-x-2 font-semibold">
              <FaRegEnvelope className="text-brand-amber" />
              {brand.email}
            </a>
          </li>
          <li>
            <a
              href={brand.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-11 items-center gap-x-2 font-semibold"
            >
              <FaLocationDot className="text-brand-amber" />
              Shop No. 6, Azad Market, Madiya Pangarha
            </a>
          </li>
          <li className="hidden md:block">
            <span className="flex min-h-11 items-center font-semibold">{brand.hours}</span>
          </li>
        </ul>
        <div className="flex items-center gap-x-4">
          <LanguageToggle />
        <ul className="flex items-center gap-x-4 font-semibold">
          {!session ? (
            <>
              <li>
                <Link href="/login" className="flex min-h-11 items-center gap-x-2">
                  <FaRegUser className="text-brand-amber" />
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="flex min-h-11 items-center gap-x-2">
                  Register
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button onClick={() => handleLogout()} className="flex min-h-11 items-center gap-x-2">
                <FaRegUser className="text-brand-amber" />
                Log out
              </button>
            </li>
          )}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
