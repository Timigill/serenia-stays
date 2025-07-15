import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from '../components/home/HeroSection';
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import GallerySection from "../components/home/GallerySection";
import FoodSection from "../components/home/FoodSection";
import RoomsSection from "../components/home/RoomsSection";
import QuerySection from "../components/home/QuerySection"; 

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <FoodSection />
      <RoomsSection />
      <QuerySection />
    </>
  );
}
