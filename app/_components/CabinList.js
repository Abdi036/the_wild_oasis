import React from "react";
import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";

export default async function CabinList() {
  const cabins = await getCabins();

  if (cabins.length < 0) {
    return <p className="text-primary-200 font-extrabold">No Cabins Found!</p>;
  }
  
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard key={cabin.id} cabin={cabin} />
      ))}
    </div>
  );
}
