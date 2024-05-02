import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="container flex justify-between items-center py-4">
        <div className="nav-brand">
          <Link href="/">
            <Image
              src="./assets/logo.svg"
              alt="Eventry"
              className="h-[45px]"
              width={135}
              height={135}
            />
          </Link>
        </div>

        <ul className="flex gap-4 text-[#9C9C9C]">
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}