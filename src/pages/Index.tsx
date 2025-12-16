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
        
        <WhatIDoSection />
        
        <ServicesSection />
        
        <div id="portfolio">
          <VideoPortfolioSection />
        </div>
        
        <div id="about">
          <AboutSection />
        </div>
        
        <WhyWorkWithMeSection />
        
        <TestimonialsSection />
        
        <div id="contact">
          <CTASection />
        </div>
        
        <Footer />
      </main>
    </>
  );
};

export default Index;
