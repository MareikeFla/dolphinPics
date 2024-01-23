import React from "react";
import Image from "next/image";
import BigPicture from "./BigPicture";

export default function Gallery({
  selectedPicture,
  setSelectedPicture,
  filteredPicturesInfo,
}) {
  return (
    <main className="col-start-1 col-span-full grid grid-cols-6  gap-10 row-span-1 px-20">
      <div className=" px-5 col-start-1 col-span-5 flex flex-col  items-center shadow-[0_0_20px_1px_white]">
        <BigPicture selectedPicture={selectedPicture}></BigPicture>
        {filteredPicturesInfo.length === 0 ? (
          <h2 className="text-white text-lg ">
            Here is a random dolphin for your effort to click on a month that
            has no dolphin pictures (yet...)
          </h2>
        ) : (
          <h2 className="text-white text-lg">{selectedPicture.date}</h2>
        )}
      </div>
      <div className="col-start-6 col-span-full overflow-scroll overflow-x-hidden h-[73vh] flex flex-col items-center Gallery-Pictures">
        {filteredPicturesInfo.map((pic) => (
          <Image
            key={pic.picpath}
            src={`/pics/${pic.month}/${pic.picpath}`}
            width={Number(pic.width) * 0.12}
            height={Number(pic.height) * 0.12}
            alt={pic.alt}
            quality={30}
            loading="eager"
            className={
              selectedPicture.picpath === pic.picpath
                ? "my-2 cursor-pointer w-[90%] h-auto"
                : "my-2 opacity-35 cursor-pointer w-[90%] h-auto"
            }
            onClick={() => setSelectedPicture(pic)}
          ></Image>
        ))}
      </div>
    </main>
  );
}
