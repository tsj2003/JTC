import React from "react";
import CategoryItem from "./CategoryItem";
import Image from "next/image";
import { categoryMenuList } from "@/lib/utils";
import Heading from "./Heading";

const CategoryMenu = () => {
  return (
    <section className="bg-brand-ink py-10">
      <Heading title="BROWSE CATEGORIES" />
      <div className="mx-auto grid max-w-screen-2xl grid-cols-2 gap-3 px-4 py-10 sm:grid-cols-3 sm:px-8 md:grid-cols-4">
        {categoryMenuList.map((item) => (
          <CategoryItem title={item.title} key={item.id} href={item.href}>
            <Image src={item.src} width={48} height={48} alt={item.title} />
          </CategoryItem>
        ))}
      </div>
    </section>
  );
};

export default CategoryMenu;
