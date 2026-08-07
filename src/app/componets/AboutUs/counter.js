"use client";
import React from "react";

import CountUp from "react-countup";

export default function Counter() {
  return (
    <div className="flex flex-col mb-4">
      <span className="mb-0 text-2xl font-bold text-blue-800">
        <CountUp
          className="text-6xl font-bold counter-value"
          start={1}
          end={10}
        ></CountUp>
        +
      </span>
      <span className="self-end mt-2 font-medium ms-2">
        tahun lebih, <br /> berpengalaman <br />
        di industri IT
      </span>
    </div>
  );
}
