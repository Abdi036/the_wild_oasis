import ReservationCard from "@/app/_components/ReservationCard";
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  const session = await auth();
  const bookings = await getBookings(session.user.guestID);

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
