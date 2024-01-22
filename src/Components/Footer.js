import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <Link href={"/about"} className="text-white">
        ABOUT
      </Link>
    </div>
  );
}
