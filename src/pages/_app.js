import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Papa from "papaparse";

export default function App({ Component, pageProps }) {
  const [selectedPicture, setSelectedPicture] = useState({
    month: "january",
    picpath: "08012024.webp",
    width: 1024,
    height: 1024,
    alt: "",
    ratio: 1,
  });

  const [picturesInfo, setPicturesInfo] = useState([]);
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

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    if (typeof window !== "undefined") {
      handleResize();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Component
      {...pageProps}
      picturesInfo={picturesInfo}
      setPicturesInfo={setPicturesInfo}
      selectedPicture={selectedPicture}
      setSelectedPicture={setSelectedPicture}
      windowWidth={windowWidth}
    />
  );
}
