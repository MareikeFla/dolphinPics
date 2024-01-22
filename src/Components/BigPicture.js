import Image from "next/image";
import { useFloating, autoUpdate } from "@floating-ui/react";

export default function BigPicture({ selectedPicture }) {
  const { refs, floatingStyles } = useFloating({
    whileElementsMounted: autoUpdate,
  });

  if (!selectedPicture) {
    return;
  }

  console.log(selectedPicture.ratio);

  return (
    <>
      {" "}
      <Image
        ref={refs.setReference}
        src={`/pics/${selectedPicture.month}/${selectedPicture.picpath}`}
        width={selectedPicture.width * 0.6}
        height={selectedPicture.height * 0.6}
        className="max-h-[80vh] w-auto selectedImage"
        alt={selectedPicture.alt}
        loading="eager"
        priority={true}
        quality={30}
      ></Image>
      <div ref={refs.setFloating} style={floatingStyles}>
        Toolpti
      </div>
    </>
  );
}
