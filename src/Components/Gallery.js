import React from "react";
import Image from "next/image";
import BigPicture from "./BigPicture";

export default function Gallery({
  selectedPicture,
  setSelectedPicture,
  filteredPicturesInfo,
}) {
  return (
    <main className=" grid grid-cols-4 ">
      <div className="flex items-center flex-col col-start-1 col-end-4 px-5">
        {filteredPicturesInfo.length === 0 ? (
          <h2 className="text-white text-lg mb-3 mr-5">
            Here is a random dolphin for your effort to click on a month that
            has no dolphin pictures (yet...)
          </h2>
        ) : (
          <h2 className="text-white text-lg mb-3 ml-2">
            {selectedPicture.date}
          </h2>
        )}
        <BigPicture selectedPicture={selectedPicture}></BigPicture>
      </div>
      <div className="overflow-scroll overflow-x-hidden max-h-[80vh] flex flex-col items-center mt-10">
        {filteredPicturesInfo.map((pic) => (
          <Image
            key={pic.picpath}
            src={`/pics/${pic.month}/${pic.picpath}`}
            width={Number(pic.width) * 0.12}
            height={Number(pic.height) * 0.12}
            alt={pic.alt}
            quality={30}
            priority={true}
            loading="eager"
            className={
              selectedPicture.picpath === pic.picpath
                ? "my-2 cursor-pointer"
                : "my-2 opacity-35 cursor-pointer"
            }
            onClick={() => setSelectedPicture(pic)}
          ></Image>
        ))}
      </div>
    </main>
  );
}
