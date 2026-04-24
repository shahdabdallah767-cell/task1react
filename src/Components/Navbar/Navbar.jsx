import React from "react";
import { Link, NavLink } from "react-router";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoCameraOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-800/60 bg-zinc-950/75 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-3 items-center gap-2 px-3 py-3 sm:gap-4 sm:px-6">
        <Link
          to="/"
          className="flex min-w-0 items-center justify-self-start gap-2 sm:gap-3"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25 sm:h-11 sm:w-11">
            <IoCameraOutline className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
          </span>
          <span className="hidden min-w-0 text-right leading-tight sm:block">
            <span className="block text-base font-bold tracking-tight text-white sm:text-lg">
              عدسة
            </span>
            <span className="truncate text-[10px] text-zinc-400 sm:text-xs">
              عالم التصوير الفوتوغرافي
            </span>
          </span>
        </Link>

        <nav
          className="flex min-w-0 justify-center justify-self-center overflow-x-auto rounded-full border border-zinc-800/90 bg-zinc-900/95 p-1 shadow-inner shadow-black/20 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="التنقل الرئيسي"
        >
          <div className="flex shrink-0 items-center gap-0.5 p-0.5 sm:gap-0.5 sm:p-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-2 py-1.5 text-[11px] font-medium transition-colors sm:px-4 sm:py-2 sm:text-sm ${
                  isActive
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/30"
                    : "text-zinc-400 hover:text-white"
                }`
              }
            >
              الرئيسية
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-2 py-1.5 text-[11px] font-medium transition-colors sm:px-4 sm:py-2 sm:text-sm ${
                  isActive
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/30"
                    : "text-zinc-400 hover:text-white"
                }`
              }
            >
              المدونة
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-2 py-1.5 text-[11px] font-medium transition-colors sm:px-4 sm:py-2 sm:text-sm ${
                  isActive
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/30"
                    : "text-zinc-400 hover:text-white"
                }`
              }
            >
              من نحن
            </NavLink>
          </div>
        </nav>

        <div className="flex items-center justify-end justify-self-end gap-1.5 sm:gap-2">
          <Link
            to="/blog"
            className="hidden rounded-xl bg-orange-500 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600 sm:inline-flex sm:px-4 sm:py-2.5 sm:text-sm"
          >
            ابدأ القراءة
          </Link>
          <button
            type="button"
            aria-label="بحث"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-zinc-700/80 bg-zinc-900/80 text-white transition hover:border-zinc-600 hover:bg-zinc-800 sm:h-10 sm:w-10"
          >
            <HiOutlineMagnifyingGlass className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
