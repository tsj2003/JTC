"use client"
import { useWishlistStore } from "@/app/_zustand/wishlistStore";
import apiClient from "@/lib/api";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export const WishlistModule = () => {
  const { data: session } = useSession();
  const { wishlist, setWishlist } = useWishlistStore();

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
      slug: string
      stockAvailabillity: number;
    }[] = [];

    if (Array.isArray(wishlistItems)) {
      wishlistItems.map((item: any) => productArray.push({ id: item?.product?.id, title: item?.product?.title, price: item?.product?.price, image: item?.product?.mainImage, slug: item?.product?.slug, stockAvailabillity: item?.product?.inStock }));
    }

    setWishlist(productArray);
  };

  const getUserByEmail = async () => {
    if (session?.user?.email) {
      apiClient.get(`/api/users/email/${session?.user?.email}`, {
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

  if (!session) {
    return (
      <div className="py-10 text-center">
        <p className="text-brand-soot">Log in to see saved items.</p>
        <Link href="/login" className="mt-4 inline-flex min-h-12 items-center bg-brand-ink px-6 font-bold text-white hover:bg-brand-copper">
          Log in
        </Link>
      </div>
    );
  }

  if (wishlist.length === 0) {
    return (
      <p className="py-10 text-center text-brand-soot">
        No saved items yet.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-brand-ink/10">
      {wishlist.map((item) => (
        <li key={item.id} className="flex items-center gap-4 py-4">
          <Image
            src={item.image ? `/${item.image}` : "/product_placeholder.jpg"}
            alt={item.title}
            width={80}
            height={80}
            className="size-20 object-cover"
          />
          <Link href={`/product/${item.slug}`} className="font-semibold hover:text-brand-copper">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
