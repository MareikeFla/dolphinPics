import Link from "next/link";
import { slugInfo } from "@/slugInfo";

export default function Navigation({ currentMonth, onClickNavigation }) {
  return (
    <>
      {slugInfo.map((month) => {
        return (
          <Link
            className={
              currentMonth === month.slug
                ? " text-cyan-600 lg:text-2xl mr-3 lg:mr-5  drop-shadow-[0_13px_8px_#67E8F9]  "
                : "text-neutral-300 lg:text-2xl mr-3 lg:mr-5  hover:drop-shadow-[0_13px_8px_#67E8F9] "
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
