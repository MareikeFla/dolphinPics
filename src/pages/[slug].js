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
  console.log("slug start");
  console.log("slug start: ", selectedPicture);

  const router = useRouter();
  const { slug } = router.query;
  const slugInfo = slugInfos.find((month) => month.slug === slug);
  const filteredPicturesInfo = picturesInfo.filter((p) => p.month === slug);

  useEffect(() => {
    console.log("slug useEffect start");
    console.log("slug useEffect start: ", selectedPicture);

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
    console.log("slug use Effect end");
    console.log("slug useEffect end: ", selectedPicture);
  }, [slug]);

  if (!slugInfo) {
    return null;
  }
  console.log("slug end");
  console.log("slug  end: ", selectedPicture);

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
