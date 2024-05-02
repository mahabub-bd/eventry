import RegistrationForm from "@/components/auth/RegistrationForm";
import Link from "next/link";

export default function RegistrationPage() {
  return (
    <section className="h-[80vh] grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Register</h4>
        <RegistrationForm />

        <span className="text-center text-md text-gray-500">
          Already have an account?
          <Link className="underline hover:text-indigo-600 ml-5" href="/login">
            Login
          </Link>
        </span>
      </div>
    </section>
  );
}
