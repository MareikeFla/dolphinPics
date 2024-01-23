import { wisdome } from "@/lib/wisdome";

export default function Wisdome() {
  const randomJoke = wisdome[Math.floor(Math.random() * wisdome.length)];

  console.log(randomJoke);

  return (
    <>
      <p className="hidden lg:flex col-span-3 text-gray-400 text-lg italic text-nowrap ">
        ~ {randomJoke.joke} ~
      </p>
    </>
  );
}
