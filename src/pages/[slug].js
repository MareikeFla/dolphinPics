import { useRouter } from "next/router";
import { monthInfo } from "@/monthInfo";
import Gallery from "../Components/Gallery";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Papa from "papaparse";
import Footer from "@/Components/Footer";
import Navigation from "@/Components/Navigation";

export default function Month() {
  const [picturesInfo, setPicturesInfo] = useState([]);
  const [selectedPicture, setSelectedPicture] = useState({
    month: "january",
    picpath: "16012024.png",
    width: 1024,
    height: 1024,
    alt: "",
    ratio: 1,
  });
  const router = useRouter();
  const { slug } = router.query;

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
            console.log(result.data);
          },
        });
      } catch (error) {
        console.error("Error reading CSV: ", error);
      }
    }

    readCSV();
  }, []);

  function handleNavigationClick(month) {
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
  let currentMonth = monthInfo.find((month) => month.slug === slug);

  if (!currentMonth) {
    return;
  }

  const copyPicturesInfo = [...picturesInfo];
  const filteredPicturesInfo = copyPicturesInfo.filter(
    (p) => p.month === currentMonth.slug
  );
  return (
    <>
      <header className="m-2 flex justify-center">
        <h1 className="text-cyan-600 text-3xl">
          Daily Dolphin Archive -{" "}
          <Navigation
            currentMonth={currentMonth.slug}
            onClickNavigation={handleNavigationClick}
          ></Navigation>
        </h1>
      </header>
      <Gallery
        filteredPicturesInfo={filteredPicturesInfo}
        selectedPicture={selectedPicture}
        setSelectedPicture={setSelectedPicture}
      ></Gallery>
      <Footer></Footer>
    </>
  );
}
