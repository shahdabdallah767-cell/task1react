import React, { useMemo } from "react";
import { Link } from "react-router";
import data from "../../../posts.json";
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineArrowLeft,
  HiOutlineCamera,
  HiOutlineChevronLeft,
  HiOutlineClock,
  HiOutlineCog6Tooth,
  HiOutlineDocumentText,
  HiOutlineEnvelope,
  HiOutlineFolder,
  HiOutlineInformationCircle,
  HiOutlinePencilSquare,
  HiOutlinePhoto,
  HiOutlineStar,
  HiOutlineSun,
  HiOutlineUser,
  HiOutlineUsers,
} from "react-icons/hi2";

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

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition duration-200 hover:bg-orange-600 hover:shadow-orange-500/35 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500";

const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-600/60 bg-zinc-900/40 px-6 py-3.5 text-base font-semibold text-zinc-100 backdrop-blur-sm transition duration-200 hover:border-zinc-500 hover:bg-zinc-800/60 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500";

export default function Home() {
  const { posts, categories } = data;

  const featuredPosts = useMemo(() => {
    return posts.filter((p) => p.featured);
  }, [posts]);

  const stats = useMemo(() => {
    const authorNames = new Set(posts.map((p) => p.author.name));
    return {
      articles: `${posts.length}+`,
      readers: "+10ألف",
      categories: categories.length,
      authors: authorNames.size,
    };
  }, [posts, categories]);

  const statCards = [
    {
      icon: HiOutlineDocumentText,
      value: stats.articles,
      label: "مقالة",
    },
    {
      icon: HiOutlineUsers,
      value: stats.readers,
      label: "قارئ",
    },
    {
      icon: HiOutlineFolder,
      value: String(stats.categories),
      label: "تصنيفات",
    },
    {
      icon: HiOutlinePencilSquare,
      value: String(stats.authors),
      label: "كاتب",
    },
  ];

  const categoryIcons = {
    "تقنيات": HiOutlineAdjustmentsHorizontal,
    "مناظر طبيعية": HiOutlinePhoto,
    "بورتريه": HiOutlineUser,
    "إضاءة": HiOutlineSun,
    "معدات": HiOutlineCog6Tooth,
  };

  const categoryStats = useMemo(() => {
    return categories.map(cat => ({
      name: cat.name,
      count: posts.filter(p => p.category === cat.name).length,
      icon: categoryIcons[cat.name] || HiOutlineFolder
    }));
  }, [posts, categories]);

  const latestPosts = useMemo(() => {
    return posts.slice(0, 3);
  }, [posts]);

  return (
    <>
      {/* Hero Section */}
      <div className="relative -mx-4 flex min-h-[min(100dvh,56rem)] flex-col overflow-hidden rounded-b-3xl md:-mx-6">
        <div
          className="bg-grid-subtle pointer-events-none absolute inset-0 opacity-[0.45]"
          aria-hidden
        />
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/30 via-transparent to-zinc-950"
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-4 py-14 text-center sm:py-16 md:py-20">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-zinc-700/70 bg-zinc-950/65 px-4 py-2 text-sm text-zinc-200 shadow-sm shadow-black/20 backdrop-blur-md">
            <span className="flex gap-1" aria-hidden>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500/70" />
            </span>
            مرحباً بك في عدسة
          </div>

          <h1 className="text-[2rem] font-extrabold leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            <span className="block">
              اكتشف <span className="text-orange-500">فن</span>
            </span>
            <span className="mt-1 block text-zinc-50">
              التصوير الفوتوغرافي
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-zinc-400 sm:text-lg">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link to="/blog" className={btnPrimary}>
              استكشف المقالات
              <HiOutlineArrowLeft className="h-5 w-5 shrink-0" aria-hidden />
            </Link>
            <Link to="/about" className={btnGhost}>
              <HiOutlineInformationCircle
                className="h-5 w-5 shrink-0 text-zinc-400"
                aria-hidden
              />
              اعرف المزيد
            </Link>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-auto grid w-full max-w-4xl grid-cols-2 gap-3 px-4 pb-10 sm:gap-4 md:grid-cols-4 md:pb-14">
          {statCards.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center rounded-2xl border border-zinc-800/80 bg-zinc-900/50 px-3 py-5 text-center shadow-sm shadow-black/20 backdrop-blur-sm transition duration-200 hover:border-orange-500/15 hover:bg-zinc-900/80 hover:shadow-md hover:shadow-orange-500/5 md:px-4 md:py-6"
            >
              <Icon
                className="mb-2.5 h-7 w-7 text-orange-500 md:mb-3"
                aria-hidden
              />
              <p className="text-xl font-bold tabular-nums tracking-tight text-white md:text-2xl">
                {value}
              </p>
              <p className="mt-1 text-[11px] text-zinc-500 md:text-sm">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <section className="mx-auto max-w-6xl border-t border-zinc-800/60 px-4 pb-20 pt-12 md:px-6 md:pb-24 md:pt-16">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 text-right">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              مقالات مختارة
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-zinc-500 md:text-base">
              محتوى منتقى لبدء رحلة تعلمك في عالم العدسة
            </p>
          </div>
          <Link
            to="/blog"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition hover:bg-orange-600 active:scale-[0.98] sm:self-auto"
          >
            عرض الكل
            <HiOutlineChevronLeft className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="space-y-10">
          {featuredPosts.map((post) => (
            <article key={post.id} className="group overflow-hidden rounded-3xl border border-zinc-800/90 bg-zinc-900/30 shadow-2xl shadow-black/40 transition duration-300 hover:border-zinc-700/90">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[16/10] min-h-[200px] overflow-hidden md:min-h-[340px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="home-feature-img h-full w-full object-cover group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 md:opacity-100" />
                </div>

                <div className="flex flex-col justify-between bg-zinc-950/80 p-6 md:bg-zinc-900/95 md:p-8 lg:p-10">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="rounded-full bg-orange-500/12 px-3 py-1 text-xs font-semibold text-orange-400 ring-1 ring-orange-500/25">
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-zinc-500">
                        <HiOutlineClock className="h-4 w-4 text-zinc-600" aria-hidden />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold leading-snug text-white md:text-2xl lg:text-[1.7rem] lg:leading-snug">
                      {post.title}
                    </h3>

                    {post.excerpt && (
                      <p className="line-clamp-4 text-sm leading-[1.75] text-zinc-400 md:text-base">
                        {post.excerpt}
                      </p>
                    )}
                  </div>

                  <div className="mt-8 flex flex-col gap-6 border-t border-zinc-800/90 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-orange-500 transition hover:text-orange-400"
                    >
                      اقرأ المقال
                      <HiOutlineArrowLeft className="h-4 w-4" aria-hidden />
                    </Link>

                    <div className="flex items-center gap-3 sm:justify-end">
                      <img
                        src={post.author.avatar}
                        alt=""
                        className="h-11 w-11 rounded-full object-cover ring-2 ring-zinc-700/80"
                      />
                      <div className="min-w-0 text-right text-sm">
                        <p className="truncate font-semibold text-zinc-100">
                          {post.author.name}
                        </p>
                        <p className="text-zinc-500">
                          {formatDateAr(post.date)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Explore by Topic Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-medium text-orange-500">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            التصنيفات
          </div>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">استكشف حسب الموضوع</h2>
          <p className="mt-3 text-zinc-500">اعثر على محتوى مصمم حسب اهتماماتك</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {categoryStats.map((cat) => (
            <Link
              key={cat.name}
              to={`/blog?category=${cat.name}`}
              className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-8 text-center transition duration-200 hover:border-orange-500/30 hover:bg-zinc-900/60"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-800 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                <cat.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-1 font-bold text-white">{cat.name}</h3>
              <p className="text-xs text-zinc-500">{cat.count} مقالة</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <div className="text-center sm:text-right">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-medium text-orange-500">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              الأحدث
            </div>
            <h2 className="text-3xl font-bold text-white md:text-4xl">أحدث المقالات</h2>
            <p className="mt-2 text-zinc-500">محتوى جديد طازج من المطبعة</p>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 transition hover:text-orange-400"
          >
            عرض جميع المقالات
            <HiOutlineArrowLeft className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-3xl border border-zinc-800/90 bg-zinc-900/40 shadow-lg shadow-black/20 transition duration-300 hover:border-zinc-700 hover:shadow-xl hover:shadow-orange-500/5"
            >
              <Link
                to={`/blog/${post.id}`}
                className="relative block aspect-[16/11] shrink-0 overflow-hidden"
              >
                <img
                  className="home-feature-img h-full w-full object-cover group-hover:scale-[1.04]"
                  src={post.image}
                  alt={post.title}
                />
                <span className="absolute top-4 start-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {post.category}
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-5 md:p-6">
                <Link to={`/blog/${post.id}`} className="block">
                  <h2 className="text-lg font-bold leading-snug text-white transition group-hover:text-orange-500">
                    {post.title}
                  </h2>
                </Link>
                {post.excerpt && (
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-400">
                    {post.excerpt}
                  </p>
                )}
                <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
                  <HiOutlineClock
                    className="h-3.5 w-3.5 text-zinc-600"
                    aria-hidden
                  />
                  {post.readTime}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-8 md:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800/50 p-8 md:p-12">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-500 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight max-w-2xl">
              اشترك في <span className="text-orange-500">نشرتنا</span> الإخبارية
            </h2>

            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-none mb-8">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
            </p>

            <div className="w-full max-w-xl">
              <form className="flex flex-col sm:flex-row gap-3 mb-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="ادخل بريدك الإلكتروني"
                  className="flex-1 bg-zinc-950/80 border border-zinc-800 rounded-2xl px-6 py-3.5 text-sm text-white focus:border-orange-500 outline-none transition-all placeholder:text-zinc-600 text-right"
                  required
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-2xl transition-all shadow-xl shadow-orange-500/20 active:scale-95 whitespace-nowrap text-sm">
                  اشترك الآن
                </button>
              </form>
              <p className="text-zinc-500 text-xs">
                * لن نقوم بإرسال رسائل مزعجة، يمكنك إلغاء الاشتراك في أي وقت.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
