import Image from "next/image";

export default function Page() {
  const countries = [
    { code: "pt", name: "Portugal" },
    { code: "us", name: "United States" },
    { code: "fr", name: "France" },
    { code: "de", name: "Germany" },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update Your Guest Profile
      </h2>
      <p className="text-lg mb-8">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <form className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col rounded-2xl shadow-lg">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block mb-2 font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            className="w-full p-4 bg-primary-800 rounded-md text-primary-100 border border-primary-700 focus:outline-none focus:ring focus:ring-accent-400"
            required
          />
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="emailAddress" className="block mb-2 font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            placeholder="Enter your email"
            className="w-full p-4 bg-primary-800 rounded-md text-primary-100 border border-primary-700 focus:outline-none focus:ring focus:ring-accent-400"
            required
          />
        </div>

        {/* Where are you from? */}
        <div>
          <label htmlFor="country" className="block mb-2 font-medium">
            Where are you from?
          </label>
          <div className="flex items-center gap-4">
            <select
              id="country"
              name="country"
              className="w-full p-4 bg-primary-800 rounded-md text-primary-100 border border-primary-700 focus:outline-none focus:ring focus:ring-accent-400"
              required
            >
              {countries.map((country) => (
                <option key={country.code} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* National ID Number */}
        <div>
          <label htmlFor="nationalId" className="block mb-2 font-medium">
            National ID Number
          </label>
          <input
            type="text"
            id="nationalId"
            name="nationalId"
            placeholder="Enter your National ID Number"
            className="w-full p-4 bg-primary-800 rounded-md text-primary-100 border border-primary-700 focus:outline-none focus:ring focus:ring-accent-400"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-accent-500 text-primary-900 font-semibold px-6 py-3 rounded-lg hover:bg-accent-600 transition-all"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
