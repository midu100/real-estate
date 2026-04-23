import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import Hero from "../components/home/Hero";
import FeaturedProperties from "../components/home/FeaturedProperties";
import Categories from "../components/home/Categories";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import VideoSection from "../components/home/VideoSection";
import CTASection from "../components/home/CTASection";

const Home = () => {
  useScrollReveal();

  return (
    <>
      <Hero />
      <FeaturedProperties />
      <Categories />
      <WhyChooseUs />
      <Testimonials />
      <VideoSection />
      <CTASection />
    </>
  );
};

export default Home;