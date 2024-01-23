import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" col-start-1 col-span-4 row-span-1 px-20 grid grid-cols-4 py-6">
      <p className="col-span-3 text-gray-400 text-xl italic">
        ~ A dolphin a day keeps the bugs away! ~
      </p>
      <div className="col-start-4 flex justify-center ">
        <Link href={"/about"} className="text-cyan-600 underline ">
          About
        </Link>
      </div>
    </footer>
  );
}
