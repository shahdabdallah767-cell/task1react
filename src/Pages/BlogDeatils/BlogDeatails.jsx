import React, { useMemo } from "react";
import { Link, useParams } from "react-router";
import data from "../../../posts.json";
import { HiOutlineArrowLeft, HiOutlineClock } from "react-icons/hi2";

function formatDateAr(iso) {
  try {
    return new Date(iso).toLocaleDateString("ar-SA-u-ca-gregory", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

function renderContent(content) {
  if (!content) return null;
  return content.split(/\n\n+/).map((block, i) => {
    const t = block.trim();
    if (t.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="mb-3 mt-10 border-b border-zinc-800 pb-2 text-xl font-bold text-white first:mt-0 md:text-2xl"
        >
          {t.slice(3)}
        </h2>
      );
    }
    return (
      <p key={i} className="mb-4 text-[15px] leading-[1.85] text-zinc-300 md:text-base">
        {t}
      </p>
    );
  });
}

export default function BlogDeatails() {
  const { posts } = data;
  const { id } = useParams();

  const mypost = useMemo(
    () => posts.find((item) => String(item.id) === String(id)),
    [posts, id]
  );

  if (!mypost) {
    return (
      <div className="mx-auto max-w-lg py-20 text-center">
        <h1 className="text-2xl font-bold text-white">المقال غير موجود</h1>
        <p className="mt-3 text-zinc-400">تأكدي من الرابط أو ارجعي للمدونة.</p>
        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
        >
          العودة للمدونة
          <HiOutlineArrowLeft className="h-5 w-5" aria-hidden />
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl pb-16">
      <nav className="mb-8 text-sm text-zinc-500">
        <Link to="/" className="transition hover:text-orange-500">
          الرئيسية
        </Link>
        <span className="mx-2 text-zinc-600">/</span>
        <Link to="/blog" className="transition hover:text-orange-500">
          المدونة
        </Link>
        <span className="mx-2 text-zinc-600">/</span>
        <span className="text-zinc-400">المقال</span>
      </nav>

      <header className="mb-8 space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full bg-orange-500/12 px-3 py-1 text-xs font-semibold text-orange-400 ring-1 ring-orange-500/25">
            {mypost.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-zinc-500">
            <HiOutlineClock className="h-4 w-4" aria-hidden />
            {mypost.readTime}
          </span>
          <span className="text-zinc-500">{formatDateAr(mypost.date)}</span>
        </div>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
          {mypost.title}
        </h1>
        {mypost.excerpt && (
          <p className="text-lg leading-relaxed text-zinc-400">{mypost.excerpt}</p>
        )}
      </header>

      <div className="relative mb-10 overflow-hidden rounded-3xl border border-zinc-800/90 shadow-2xl shadow-black/40">
        <img
          src={mypost.image}
          alt={mypost.title}
          className="aspect-[21/9] w-full object-cover md:aspect-[2.2/1]"
        />
      </div>

      <div className="flex flex-wrap gap-2 border-b border-zinc-800/80 pb-8">
        {mypost.tags?.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-zinc-700/80 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="article-body pt-8">{renderContent(mypost.content)}</div>

      <div className="mt-12 flex items-center gap-4 rounded-2xl border border-zinc-800/90 bg-zinc-900/50 p-5">
        <img
          src={mypost.author.avatar}
          alt=""
          className="h-14 w-14 rounded-full object-cover ring-2 ring-zinc-700"
        />
        <div className="min-w-0 text-right">
          <p className="font-semibold text-white">{mypost.author.name}</p>
          <p className="text-sm text-zinc-500">{mypost.author.role}</p>
        </div>
      </div>

      <div className="mt-10 border-t border-zinc-800 pt-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 font-semibold text-orange-500 transition hover:text-orange-400"
        >
          كل المقالات
          <HiOutlineArrowLeft className="h-5 w-5" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
