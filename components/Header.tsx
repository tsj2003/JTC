"use client";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import HeaderTop from "./HeaderTop";
import Image from "next/image";
import SearchInput from "./SearchInput";
import Link from "next/link";
import dynamic from "next/dynamic";
import { signOut, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useWishlistStore } from "@/app/_zustand/wishlistStore";
import apiClient from "@/lib/api";
import { brand } from "@/lib/brand";
import { brandLinks, serviceLinks } from "@/lib/nav";
import FestiveBanner from "./FestiveBanner";
import WhatsAppGroupButton from "./WhatsAppGroupButton";

const CartElement = dynamic(() => import("./CartElement"));
const NotificationBell = dynamic(() => import("./NotificationBell"));
const HeartElement = dynamic(() => import("./HeartElement"));

const Header = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const { wishlist, setWishlist, wishQuantity } = useWishlistStore();

  const handleLogout = () => {
    setTimeout(() => signOut(), 1000);
    toast.success("Logout successful!");
  };

  const getWishlistByUserId = async (id: string) => {
    const response = await apiClient.get(`/api/wishlist/${id}`, {
      cache: "no-store",
    });
    const wishlistItems = await response.json();
    const productArray: {
      id: string;
      title: string;
      price: number;
      image: string;
      slug: string;
      stockAvailabillity: number;
    }[] = [];

    return;

    wishlistItems.map((item: any) =>
      productArray.push({
        id: item?.product?.id,
        title: item?.product?.title,
        price: item?.product?.price,
        image: item?.product?.mainImage,
        slug: item?.product?.slug,
        stockAvailabillity: item?.product?.inStock,
      })
    );

    setWishlist(productArray);
  };

  const getUserByEmail = async () => {
    if (session?.user?.email) {
      apiClient
        .get(`/api/users/email/${session?.user?.email}`, {
          cache: "no-store",
        })
        .then((response) => response.json())
        .then((data) => {
          getWishlistByUserId(data?.id);
        });
    }
  };

  useEffect(() => {
    getUserByEmail();
  }, [session?.user?.email, wishlist.length]);

  return (
    <header className="bg-brand-paper">
      <HeaderTop />
      {pathname.startsWith("/admin") === false && (
        <div className="mx-auto flex max-w-screen-2xl flex-col items-stretch gap-4 px-4 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-5">
          <Link href="/" className="flex flex-col items-center gap-1 lg:items-start">
            <Image
              src={brand.logo}
              width={96}
              height={96}
              alt={brand.logoAlt}
              className="h-16 w-16 object-contain sm:h-[4.5rem] sm:w-[4.5rem]"
              priority
            />
            <span className="text-center font-display text-2xl leading-none tracking-wide text-brand-ink sm:text-3xl lg:text-left">
              JUNEJA TRADING CORPORATION
            </span>
            <span className="font-hindi text-sm text-brand-copper">
              {brand.nameHi}
            </span>
          </Link>
          <div className="min-w-0 flex-1 lg:px-8">
            <SearchInput />
          </div>
          <div className="flex items-center justify-center gap-x-8">
            <NotificationBell />
            <HeartElement wishQuantity={wishQuantity} />
            <CartElement />
          </div>
        </div>
      )}
      {pathname.startsWith("/admin") === false && (
        <>
          <FestiveBanner />
          <nav aria-label="Categories" className="border-t border-brand-ink/10">
            <ul className="mx-auto flex max-w-screen-2xl gap-2 overflow-x-auto px-4 py-3 sm:px-8">
              {serviceLinks.map((item) => (
                <li key={item.href} className="shrink-0">
                  <Link
                    href={item.href}
                    className={`inline-flex min-h-11 items-center px-3 text-sm font-semibold ${
                      pathname === item.href ? "bg-brand-ink text-brand-cream" : "text-brand-ink hover:text-brand-copper"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Brands" className="border-t border-brand-ink/10">
            <ul className="mx-auto flex max-w-screen-2xl gap-2 overflow-x-auto px-4 py-3 sm:px-8">
              <li className="shrink-0 self-center pr-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-copper">
                Brands
              </li>
              {brandLinks.map((item) => (
                <li key={item.href} className="shrink-0">
                  <Link
                    href={item.href}
                    className={`inline-flex min-h-11 items-center px-3 text-sm font-semibold ${
                      pathname === item.href ? "bg-brand-ink text-brand-cream" : "text-brand-ink hover:text-brand-copper"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="border-t border-brand-ink/10 bg-brand-paper px-4 py-3 sm:px-8">
            <div className="mx-auto flex max-w-screen-2xl justify-center lg:justify-start">
              <WhatsAppGroupButton />
            </div>
          </div>
        </>
      )}
      {pathname.startsWith("/admin") === true && (
        <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-4 sm:px-8">
          <Link href="/" className="flex flex-col">
            <Image
              src={brand.logo}
              width={64}
              height={64}
              alt={brand.logoAlt}
              className="h-10 w-10 object-contain"
            />
            <span className="font-display text-lg text-brand-ink">
              JUNEJA TRADING CORPORATION
            </span>
          </Link>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="size-10">
              <Image
                src="/randomuser.jpg"
                alt="Admin profile"
                width={40}
                height={40}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <ul tabIndex={0} className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
              <li>
                <Link href="/admin">Dashboard</Link>
              </li>
              <li onClick={handleLogout}>
                <a href="#">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
