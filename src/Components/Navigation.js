import Link from "next/link";
import { slugInfo } from "@/slugInfo";

export default function Navigation({ currentMonth, onClickNavigation }) {
  const mediaWidth = window.innerWidth;
  let navMonth = structuredClone(slugInfo);
  navMonth = navMonth.filter((month) => month.slug !== "about");

  if (mediaWidth <= 1024) {
    navMonth = navMonth.filter((month) => month.hasPictures === true);
  }

  return (
    <>
      {navMonth.map((month) => {
        return (
          <Link
            className={
              currentMonth === month.slug
                ? " text-cyan-600  mr-5  drop-shadow-[0_13px_8px_#67E8F9]  "
                : "text-neutral-300 mr-5  hover:drop-shadow-[0_13px_8px_#67E8F9] "
            }
            key={month.slug}
            href={month.slug}
            onClick={() => {
              onClickNavigation(month.slug);
            }}
          >
            {month.month}
          </Link>
        );
      })}
    </>
  );
}
