// import React from "react";
// import { getCountries } from "../_lib/data-service";

// export default async function SelectCountry({
//   defaultCountry,
//   name,
//   id,
//   className,
// }) {
//   const Countries = await getCountries();

//   const defaultCountryData = Countries.find(
//     (country) => country.name.common === defaultCountry
//   );
//   const flag = defaultCountryData?.flags?.png ?? "";

//   return (
//     <select
//       name={name}
//       id={id}
//       defaultValue={`${defaultCountry}%${flag}`}
//       className={className}
//     >
//       <option value="">Select country...</option>
//       {Countries.map((country) => (
//         <option
//           key={country.name.common}
//           value={`${country.name.common}%${country.flags.png}`}
//         >
//           {country.name.common}
//         </option>
//       ))}
//     </select>
//   );
// }

import React from "react";
import { getCountries } from "../_lib/data-service";

export default async function SelectCountry({
  defaultCountry,
  name,
  id,
  className,
}) {
  const Countries = await getCountries();

  const sortedCountries = Countries.sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );

  const defaultCountryData = sortedCountries.find(
    (country) => country.name.common === defaultCountry
  );
  const flag = defaultCountryData?.flags?.png ?? "";

  return (
    <select
      name={name}
      id={id}
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value="">Select country...</option>
      {sortedCountries.map((country) => (
        <option
          key={country.name.common}
          value={`${country.name.common}%${country.flags.png}`}
        >
          {country.name.common}
        </option>
      ))}
    </select>
  );
}
