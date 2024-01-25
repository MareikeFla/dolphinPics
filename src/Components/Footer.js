import Link from "next/link";

export default function Footer({ wisdom }) {
  return (
    <footer className="col-start-1 col-span-4 row-span-1 px-20 flex justify-center lg:justify-between gap-10 items-center ">
      <div className="hidden lg:flex lg:flex-wrap  text-gray-400 text-lg italic">
        <p>~ {wisdom.joke} ~</p>
      </div>
      <Link href={"/about"} className="text-cyan-600 underline ">
        About
      </Link>
    </footer>
  );
}
