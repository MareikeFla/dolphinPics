import { useRouter } from "next/router";
import { slugInfos } from "@/slugInfos";
import Gallery from "../Components/Gallery";
import React, { useEffect } from "react";
import Footer from "@/Components/Footer";
import About from "@/Components/About";
import Header from "@/Components/Header";

export default function Month({
  picturesInfo,
  selectedPicture,
  setSelectedPicture,
  windowWidth,
  wisdom,
}) {
  const router = useRouter();
  const { slug } = router.query;
  const slugInfo = slugInfos.find((month) => month.slug === slug);
  const filteredPicturesInfo = picturesInfo.filter((p) => p.month === slug);

  useEffect(() => {
    const firstPicture = filteredPicturesInfo[0];
    if (firstPicture) {
      setSelectedPicture(firstPicture);
    } else {
      const randomPicture =
        picturesInfo[Math.floor(Math.random() * picturesInfo.length)];
      if (randomPicture) {
        setSelectedPicture(randomPicture);
      }
    }
  }, [slug]);

  if (!slugInfo) {
    return null;
  }
  if (!selectedPicture) {
    return;
  }

  return (
    <>
      <Header currentMonth={slugInfo.month} windowWidth={windowWidth}></Header>
      {slug !== "about" ? (
        <Gallery
          filteredPicturesInfo={filteredPicturesInfo}
          selectedPicture={selectedPicture}
          setSelectedPicture={setSelectedPicture}
          windowWidth={windowWidth}
        ></Gallery>
      ) : (
        <About></About>
      )}
      <Footer wisdom={wisdom}></Footer>
    </>
  );
}
