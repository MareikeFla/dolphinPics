import Navigation from "./Navigation";

export default function Header({ currentMonth, handleNavigationClick }) {
  return (
    <>
      <header className="flex justify-center flex-col col-start-1 col-span-full row-span-1 px-20  ">
        <h1 className="text-cyan-600 text-2xl  ">Daily Dolphin Archive</h1>
        <div>
          <Navigation
            currentMonth={currentMonth.slug}
            onClickNavigation={handleNavigationClick}
          ></Navigation>
        </div>
      </header>
    </>
  );
}
