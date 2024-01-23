import Link from "next/link";
import Wisdome from "./Wisdome";

export default function Footer() {
  return (
    <footer className=" col-start-1 col-span-4 row-span-1 lg:px-20 lg:flex lg:justify-between lg:items-center py-5">
      <Wisdome></Wisdome>
      <div className="flex justify-evenly items-end h-full  ">
        <Link href={"/about"} className="text-cyan-600 underline  ">
          About
        </Link>
      </div>
    </footer>
  );
}
