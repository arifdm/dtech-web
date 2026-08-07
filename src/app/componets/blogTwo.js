"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "../Data/data";
import { FaArrowRight } from "react-icons/fa";

export default function BlogTwo({ className, title }) {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 pb-8 text-center">
        {title === false ? (
          ""
        ) : (
          <h6 className="mb-2 text-base text-indigo-600">Blog</h6>
        )}
        <h3 className="mb-6 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">
          Blog Or News
        </h3>

        <p className="max-w-xl mx-auto text-slate-400">
          Start working with Tailwind CSS that can provide everything you need
          to generate awareness, drive traffic, connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
        {blogData.slice(0, 3).map((data, index) => {
          return (
            <div
              className="relative overflow-hidden rounded-md shadow blog dark:shadow-gray-800"
              key={index}
            >
              <Image
                src={data.Image}
                width={0}
                height={0}
                alt=""
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  height: "auto"
                }} />

              <div className="p-6 bg-white content">
                <Link
                  href={`/blog-detail/${data.id}`}
                  className="text-lg font-medium duration-500 ease-in-out title h5 hover:text-indigo-600"
                >
                  {data.title}
                </Link>
                <p className="mt-3 text-slate-400">{data.desc}</p>

                <div className="mt-4">
                  <Link
                    href={`/blog-detail/${data.id}`}
                    className="relative inline-flex items-center font-normal tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                  >
                    Read More <FaArrowRight className="ms-2 text-[10px]" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
