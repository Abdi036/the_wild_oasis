"use client";

import { createContext, useState } from "react";

const ReservationContext = createContext();

const initialState = { from: null, to: null };

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);

  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

export { ReservationContext, ReservationProvider };
