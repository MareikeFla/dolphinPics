import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import { wisdom } from "@/lib/wisdom";

export default function App({ Component, pageProps }) {
  const [selectedPicture, setSelectedPicture] = useState({
    month: "january",
    picpath: "Portrait_Placeholder.png",
    width: 500,
    height: 500,
    alt: "",
    initial: true,
  });

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

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [windowWidth, setWindowWidth] = useState(0);

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
