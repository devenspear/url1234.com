'use client'

import { Inter, Playfair_Display } from 'next/font/google';
import '../../../styles/kaleidoscope.css';
import KaleidoscopeHero from '../../../components/kaleidoscope/Hero/KaleidoscopeHero';
import AboutSection from '../../../components/kaleidoscope/sections/AboutSection';
import ProblemSection from '../../../components/kaleidoscope/sections/ProblemSection';
import ApproachSection from '../../../components/kaleidoscope/sections/ApproachSection';
import MethodSection from '../../../components/kaleidoscope/sections/MethodSection';
import TestimonialSection from '../../../components/kaleidoscope/sections/TestimonialSection';
import CTASection from '../../../components/kaleidoscope/sections/CTASection';
import BookSection from '../../../components/kaleidoscope/sections/BookSection';
import Footer from '../../../components/kaleidoscope/shared/Footer';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

export default function KaleidoscopePage() {
  return (
    <div className={`${inter.className} overflow-x-hidden`} style={{ 
      fontFamily: `${inter.style.fontFamily}, ${playfair.style.fontFamily}` 
    }}>
      {/* Hero Section - 16:9 Aspect Ratio */}
      <section id="hero" className="w-full aspect-video relative">
        <KaleidoscopeHero 
          title="kaleidoscope"
          subtitle="A radical recovery solution for those ready to be free from drinking and the pain beneath it"
          showControls={true}
        />
      </section>
      
      {/* Main Content Sections */}
      <main className="w-full">
        <div id="about" className="w-full">
          <AboutSection />
        </div>
        
        <div id="problem" className="w-full">
          <ProblemSection />
        </div>
        
        <div id="approach" className="w-full">
          <ApproachSection />
        </div>
        
        <div id="method" className="w-full">
          <MethodSection />
        </div>
        
        <div id="testimonial" className="w-full">
          <TestimonialSection />
        </div>
        
        <div id="cta" className="w-full">
          <CTASection />
        </div>
        
        <div id="book" className="w-full">
          <BookSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}