import React, { useState } from "react";
import { Link } from "react-router";
import { HiHeart } from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import data from "../../../posts.json";

const accent = "#ff7a21";

const iconMap = [
  { key: "youtube", hrefKey: "youtube", Icon: FaYoutube },
  { key: "linkedin", hrefKey: "linkedin", Icon: FaLinkedin },
  { key: "github", hrefKey: "github", Icon: FaGithub },
  { key: "twitter", hrefKey: "twitter", Icon: FaXTwitter },
];

function SectionTitle({ children }) {
  return (
    <h3 className="mb-5 flex items-center gap-2 text-right text-base font-bold text-white">
      <span
        className="h-1 w-8 shrink-0 rounded-full"
        style={{ backgroundColor: accent }}
        aria-hidden
      />
      {children}
    </h3>
  );
}

export default function Footer() {
  const { siteInfo, categories } = data;
  const { name, description, social } = siteInfo;
  const [newsletter, setNewsletter] = useState("");

  function handleSubscribe(e) {
    e.preventDefault();
    setNewsletter("");
  }

  const socialEntries = iconMap
    .map(({ key, hrefKey, Icon }) => {
      const href = social[hrefKey];
      return href ? { key, href, Icon } : null;
    })
    .filter(Boolean);

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* العلامة + السوشيال */}
          <div className="text-right">
            <Link to="/" className="inline-flex items-center gap-3">
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl font-bold text-white shadow-lg"
                style={{ backgroundColor: accent }}
              >
                ع
              </span>
              <span className="text-xl font-bold text-white">{name}</span>
            </Link>
            <p className="mt-4 text-sm leading-[1.75] text-[#a0a0a0]">
              {description}
            </p>
            {socialEntries.length > 0 && (
              <div className="mt-6 flex flex-wrap justify-end gap-2">
                {socialEntries.map(({ key, href, Icon }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/90 text-[#a0a0a0] transition hover:border-zinc-600 hover:text-amber-400"
                    aria-label={key}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* استكشف */}
          <div className="text-right">
            <SectionTitle>استكشف</SectionTitle>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-[#a0a0a0] transition hover:text-amber-400"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-[#a0a0a0] transition hover:text-amber-400"
                >
                  المدونة
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#a0a0a0] transition hover:text-amber-400"
                >
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          {/* التصنيفات */}
          <div className="text-right">
            <SectionTitle>التصنيفات</SectionTitle>
            <ul className="space-y-3 text-sm">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <Link
                    to="/blog"
                    className="text-[#a0a0a0] transition hover:text-amber-400"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* النشرة */}
          <div className="text-right">
            <SectionTitle>ابقى على اطلاع</SectionTitle>
            <p className="mb-4 text-sm leading-relaxed text-[#a0a0a0]">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={newsletter}
                onChange={(e) => setNewsletter(e.target.value)}
                required
                dir="rtl"
                className="w-full rounded-xl border border-zinc-800 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-[#6b6b6b] focus:border-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                placeholder="ادخل بريدك الالكتروني"
                autoComplete="email"
              />
              <button
                type="submit"
                className="w-full rounded-xl py-3.5 text-sm font-semibold text-white transition hover:opacity-95 active:scale-[0.99]"
                style={{ backgroundColor: accent }}
              >
                اشترك
              </button>
            </form>
          </div>
        </div>

        {/* الشريط السفلي */}
        <div className="mt-14 flex flex-col gap-4 border-t border-zinc-900 pt-8 text-sm text-[#a0a0a0] md:flex-row md:items-center md:justify-between">
          <p className="flex flex-wrap items-center justify-center gap-1 text-center md:justify-end md:text-right">
            <span>© {year} {name}. صنع بكل</span>
            <HiHeart
              className="mx-0.5 inline h-4 w-4 shrink-0"
              style={{ color: accent }}
              aria-label="حب"
            />
            <span>جميع الحقوق محفوظة</span>
          </p>
          <div className="flex justify-center gap-6 md:justify-start">
            <a
              href="#"
              className="transition hover:text-white"
              onClick={(e) => e.preventDefault()}
            >
              سياسة الخصوصية
            </a>
            <a
              href="#"
              className="transition hover:text-amber-400"
              onClick={(e) => e.preventDefault()}
            >
              شروط الخدمة
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
