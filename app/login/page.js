import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="h-[80vh] grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign in</h4>
        <LoginForm />

        <span className="text-center text-md text-gray-500">
          Dont have an account?
          <Link
            className="underline hover:text-indigo-600 ml-5"
            href="/register"
          >
            Register
          </Link>
        </span>
      </div>
    </section>
  );
}
