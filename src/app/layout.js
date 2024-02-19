import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Qubed",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-stone-50">
      <body className={inter.className}>
        <div className='h-screen flex flex-row'>
          <Navbar />
          <div className="flex-auto bg-slate-100">{children}</div>
        </div>
      </body>
    </html>
  );
}
