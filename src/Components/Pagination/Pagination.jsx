import React from "react";

export default function Pagination({ numberofpages, handlepages, currentpage }) {
  if (numberofpages <= 1) return null;

  return (
    <nav
      className="flex flex-wrap items-center justify-center gap-2 py-8"
      aria-label="ترقيم الصفحات"
    >
      {Array.from({ length: numberofpages }, (_, i) => {
        const page = i + 1;
        const isActive = Number(currentpage) === page;
        return (
          <button
            key={page}
            type="button"
            onClick={() => handlepages(page)}
            className={`flex h-10 min-w-10 items-center justify-center rounded-xl text-sm font-medium transition duration-200 active:scale-95 ${
              isActive
                ? "bg-orange-500 text-white shadow-md shadow-orange-500/25"
                : "border border-zinc-700 bg-zinc-900 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white"
            }`}
          >
            {page}
          </button>
        );
      })}
    </nav>
  );
}
