"use client";

import { useContext } from "react";
import { ReservationContext } from "../_context/ResrvationContext";

function useReservation() {
  const context = useContext(ReservationContext);

  if (context === undefined)
    throw new Error("useReservation must be used within a ReservationProvider");
  return context;
}

export default useReservation;
