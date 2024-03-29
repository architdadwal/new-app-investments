import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 100 }}>
          <Navbar />
        </div>
        <div
          style={{
            paddingTop: "52px",
            paddingBottom:
              "60px" /* Adjust this value to match your Navbar's height */,
          }}
        >
          {children}
        </div>
        <div
          style={{ position: "fixed", bottom: 0, width: "100%", zIndex: 100 }}
        >
          <Footer />
        </div>
      </body>
    </html>
  );
}
