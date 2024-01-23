import Link from "next/link";
import Wisdome from "./Wisdome";

export default function Footer({ foo }) {
  return (
    <footer className=" col-start-1 col-span-4 row-span-1 px-20 flex justify-between items-center py-5">
      <Wisdome></Wisdome>
      <div className=" ">
        <Link href={"/about"} className="text-cyan-600 underline ">
          About
        </Link>
      </div>
    </footer>
  );
}
