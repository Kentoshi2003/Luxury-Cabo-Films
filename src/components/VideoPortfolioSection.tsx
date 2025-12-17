import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Play, X } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  category: string;
  thumbnailUrl: string;
  videoUrl: string;
  platform: 'bunny' | 'cloudflare';
  duration?: string; 
  resolution?: string; 
}

const portfolioVideos: VideoItem[] = [
  {
    id: '1',
    title: 'Villa Paraíso',
    category: 'Private Residence',
    thumbnailUrl: '/thumnails/AI Villa.png',
    videoUrl: 'https://player.mediadelivery.net/embed/564906/f11a8152-2c43-4f80-9817-40fb7c04c915',
    platform: 'bunny'
  },
  {
    id: '2',
    title: 'Costa Palmas',
    category: 'Beachfront Development',
    thumbnailUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    videoUrl: 'https://player.vimeo.com/video/824804225',
    platform: 'bunny'
  },
  {
    id: '3',
    title: 'Yacht Experience',
    category: 'Lifestyle',
    thumbnailUrl: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    platform: 'bunny'
  },
  {
    id: '4',
    title: 'Casa Serena',
    category: 'Interior Design',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    videoUrl: 'https://player.vimeo.com/video/824804225',
    platform: 'bunny'
  },
  {
    id: '5',
    title: 'Desert Oasis',
    category: 'Private Estate',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    platform: 'bunny'
  },
  {
    id: '6',
    title: 'Oceanview Resort',
    category: 'Pre-Construction',
    thumbnailUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80',
    videoUrl: 'https://player.vimeo.com/video/824804225',
    platform: 'bunny'
  },
  {
    id: '7',
    title: 'Sunset Cliffs Villa',
    category: 'Oceanfront',
    thumbnailUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    platform: 'bunny'
  },
  {
    id: '8',
    title: 'Marina Bay',
    category: 'Commercial',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80',
    videoUrl: 'https://player.vimeo.com/video/824804225',
    platform: 'bunny'
  },
  {
    id: '9',
    title: 'Palmilla Estate',
    category: 'Luxury Villa',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    platform: 'bunny'
  },
];

const VideoPortfolioSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  const handlePlayVideo = (videoId: string) => {
    setActiveVideo(videoId);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  return (
    <>
      <section 
        ref={ref as React.RefObject<HTMLElement>}
        className="relative bg-background px-6 py-section-lg overflow-hidden"
      >
        {/* Background Accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal/5 to-background pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-20 text-center">
            <motion.div
              initial={{ width: 0 }}
              animate={isVisible ? { width: '4rem' } : {}}
              transition={{ duration: 0.8 }}
              className="mx-auto mb-8 h-px bg-gradient-to-r from-transparent via-champagne to-transparent"
            />
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-refined mb-6 inline-block text-xs tracking-[0.3em] text-champagne uppercase"
            >
              Portfolio
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-display text-display-md text-foreground"
            >
              Cinematic <span className="text-editorial italic">Films</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-6 max-w-xl font-body text-base font-light text-muted-foreground"
            >
              A curated selection of cinematic projects filmed across Los Cabos
            </motion.p>
          </div>

          {/* 3x3 Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {portfolioVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 60 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2 + index * 0.08,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="group relative cursor-pointer"
                onClick={() => handlePlayVideo(video.id)}
                onMouseEnter={() => setHoveredVideo(video.id)}
                onMouseLeave={() => setHoveredVideo(null)}
              >
                {/* Card Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-charcoal/20">
                  {/* Thumbnail */}
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border border-transparent transition-all duration-500 group-hover:border-champagne/30" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={false}
                      animate={{ 
                        scale: hoveredVideo === video.id ? 1.1 : 1,
                        opacity: hoveredVideo === video.id ? 1 : 0.8
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full border border-foreground/20 bg-background/10 backdrop-blur-sm transition-all duration-500 group-hover:border-champagne/50 group-hover:bg-champagne/10"
                    >
                      <Play 
                        className="h-5 w-5 md:h-6 md:w-6 text-foreground transition-all duration-300 group-hover:text-champagne ml-0.5" 
                        fill="currentColor" 
                      />
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <motion.div
                      initial={false}
                      animate={{ 
                        y: hoveredVideo === video.id ? 0 : 8,
                        opacity: hoveredVideo === video.id ? 1 : 0.9
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-refined mb-2 block text-[10px] tracking-[0.2em] text-champagne uppercase">
                        {video.category}
                      </span>
                      <h3 className="font-display text-base md:text-lg text-foreground tracking-wide">
                        {video.title}
                      </h3>
                    </motion.div>
                    
                    {/* Animated Underline */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: hoveredVideo === video.id ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-3 h-px w-12 origin-left bg-champagne/50"
                    />
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-champagne/0 transition-all duration-500 group-hover:border-champagne/30" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Decorative Element */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex justify-center"
          >
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/98 backdrop-blur-md"
            onClick={handleCloseVideo}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.2 }}
              onClick={handleCloseVideo}
              className="absolute right-6 top-6 z-50 flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground group"
            >
              <span className="text-refined text-xs tracking-wider">Close</span>
              <X className="h-4 w-4 transition-transform group-hover:rotate-90" />
            </motion.button>

            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-5xl px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video w-full overflow-hidden border border-border/20 bg-charcoal/50">
                <iframe
                  src={`${portfolioVideos.find(v => v.id === activeVideo)?.videoUrl}?autoplay=1`}
                  className="h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={portfolioVideos.find(v => v.id === activeVideo)?.title}
                />
              </div>
              
              {/* Caption */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 text-center"
              >
                <span className="text-refined mb-2 block text-[10px] tracking-[0.3em] text-champagne uppercase">
                  {portfolioVideos.find(v => v.id === activeVideo)?.category}
                </span>
                <h3 className="font-display text-xl md:text-2xl text-foreground tracking-wide">
                  {portfolioVideos.find(v => v.id === activeVideo)?.title}
                </h3>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoPortfolioSection;
