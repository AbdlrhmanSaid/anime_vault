import Image from "next/image";
import logo from "../public/logo.svg";
import tiktok from "../public/tiktok.svg";
import twitter from "../public/twitter.svg";
import instagram from "../public/instagram.svg";

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">@2023 AnimeVault</p>
      <Image
        src={logo}
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      <div className="flex items-center gap-6">
        <Image
          src={tiktok}
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src={instagram}
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src={twitter}
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
      </div>
    </footer>
  );
}

export default Footer;
