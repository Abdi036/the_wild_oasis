import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";

export const metadata = {
  title: "Update Profile",
};

export default function Page() {
  const nationality = "/Ethiopia";

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update Your Guest Profile
      </h2>
      <p className="text-lg mb-8">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <UpdateProfileForm>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
