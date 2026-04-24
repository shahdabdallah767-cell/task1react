import React from "react";
import { Link } from "react-router";
import { HiOutlineArrowLeft, HiOutlineHome } from "react-icons/hi2";

export default function Notfound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-8xl font-black tabular-nums text-zinc-800 md:text-9xl">
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold text-white md:text-3xl">
        الصفحة غير موجودة
      </h1>
      <p className="mt-3 text-zinc-400">
        الرابط قد يكون خاطئاً أو الصفحة نُقلت.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-2xl border border-zinc-600/70 bg-zinc-900/60 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-800"
        >
          <HiOutlineHome className="h-5 w-5" aria-hidden />
          الرئيسية
        </Link>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600"
        >
          المدونة
          <HiOutlineArrowLeft className="h-5 w-5" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
