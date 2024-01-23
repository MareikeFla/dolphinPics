import { wisdome } from "@/lib/wisdome";

export default function Wisdome() {
  const randomJoke = wisdome[Math.floor(Math.random() * wisdome.length)];

  return (
    <div className="hidden lg:flex lg:flex-wrap  text-gray-400 text-lg italic">
      <p>~ {randomJoke.joke} ~</p>
    </div>
  );
}
