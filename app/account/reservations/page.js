import ReservationCard from "@/app/_components/ReservationCard";
import Link from "next/link";
import React from "react";

export default function Page() {
  const bookings = [];

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>
      {bookings.length === 0 ? (
        <div>
          <p className="text-lg mb-4">You have no reservations yet.</p>
          <Link href="/cabins" className="underline text-accent-500">
            Luxury cabins &rarr;
          </Link>
        </div>
      ) : (
        <ul className="space-y-6">
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
