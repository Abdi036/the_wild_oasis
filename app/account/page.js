import React from "react";
import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};

export default async function page() {
  const session = await auth();
  const firstname = session?.user?.name.split(" ")[0];
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome,{firstname}
    </h2>
  );
}
