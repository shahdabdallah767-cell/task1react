import React, { useMemo, useState } from "react";
import data from "../../../posts.json";
import Categitem from "../../Components/categitem/Categitem";
import { FaList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { HiOutlineClock, HiOutlineMagnifyingGlass, HiOutlineNewspaper, HiOutlineStar } from "react-icons/hi2";
import Pagination from "../../Components/Pagination/Pagination";
import { Link } from "react-router";

export default function Blog() {
  const { categories, posts } = data;
  const [display, setDisplay] = useState("grid");
  const [currentcategory, setCurrentcategory] = useState("جميع المقالات");
  const [search, setSearch] = useState("");
  const [currentpage, setCurrentpage] = useState(1);

  const allcateg = useMemo(
    () => ["جميع المقالات", ...categories.map((c) => c.name)],
    [categories]
  );

  const filteration = useMemo(() => {
    const q = search.trim();
    return posts
      .filter(
        (item) =>
          currentcategory === "جميع المقالات" ||
          item.category === currentcategory
      )
      .filter((item) => {
        if (!q) return true;
        return (
          item.title.includes(q) ||
          (item.excerpt && item.excerpt.includes(q))
        );
      });
  }, [posts, currentcategory, search]);

  const numberofpages = Math.ceil(filteration.length / 6) || 1;
  const lastIndex = currentpage * 6;
  const firstIndex = lastIndex - 6;
  const finalPosts = filteration.slice(firstIndex, lastIndex);

  function handlecateg(value) {
    setCurrentcategory(value);
    setCurrentpage(1);
  }

  function handlepages(value) {
    setCurrentpage(value);
  }

  return (
    <section className="mx-auto max-w-6xl space-y-10 pb-8">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-800/90 bg-zinc-900/35 px-4 py-14 text-center shadow-xl shadow-black/20 md:px-8 md:py-16">
        <div
          className="bg-grid-subtle pointer-events-none absolute inset-0 opacity-[0.45]"
          aria-hidden
        />
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/25 via-transparent to-zinc-950/85" />

        <div className="relative mx-auto max-w-2xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-700/70 bg-zinc-950/70 px-4 py-2 text-xs font-medium text-zinc-200 shadow-sm backdrop-blur-md">
            <HiOutlineNewspaper className="h-4 w-4 text-orange-500" aria-hidden />
            مدونتنا
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
            استكشف مقالاتنا
          </h1>
          <p className="text-pretty text-base leading-relaxed text-zinc-400 md:text-lg">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث في عالم التصوير
            الفوتوغرافي
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <ul className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
          {allcateg.map((category, index) => (
            <Categitem
              currentcategory={currentcategory}
              handlecateg={handlecateg}
              key={index}
              item={category}
            />
          ))}
        </ul>

        <div className="relative w-full shrink-0 lg:max-w-sm">
          <HiOutlineMagnifyingGlass className="pointer-events-none absolute top-1/2 start-4 h-5 w-5 -translate-y-1/2 text-zinc-500" />
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentpage(1);
            }}
            type="search"
            className="w-full rounded-2xl border border-zinc-700/80 bg-zinc-900/80 py-3 pe-4 ps-12 text-sm text-zinc-100 shadow-sm placeholder:text-zinc-500 focus:border-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
            placeholder="ابحث في المقالات..."
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-400">
          عرض{" "}
          <span className="font-semibold text-white">{filteration.length}</span>{" "}
          مقالات
        </p>

        <div className="flex items-center gap-1 rounded-xl border border-zinc-700/80 bg-zinc-900/80 p-1 shadow-sm">
          <button
            type="button"
            onClick={() => setDisplay("list")}
            aria-pressed={display === "list"}
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition duration-200 ${
              display === "list"
                ? "bg-orange-500 text-white shadow-md shadow-orange-500/25"
                : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`}
            aria-label="عرض قائمة"
          >
            <FaList className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setDisplay("grid")}
            aria-pressed={display === "grid"}
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition duration-200 ${
              display === "grid"
                ? "bg-orange-500 text-white shadow-md shadow-orange-500/25"
                : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`}
            aria-label="عرض شبكة"
          >
            <IoGrid className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        className={
          display === "grid"
            ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            : "flex flex-col gap-4"
        }
      >
        {finalPosts.map((item) => (
          <article
            key={item.id}
            className={`group overflow-hidden rounded-3xl border border-zinc-800/90 bg-zinc-900/40 shadow-lg shadow-black/20 transition duration-300 hover:border-zinc-700 hover:shadow-xl hover:shadow-orange-500/5 ${
              display === "list"
                ? "flex flex-col sm:flex-row"
                : ""
            }`}
          >
            <Link
              to={`/blog/${item.id}`}
              className={`relative block shrink-0 overflow-hidden ${
                display === "list"
                  ? "aspect-[16/10] w-full sm:aspect-auto sm:h-auto sm:w-80"
                  : "aspect-[16/11]"
              }`}
            >
              <img
                className="home-feature-img h-full w-full object-cover group-hover:scale-[1.04]"
                src={item.image}
                alt={item.title}
              />
              <span className="absolute top-4 start-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                {item.category}
              </span>
            </Link>

            <div className="flex flex-1 flex-col p-5 md:p-6">
              <Link to={`/blog/${item.id}`} className="block">
                <h2 className="text-lg font-bold leading-snug text-white transition group-hover:text-orange-500">
                  {item.title}
                </h2>
              </Link>
              {item.excerpt && (
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-400">
                  {item.excerpt}
                </p>
              )}
              <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
                <HiOutlineClock className="h-3.5 w-3.5 text-zinc-600" aria-hidden />
                {item.readTime}
              </div>
            </div>
          </article>
        ))}
      </div>

      <Pagination
        currentpage={currentpage}
        handlepages={handlepages}
        numberofpages={numberofpages}
      />
    </section>
  );
}
