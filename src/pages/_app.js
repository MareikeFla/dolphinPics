import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import { wisdom } from "@/lib/wisdom";

export default function App({ Component, pageProps }) {
  console.log("App start");
  const [selectedPicture, setSelectedPicture] = useState({
    month: "january",
    picpath: "08012024.webp",
    width: 1024,
    height: 1024,
    alt: "",
    initial: true,
  });
  console.log("App start: ", selectedPicture);

  const [picturesInfo, setPicturesInfo] = useState([]);

  const [selectedWisdom, setSelectedWisdom] = useState(selectWisdom());

  function selectWisdom() {
    return wisdom[Math.floor(Math.random() * wisdom.length)];
  }

  function handleSetSelectedPicture(picture) {
    setSelectedWisdom(selectWisdom());
    if (picture) {
      setSelectedPicture(picture);
    }
  }

  useEffect(() => {
    console.log("App useEffect start");
    console.log("App useEffect start: ", selectedPicture);

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

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    if (typeof window !== "undefined") {
      handleResize();
    }

    window.addEventListener("resize", handleResize);
    console.log("App useEffect end");
    console.log("App useEffect end: ", selectedPicture);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [windowWidth, setWindowWidth] = useState(0);
  console.log("App end");
  console.log("App  end: ", selectedPicture);

  return (
    <Component
      {...pageProps}
      picturesInfo={picturesInfo}
      setPicturesInfo={setPicturesInfo}
      selectedPicture={selectedPicture}
      setSelectedPicture={handleSetSelectedPicture}
      windowWidth={windowWidth}
      wisdom={selectedWisdom}
    />
  );
}
