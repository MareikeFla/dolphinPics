import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import { wisdom } from "@/lib/wisdom";

export default function App({ Component, pageProps }) {
  console.log("App start");
  const [selectedPicture, setSelectedPicture] = useState({
    month: "january",
    picpath: "Portrait_Placeholder.png",
    width: 500,
    height: 500,
    alt: "",
    initial: true,
  });
  console.log("App start, initial selected Picture: ", selectedPicture);

  const [picturesInfo, setPicturesInfo] = useState([]);
  console.log("App start, initial  picturesInfo: ", picturesInfo);

  const [selectedWisdom, setSelectedWisdom] = useState(selectWisdom());

  function selectWisdom() {
    return wisdom[Math.floor(Math.random() * wisdom.length)];
  }

  function handleSetSelectedPicture(picture) {
    setSelectedWisdom(selectWisdom());
    if (picture) {
      console.log("handleSetSelectedPicture");
      setSelectedPicture(picture);
    }
  }

  useEffect(() => {
    console.log("App useEffect start");
    console.log("App useEffect  selected picture: ", selectedPicture);
    console.log("App useEffect  pictureInfos: ", picturesInfo);

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
            console.log("App useEffect setPictureInfo call");
            setPicturesInfo(result.data);
          },
        });
      } catch (error) {
        console.error("Error reading CSV: ", error);
      }
    }
    readCSV();
    console.log("App useEffect  pictureInfos: ", picturesInfo);

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    if (typeof window !== "undefined") {
      handleResize();
    }

    window.addEventListener("resize", handleResize);
    console.log("App useEffect end");
    console.log("App useEffect end: ", selectedPicture);
    console.log("App useEffect end pictureInfos: ", picturesInfo);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [windowWidth, setWindowWidth] = useState(0);
  console.log("App end");
  console.log("App  end: ", selectedPicture);
  console.log("App  end pictureInfos: ", picturesInfo);

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
