import Image from "next/image";
import "./globals.css";
import ProfileOverview from "./components/ProfileOverview";
import TopScreenGalery from "./components/TopScreenGalery";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="scrollbar-hide">

      <TopScreenGalery />
      <TopScreenGalery />
      <TopScreenGalery />
      <TopScreenGalery />


    </div>
  );
}
