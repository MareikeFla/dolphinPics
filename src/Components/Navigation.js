import Link from "next/link";
import { monthInfo } from "@/monthInfo";

export default function Navigation({ currentMonth, onClickNavigation }) {
  return (
    <>
      {monthInfo.map((month) => {
        return (
          <Link
            className={
              currentMonth === month.slug
                ? " text-cyan-600 text-2xl m-5"
                : "text-neutral-300 text-2xl  mx-5"
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
