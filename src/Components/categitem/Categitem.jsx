import React from "react";

export default function Categitem({ item, handlecateg, currentcategory }) {
  const active = currentcategory === item;
  return (
    <li>
      <button
        type="button"
        onClick={() => handlecateg(item)}
        className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition duration-200 active:scale-[0.98] ${
          active
            ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
            : "border border-zinc-700/80 bg-zinc-900/80 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white"
        }`}
      >
        {item}
      </button>
    </li>
  );
}
