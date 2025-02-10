"use client";
import Image from "next/image";

export default function UpdateProfileForm({ children }) {
  const countryflag = "/https://flagcdn.com/w320/et.png";

  return (
    <form className="bg-primary-900 py-9 px-12 text-lg flex gap-6 flex-col">
      <div className="space-y-2">
        <label>Full Name</label>
        <input className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400" />
        <label>Email address</label>
        <input className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400" />

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="nationality">Where are you from?</label>

            <Image
              src={countryflag}
              alt="country flag"
              width={24}
              height={16}
              className="h-5 rounded-sm"
            />
          </div>

          {children}
        </div>

        <div className="space-y-2">
          <label htmlFor="nationalID">National ID</label>
          <input
            name="nationalID"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>
        <div className="flex justify-end items-center gap-6">
          <button className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            Update Profile
          </button>
        </div>
      </div>
    </form>
  );
}
