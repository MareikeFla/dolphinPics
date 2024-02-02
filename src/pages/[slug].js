import { useRouter } from "next/router";
import { slugInfos } from "@/slugInfos";
import Gallery from "../Components/Gallery";
import React, { useEffect, useState } from "react";
import Footer from "@/Components/Footer";
import About from "@/Components/About";
import Header from "@/Components/Header";

export default function Month({
  picturesInfo,
  selectedPicture,
  onPictureSelection,
  windowWidth,
  wisdom,
}) {
  console.log("[slug].js started");
  const router = useRouter();
  const { slug } = router.query;
  const slugInfo = slugInfos.find((month) => month.slug === slug);
  const filteredPicturesInfo = picturesInfo.filter((p) => p.month === slug);
  console.log("log slug in [slug].js slug: ", slug);
  console.log("log filteredPicturesInfo in [slug].js: ", filteredPicturesInfo);

  useEffect(() => {
    const foo = picturesInfo.filter((p) => p.month === slug);

    const firstPicture = foo[0];
    if (firstPicture) {
      onPictureSelection(firstPicture);
    } else {
      const randomPicture =
        picturesInfo[Math.floor(Math.random() * picturesInfo.length)];
      if (randomPicture) {
        onPictureSelection(randomPicture);
      }
    }
  }, [slug]);

  if (!slug || !slugInfo) {
    return null;
  }
  console.log("[slug].js ended");

  return (
    <>
      <Header
        currentMonth={slugInfo}
        windowWidth={windowWidth}
        router={router}
      ></Header>
      {slug !== "about" ? (
        <Gallery
          filteredPicturesInfo={filteredPicturesInfo}
          selectedPicture={selectedPicture}
          onPictureSelection={onPictureSelection}
          windowWidth={windowWidth}
        ></Gallery>
      ) : (
        <About></About>
      )}
      <Footer wisdom={wisdom}></Footer>
    </>
  );
}
