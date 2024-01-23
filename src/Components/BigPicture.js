import Image from "next/image";
import { useFloating, autoUpdate } from "@floating-ui/react";

export default function BigPicture({ selectedPicture }) {
  if (!selectedPicture) {
    return;
  }

  return (
    <div className="h-[70vh] flex justify-center items-center">
      <Image
        src={`/pics/${selectedPicture.month}/${selectedPicture.picpath}`}
        width={selectedPicture.width}
        height={selectedPicture.height}
        className=" max-h-[95%] w-auto"
        alt={selectedPicture.alt}
        loading="eager"
        priority={true}
        quality={20}
      ></Image>
    </div>
  );
}
