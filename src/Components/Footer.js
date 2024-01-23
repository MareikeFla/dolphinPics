import Link from "next/link";
import Wisdome from "./Wisdome";

export default function Footer() {
  return (
    <footer className=" col-start-1 col-span-4 row-span-1 px-20 grid grid-cols-4 py-6">
      <Wisdome></Wisdome>
      <div className="col-start-4 flex justify-center ">
        <Link href={"/about"} className="text-cyan-600 underline ">
          About
        </Link>
      </div>
    </footer>
  );
}
