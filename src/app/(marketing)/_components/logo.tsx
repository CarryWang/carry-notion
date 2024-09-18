import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/Cotion.svg"
        alt="logo"
        width={40}
        height={40}
        priority={true}
      />
      <p className={cn("font-semibold dark:text-white", font.className)}>
        Contion
      </p>
    </div>
  );
};

export default Logo;
