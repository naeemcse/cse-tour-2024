import { Inter } from "next/font/google";

import "../globals.css";
import ToasterContext from "@components/ToasterContext";
import Provider from "@components/Provider";
import Navbar from "@components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CSE Tour 2K24",
  description: "Departmental Tour department of  CSE Arranged by  CSE-12 Batch ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-purple-1`}>
       
        <Provider>
           <Navbar/>
          <ToasterContext />
          {children}
        </Provider>
      </body>
    </html>
  );
}
