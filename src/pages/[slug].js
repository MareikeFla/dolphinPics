import { useRouter } from "next/router";
import { slugInfo } from "@/slugInfo";
import Gallery from "../Components/Gallery";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Papa from "papaparse";
import Footer from "@/Components/Footer";
import Navigation from "@/Components/Navigation";
import About from "@/Components/About";

export default function Month({ startMonth }) {
  const [picturesInfo, setPicturesInfo] = useState([]);
  const [selectedPicture, setSelectedPicture] = useState({
    month: "january",
    picpath: "08012024.png",
    width: 1024,
    height: 1024,
    alt: "",
    ratio: 1,
  });
  const router = useRouter();
  let { slug } = router.query;

  useEffect(() => {
    async function readCSV() {
      try {
        const response = await fetch("/pictureInfo.csv");
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder("utf-8");
        const csv = decoder.decode(result.value);

        Papa.parse(csv, {
          header: true,
          complete: (result) => {
            setPicturesInfo(result.data);
          },
        });
      } catch (error) {
        console.error("Error reading CSV: ", error);
      }
    }

    readCSV();
  }, []);

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
  if (!slug) {
    slug = startMonth;
  }

  const currentMonth = slugInfo.find((month) => month.slug === slug);

  if (!currentMonth) {
    return;
  }

  const copyPicturesInfo = [...picturesInfo];
  const filteredPicturesInfo = copyPicturesInfo.filter(
    (p) => p.month === currentMonth.slug
  );
  return (
    <>
      <header className="flex justify-center flex-col col-start-1 col-span-full row-span-1 px-20  ">
        <h1 className="text-cyan-600 text-2xl  ">Daily Dolphin Archive</h1>
        <div>
          <Navigation
            currentMonth={currentMonth.slug}
            onClickNavigation={handleNavigationClick}
          ></Navigation>
        </div>
      </header>
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
