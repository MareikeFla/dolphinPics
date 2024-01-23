import { useRouter } from "next/router";
import { slugInfo } from "@/slugInfo";
import Gallery from "../Components/Gallery";
import React from "react";
import Footer from "@/Components/Footer";
import About from "@/Components/About";
import Header from "@/Components/Header";

export default function Month({
  picturesInfo,
  selectedPicture,
  setSelectedPicture,
}) {
  const router = useRouter();
  let { slug } = router.query;

  function handleNavigationClick(month) {
    const container = document.querySelector(".Gallery-Pictures");
    container.scrollTo(0, 0);
    const copyPicturesInfo = [...picturesInfo];
    const filteredPicturesInfo = copyPicturesInfo.filter(
      (p) => p.month === month
    );
    const firstPicture = filteredPicturesInfo[0];

    if (firstPicture) {
      setSelectedPicture(firstPicture);
      return;
    }
    const randomPicture =
      picturesInfo[Math.floor(Math.random() * picturesInfo.length)];
    setSelectedPicture(randomPicture);
  }

  const currentMonth = slugInfo.find((month) => month.slug === slug);

  if (!currentMonth) {
    return null;
  }

  const filteredPicturesInfo = picturesInfo.filter(
    (p) => p.month === currentMonth.slug
  );
  return (
    <>
      <Header
        currentMonth={currentMonth}
        handleNavigationClick={handleNavigationClick}
      ></Header>
      {slug !== "about" ? (
        <Gallery
          filteredPicturesInfo={filteredPicturesInfo}
          selectedPicture={selectedPicture}
          setSelectedPicture={setSelectedPicture}
        ></Gallery>
      ) : (
        <About></About>
      )}
      <Footer></Footer>
    </>
  );
}
