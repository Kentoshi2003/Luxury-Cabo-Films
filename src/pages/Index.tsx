import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhatIDoSection from '@/components/WhatIDoSection';
import ServicesSection from '@/components/ServicesSection';
import VideoPortfolioSection from '@/components/VideoPortfolioSection';
import AboutSection from '@/components/AboutSection';
import WhyWorkWithMeSection from '@/components/WhyWorkWithMeSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}
      
      <main className={`min-h-screen bg-background ${isLoading ? 'overflow-hidden' : ''}`}>
        <Navigation />
        
        <div id="hero">
          <HeroSection />
        </div>
        
        <div id="what-i-do">
          <WhatIDoSection />
        </div>
        
        <div id="services">
          <ServicesSection />
        </div>
        
        <div id="portfolio">
          <VideoPortfolioSection />
        </div>
        
        <div id="about">
          <AboutSection />
        </div>
        
        <div id="why-work-with-me">
          <WhyWorkWithMeSection />
        </div>
        
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        
        <div id="contact">
          <CTASection />
        </div>
        
        <Footer />
        
        {/* Floating CTA Button */}
        <FloatingCTA />
      </main>
    </>
  );
};

export default Index;