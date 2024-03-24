import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-image">
      <div className="content flex flex-col items-center justify-evenly h-full">
        <Image src="/logo-lutefol.svg" width={246} height={32} alt="" />
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold md:text-5xl">
            Revolutionizing sports <br /> technology for the future
          </h1>
          <h2 className="text-lg md:text-2xl w-10/12 md:w-3/4 text-center">
            Experience the next level of sports innovation and performance. Join us today!
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-2 text-sm md:text-base">
          Are you looking for Piratas FC Oficcial Website?
          <Link href="https://piratasfc.vercel.app" className="underline" target="_blank">
            Visit Piratas FC Official Site
          </Link>
        </div>
        <h3 className="text-sm md:text-base">
          © 2024 Lutefol from Zassa
        </h3>
      </div>
    </div>
  );
}
