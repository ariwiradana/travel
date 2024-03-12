import { priceFormatterIDR, priceFormatterUSD } from "@/lib/formatter";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ slug, id, price, minimum_pax, title, image_url, type }) => {
  return (
    <Link href={`/${type}/${slug}`}>
      <div className="w-full h-[14rem] md:h-[16rem] group lg:h-[20rem] rounded-2xl overflow-hidden relative">
        <Image
          priority
          className="transform group-hover:scale-105 transition-transform ease-in-out duration-500 object-cover object-bottom rounded-2xl overflow-hidden"
          alt={`${slug}-${id}`}
          fill
          src={image_url}
        />
      </div>
      <h4 className="text-black font-bold font-montserrat text-base md:text-lg lg:text-xl mt-3 mb-2 line-clamp-2">
        {title}
      </h4>
      <div className="flex items-center flex-wrap gap-2">
        {type == "tours" ? (
          <>
            <p className="border border-app-black-500 text-app-black-500 md:text-sm py-1 px-4 rounded-full font-montserrat font-semibold text-xs">
              {priceFormatterUSD(price)} / pax
            </p>
            <p className="border border-app-black-500 text-app-black-500 md:text-sm py-1 px-4 rounded-full font-montserrat font-semibold text-xs">
              Minimum {minimum_pax} pax
            </p>
          </>
        ) : (
          <>
            {price?.from == price?.to ? (
              <>
                <p className="border border-app-black-500 text-app-black-500 text-sm py-1 px-4 rounded-full font-montserrat font-semibold">
                  {priceFormatterIDR(price?.from)}
                </p>
              </>
            ) : (
              <>
                <p className="border border-app-black-500 text-app-black-500 text-xs md:text-sm py-1 px-4 rounded-full font-montserrat font-semibold whitespace-nowrap">
                  from {priceFormatterIDR(price?.from)}
                </p>
                <p className="border border-app-black-500 text-app-black-500 text-xs md:text-sm py-1 px-4 rounded-full font-montserrat font-semibold whitespace-nowrap">
                  to {priceFormatterIDR(price?.to)}
                </p>
              </>
            )}
          </>
        )}
      </div>
    </Link>
  );
};

export default Card;
