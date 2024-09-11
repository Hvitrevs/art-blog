import Image from "next/image";
import "./globals.css";
import ProfileOverview from "./components/ProfileOverview";
import TopScreenGalery from "./components/TopScreenGalery";

export default function Home() {
  return (
    <div className="scrollbar-hide">
      <ProfileOverview />
      <TopScreenGalery />

    </div>
  );
}
