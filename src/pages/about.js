import Link from "next/link";
export default function About() {
  return (
    <>
      <header className="m-2 flex justify-center">
        <h1 className="text-cyan-600 text-3xl">Daily Dolphin Archive - </h1>
      </header>
      <Link href={"/november"}>Back to gallery</Link>
    </>
  );
}
