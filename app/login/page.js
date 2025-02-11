import SigninButton from "../_components/SigninButton";

export const metadata = {
  title: "Login",
};

export default function page() {
  return (
    <div className="flex flex-col items-center gap-10 mt-10">
      <h2 className="text-3xl font-semibold">
        Sign in to access your guest area
      </h2>
      <SigninButton />
    </div>
  );
}
