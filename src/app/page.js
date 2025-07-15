import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from '../components/home/HeroSection';
import AboutSection from "../components/home/AboutSection";


export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      
    </>
  );
}
