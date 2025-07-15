import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from '../components/home/HeroSection';
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import GallerySection from "../components/home/GallerySection";
import FoodSection from "../components/home/FoodSection";


export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <FoodSection />
    </>
  );
}
