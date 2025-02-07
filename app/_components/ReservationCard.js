import React from "react";

export default function ReservationCard({ bookings }) {
  const { id, guestId, startDate, endDate, numNights, totalPrice } = bookings;

  return (
    <div className="flex items-start gap-6 bg-primary-900 p-6 rounded-lg shadow-md">
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-accent-400">
          Reservation ID: {id}
        </h3>
        <p className="text-sm text-primary-200 mt-2">
          Guest ID: <span className="font-medium">{guestId}</span>
        </p>
        <p className="text-sm text-primary-200">
          Start Date: <span className="font-medium">{startDate}</span>
        </p>
        <p className="text-sm text-primary-200">
          End Date: <span className="font-medium">{endDate}</span>
        </p>
        <p className="text-sm text-primary-200">
          Number of Nights: <span className="font-medium">{numNights}</span>
        </p>
      </div>

      {/* Price Section */}
      <div className="flex flex-col items-end">
        <p className="text-lg font-bold text-accent-500">
          Total Price: ${totalPrice}
        </p>
        <button className="mt-4 px-4 py-2 bg-accent-500 text-primary-800 rounded-lg font-semibold hover:bg-accent-600 transition-all">
          View Details
        </button>
      </div>
    </div>
  );
}
