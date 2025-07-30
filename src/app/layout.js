import { Geist, Geist_Mono ,Raleway} from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';
import BootstrapClient from '../components/BootstrapClient';
import 'bootstrap/dist/css/bootstrap.min.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ['400', '500', '700'], 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Serenia Stays",
  description: " Where Comfort Meets Elegance ",
};

export default function RootLayout({ children }) {
  return (
    <>
      <BootstrapClient />
      <Navbar />
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable}`}>
          {children}
        </body>
      </html>
    </>
  );
}
