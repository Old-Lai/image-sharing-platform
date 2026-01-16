import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
export default function HeaderNav() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  function toggleMenu() {
    setIsOpenMenu(!isOpenMenu);
  }
  return (
    <div className="flex h-full w-full items-center">
      <button onClick={toggleMenu} className="relative z-10 bg-transparent">
        <Bars3Icon className="ml-3 h-10" />
      </button>
      <div className={`absolute w-full bg-cyan-500 pt-15 ${isOpenMenu ? "top-0" : "-top-100"} transition-all duration-500`}>
        <ul className="flex flex-col items-center">
          <li className="flex h-12 items-center">
            <MagnifyingGlassIcon className="h-8 pr-2" />
            <input
              type="search"
              placeholder="Search"
              className="h-11 w-full rounded-full border-2 border-gray-300 pr-4 pl-4 focus:ring-2 focus:ring-black focus:outline-none"
            />
          </li>
          <li className="flex h-12 items-center">Trendings</li>
          <li className="flex h-12 items-center">test</li>
          <li className="flex h-12 items-center">test</li>
        </ul>
      </div>
      <p className="absolute w-full">LOGO HERE</p>
    </div>
  );
}
