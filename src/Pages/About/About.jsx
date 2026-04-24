import React from "react";
import { Link } from "react-router";
import data from "../../../posts.json";
import {
  HiOutlineArrowLeft,
  HiOutlineEnvelope,
  HiOutlineSparkles,
  HiOutlineUsers,
  HiOutlineNewspaper,
  HiOutlineFolder,
  HiOutlineUserGroup,
  HiOutlineCheckBadge,
  HiOutlineLightBulb,
  HiOutlineGlobeAlt,
  HiOutlineArrowPath
} from "react-icons/hi2";

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/25 transition duration-200 hover:bg-orange-600 hover:shadow-orange-500/35 active:scale-[0.98]";

const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-900/40 px-8 py-4 text-base font-bold text-zinc-100 backdrop-blur-sm transition duration-200 hover:border-zinc-500 hover:bg-zinc-800/60 active:scale-[0.98]";

export default function About() {
  const { siteInfo, posts } = data;
  const { email } = siteInfo;

  // Extract unique authors from posts to use as team members
  const team = React.useMemo(() => {
    const authorsMap = new Map();
    posts.forEach(post => {
      if (post.author && !authorsMap.has(post.author.name)) {
        authorsMap.set(post.author.name, post.author);
      }
    });
    return Array.from(authorsMap.values());
  }, [posts]);

  const stats = [
    { label: "قارئ شهرياً", value: "+2 مليون", icon: HiOutlineUsers },
    { label: "مقالة منشورة", value: "+500", icon: HiOutlineNewspaper },
    { label: "كاتب خبير", value: "+50", icon: HiOutlineUserGroup },
    { label: "تصنيف", value: "+15", icon: HiOutlineFolder },
  ];

  const values = [
    {
      title: "الجودة أولاً",
      desc: "محتوى مدروس ومكتوب بخبرة.",
      icon: HiOutlineCheckBadge
    },
    {
      title: "تركيز عملي",
      desc: "أمثلة واقعية يمكنك تطبيقها اليوم.",
      icon: HiOutlineLightBulb
    },
    {
      title: "المجتمع",
      desc: "تعلم مع آلاف المصورين.",
      icon: HiOutlineGlobeAlt
    },
    {
      title: "دائماً محدث",
      desc: "نتابع أحدث الاتجاهات وأفضل الممارسات.",
      icon: HiOutlineArrowPath
    }
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-16 md:space-y-20 pb-20 px-4 md:px-6">
      {/* Hero Section */}
      <section className="text-center pt-12 md:pt-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm font-bold text-orange-500 mb-6">
          <HiOutlineSparkles className="h-4 w-4" />
          من نحن
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
          مهمتنا هي <span className="text-orange-500">الإعلام</span> والإلهام
        </h1>
        <p className="mx-auto max-w-3xl text-zinc-400 text-base md:text-lg leading-relaxed">
          مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
        </p>
      </section>

      {/* Stats Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center rounded-[2rem] border border-zinc-800/80 bg-zinc-900/30 p-8 text-center transition duration-300 hover:border-orange-500/30">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800 text-orange-500">
              <stat.icon className="h-6 w-6" />
            </div>
            <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.value}</div>
            <div className="text-[10px] md:text-xs text-zinc-500 font-medium uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Values Section */}
      <section className="space-y-10 pt-4">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-black text-white">قيمنا</h2>
          <p className="text-zinc-500 text-base">المبادئ التي توجه كل ما نقوم بإنشائه</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((val, idx) => (
            <div key={idx} className="rounded-[2rem] border border-zinc-800/80 bg-zinc-900/30 p-8 transition duration-300 hover:border-zinc-700">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-800 text-orange-500">
                <val.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{val.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-10 pt-4">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-black text-white">تعرف على كتابنا</h2>
          <p className="text-zinc-500 text-base">فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {team.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4 rounded-[2rem] border border-zinc-800/60 bg-zinc-900/20 p-8 text-center transition duration-300 hover:bg-zinc-900/50 hover:border-zinc-700 group">
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-zinc-800 shadow-2xl transition-transform duration-300 group-hover:scale-105">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-black text-white text-xl">{member.name}</h4>
                <p className="text-xs text-orange-500 font-bold uppercase tracking-widest">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden bg-orange-500 py-12 md:py-16 text-center shadow-2xl shadow-orange-500/20">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-white rounded-full blur-[120px]" />
          <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-black rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              لديك أسئلة؟ دعنا نتحدث!
            </h2>
            <p className="text-lg md:text-xl text-white font-bold leading-relaxed max-w-2xl mx-auto">
              نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل معنا.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href={`mailto:${email}`} className="inline-flex items-center justify-center gap-3 rounded-2xl bg-zinc-950 px-8 py-4 text-base font-black text-white shadow-xl transition-all duration-300 hover:bg-zinc-900 hover:scale-105 active:scale-95">
              <HiOutlineEnvelope className="h-6 w-6 text-orange-500" />
              تواصل معنا
            </a>
            <Link to="/blog" className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-white/40 bg-white/20 px-8 py-4 text-base font-black text-white backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:scale-105 active:scale-95">
              تصفح المدونة
              <HiOutlineArrowLeft className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
