
import "./globals.css";
import Link from "next/link";
import { Anton } from 'next/font/google'
import Navbar from "./components/Navbar";

const anton = Anton({
  weight:'400',
  subsets: ['latin']
})

export const metadata = {
  title: "Venus of 12pm PRINT SHOP🎁",
  description: "High Quality Arts & Prints",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={anton.className}>
        <div className='w-full'>
        <Navbar />
        <div className="container mx-auto">
          <div className="leading-relaxed text-slate-200 antialiased selection:bg-teal-300 selection:text-teal-900">
            <div className="z-[-10] bg-slate-950 fixed inset-0 bg-[radial-gradient(circle_at_center_200px,_#B8860B25_5%,_transparent)]"></div>
            {children}
          </div>
        </div>
        </div>
        
      </body>
    </html>
  );
}
