import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
const Navbar = () => {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <Link
        href={`/`}
        className="text-base font-bold text-white flex items-center"
      >
        <Image
          src={logo}
          alt="logo"
          width={47}
          height={44}
          className="object-contain"
        />
        <p>AnimeVault</p>
      </Link>

      <div className="flex items-center gap-6">
        <Link href={`/`}>Home</Link>
        <Link href={`/Favorite`}>Favorites</Link>
      </div>
    </footer>
  );
};

export default Navbar;
