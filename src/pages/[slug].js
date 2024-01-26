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
  setSelectedPicture,
  windowWidth,
  wisdom,
}) {
  console.log("[slug].js started");
  const router = useRouter();
  const { slug } = router.query;
  const slugInfo = slugInfos.find((month) => month.slug === slug);
  const [filteredPicturesInfo, setFilteredPicturesInfo] = useState([]);
  console.log("log slug in [slug].js slug: ", slug);
  console.log("log filteredPicturesInfo in [slug].js: ", filteredPicturesInfo);

  // useEffect 1
  useEffect(() => {
    console.log("useEffect1 from [slug.js started]");
    console.log("log slug in useEffect1 : ", slug);
    const filteredPictures = picturesInfo.filter((p) => p.month === slug);
    console.log("log filteredPictures in useEffect1: ", filteredPictures);
    setFilteredPicturesInfo(filteredPictures);
  }, [slug, filteredPicturesInfo]);

  // useEffect 2

  useEffect(() => {
    console.log("useEffect2 from [slug.js started]");
    console.log(
      "log filteredPicturesInfo in useEffect2: ",
      filteredPicturesInfo
    );
    console.log("log slug in useEffect2 slug: ", slug);
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
  }, [filteredPicturesInfo, slug]);

  if (!slugInfo) {
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
