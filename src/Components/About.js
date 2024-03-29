import Link from "next/link";
export default function About() {
  return (
    <>
      <main className="col-start-1 col-span-full grid grid-cols-6  gap-10 row-span-1 lg:px-20">
        <div className=" text-white w-full px-20 col-start-1 col-span-full flex flex-col lg:h-[76vh]  lg:shadow-[0_0_20px_1px_white] ">
          <p className="my-10 ">
            Welcome to the most fin-tastic archive ever - the Dolphin Picture
            Gallery of the{" "}
            <Link
              href={"https://www.neuefische.de/"}
              className="text-cyan-600 underline"
            >
              neueFische
            </Link>{" "}
            course ffm-web-23-6, cheerfully curated by Mareike, an unofficial
            dolphin whisperer! Behold my debut tech-splash, a Next-Js powered
            extravaganza! I used ChatGpt 4.0, DALL-E and Midjourney to create
            the pictures.
          </p>
          <div className="px-10">
            <p className="mb-5">
              Version 1.0 (23.01.2023) - where coding met dolphins and they did
              a tail flip together.
            </p>

            <p>
              - Styled with{" "}
              <Link
                className="text-cyan-600 underline"
                href={"https://tailwindcss.com/"}
              >
                Tailwind
              </Link>{" "}
              - because even dolphins appreciate a bit of flair.
            </p>
            <p className="mb-10">
              - And guess what? I used{" "}
              <Link
                className="text-cyan-600 underline"
                href={"https://www.papaparse.com/"}
              >
                PapaParse
              </Link>{" "}
              to import image-infos from a CSV, because who says dolphins and
              data can`t swim in the same tech-ocean?
            </p>
          </div>
          <p>
            Further improvements to the website will follow soon! Check back
            with me at regular intervals!
          </p>
        </div>
      </main>
    </>
  );
}
