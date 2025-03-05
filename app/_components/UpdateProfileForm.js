"use client";

import Image from "next/image";
import { updateGuest } from "../_lib/actions";
import { useFormStatus } from "react-dom";

function UpdateProfileForm({ guest, children }) {
  const { fullname, email, nationality, nationalID, countryFlag } = guest;

  return (
    <form
      action={updateGuest}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label>Fullname</label>
        <input
          disabled
          name="fullname"
          defaultValue={fullname}
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>email</label>
        <input
          disabled
          name="email"
          defaultValue={email}
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          {countryFlag && (
            <Image
              src={countryFlag}
              width={40}
              height={40}
              alt="Country flag"
              className="h-5 rounded-sm"
            />
          )}
        </div>

        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          defaultValue={nationalID}
          name="nationalID"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <Button pendingLabel={"Updating details..."}>Update profile</Button>
      </div>
    </form>
  );
}

export default UpdateProfileForm;

function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      className={`bg-accent-500 px-8 py-4 text-primary-800 font-semibold  transition-all disabled:cursor-not-allowed ${
        pending
          ? "bg-gray-500 text-gray-300"
          : "bg-accent-500 hover:bg-accent-600"
      }`}
      disabled={pending}
    >
      {pending ? "Updating..." : "Update profile"}
    </button>
  );
}
