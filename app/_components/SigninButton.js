import Image from "next/image";
import React from "react";
import githubIcon from "../../public/github.png";
import { signInAction } from "../_lib/actions";

export default function SigninButton() {
  return (
    <form action={signInAction}>
      <button className=" flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium hover:bg-primary-600">
        <Image
          src={githubIcon}
          width={40}
          height={40}
          alt="Github Logo"
          className="bg-primary-100 rounded-full"
        />
        Continue with Github
      </button>
    </form>
  );
}
