import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
export default function HeaderNav() {
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(true)
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  }
  return (
    <div className="flex h-full w-full items-center">
      <button onClick={handleClick} className="relative z-10 bg-transparent">
        <Bars3Icon className="ml-3 h-10" />
      </button>
      <p className={`${clicked?"opacity-100":"opacity-0"} transition-opacity duration-550`}>Clicked</p>
      <p className="absolute w-full">LOGO HERE</p>
    </div>
  );
}
