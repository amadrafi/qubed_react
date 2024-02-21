
import { Inter } from "next/font/google";
import { ThemeModeScript } from 'flowbite-react';
import "./globals.css";
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Qubed",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-zinc-800">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        <div className='h-screen flex flex-row bg-inherit overflow-x-hidden'>
          <Navbar />
          <div className="flex-auto p-2 bg-zinc-800">{children}</div>
        </div>
      </body>
    </html>
  );
}
