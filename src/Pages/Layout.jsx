import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950">
      <Navbar />
      <main className="w-full flex-1 px-4 pb-16 pt-24 md:px-6 md:pt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
