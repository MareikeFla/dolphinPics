import Image from "next/image";

export default function BigPicture({ selectedPicture }) {
  if (!selectedPicture) {
    return;
  }

  return (
    <div className=" h-[70vh] flex justify-center items-center">
      <Image
        src={`/pics/${selectedPicture.month}/${selectedPicture.picpath}`}
        width={selectedPicture.width * 0.6}
        height={selectedPicture.height * 0.6}
        className=" max-h-[95%] w-auto"
        alt={selectedPicture.alt}
        loading="eager"
        priority={true}
        quality={40}
      ></Image>
    </div>
  );
}
