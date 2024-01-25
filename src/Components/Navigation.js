import Link from "next/link";
import { slugInfos } from "@/slugInfos";

function scrollContainer() {
  const container = document.querySelector(".Gallery-Pictures");
  if (container) {
    container.scrollTo(0, 0);
  }
}

export default function Navigation({ currentMonth, windowWidth, router }) {
  let filteredNavigationMonth = slugInfos.filter((slug) => {
    return slug.slug !== "about";
  });
  if (windowWidth < 1031) {
    if (!currentMonth.hasPics) {
      router.push("/november");
    }
    filteredNavigationMonth = filteredNavigationMonth.filter((slug) => {
      return slug.hasPics === true;
    });
  }
  return (
    <>
      {filteredNavigationMonth.map((month) => {
        return (
          <Link
            className={
              currentMonth.month === month.month
                ? " text-cyan-600 lg:text-2xl mr-3 lg:mr-5  drop-shadow-[0_13px_8px_#67E8F9]  "
                : "text-neutral-300 lg:text-2xl mr-3 lg:mr-5  hover:drop-shadow-[0_13px_8px_#67E8F9] "
            }
            key={month.slug}
            href={month.slug}
            onClick={scrollContainer}
          >
            {month.month}
          </Link>
        );
      })}
    </>
  );
}
