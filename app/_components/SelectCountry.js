import { getCountries } from "../_lib/data-service";

async function SelectCountry({ defaultCountry, name, id, className }) {
  const countries = await getCountries();
  const sortedCountries = countries.sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );

  const defaultCountryData = sortedCountries.find(
    (country) => country.name.common === defaultCountry
  );
  const flag = defaultCountryData?.flags?.svg ?? "";

  return (
    <select
      name={name}
      id={id}
      defaultValue={defaultCountry}
      className={className}
    >
      <option value="">Select country...</option>
      {sortedCountries.map((c) => (
        <option key={c.name.common} value={`${c.name.common}%${c.flags?.svg}`}>
          {c.name.common}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
