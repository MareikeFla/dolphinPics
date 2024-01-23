import Navigation from "./Navigation";

export default function Header({ currentMonth, handleNavigationClick }) {
  return (
    <>
      <header className="flex justify-center flex-col col-start-1 col-span-full lg:row-span-1 px-10 lg:px-20 text-lg lg:text-2xl  ">
        <h1 className="text-cyan-600  ">Daily Dolphin Archive</h1>
        <div className="flex flex-wrap">
          <Navigation
            currentMonth={currentMonth.slug}
            onClickNavigation={handleNavigationClick}
          ></Navigation>
        </div>
      </header>
    </>
  );
}
