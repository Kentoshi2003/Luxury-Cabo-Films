import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Play } from 'lucide-react';

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
    thumbnailUrl: 'https://vz-9a81c5ce-46a.b-cdn.net/f11a8152-2c43-4f80-9817-40fb7c04c915/thumbnail_e1b33bee.jpg',
    videoUrl: 'https://player.mediadelivery.net/embed/564906/f11a8152-2c43-4f80-9817-40fb7c04c915',
    platform: 'bunny'
  },
  {
    id: '2',
    title: 'Costa Palmas Development',
    category: 'Beachfront Development',
    thumbnailUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    videoUrl: 'https://player.vimeo.com/video/824804225',
    platform: 'bunny'
  },
  {
    id: '3',
    title: 'Luxury Charter Experience',
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
    title: 'Desert Oasis Estate',
    category: 'Private Residence',
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
];

const VideoPortfolioSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

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
        className="relative bg-background px-6 py-section-lg"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-refined mb-6 inline-block text-xs text-champagne"
            >
              Portfolio
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-display text-display-md text-foreground"
            >
              Cinematic <span className="text-editorial">Films</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-6 max-w-xl font-body text-base font-light text-muted-foreground"
            >
              A curated selection of cinematic projects filmed across Los Cabos, showcasing 
              luxury villas, developments, and lifestyle experiences.
            </motion.p>
          </div>

          {/* Video Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.3 + index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className={`group relative cursor-pointer overflow-hidden ${
                  index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                onClick={() => handlePlayVideo(video.id)}
              >
                {/* Thumbnail */}
                <div className={`relative ${index === 0 ? 'aspect-video' : 'aspect-[4/3]'}`}>
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-background/40 transition-all duration-500 group-hover:bg-background/60" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-16 w-16 items-center justify-center rounded-full border border-foreground/30 bg-background/20 backdrop-blur-sm transition-all duration-300 group-hover:border-champagne group-hover:bg-champagne/20"
                    >
                      <Play className="h-6 w-6 text-foreground transition-colors group-hover:text-champagne" fill="currentColor" />
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-refined mb-2 block text-[10px] text-champagne">
                      {video.category}
                    </span>
                    <h3 className="font-display text-lg text-foreground">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
          onClick={handleCloseVideo}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseVideo}
            className="absolute right-6 top-6 z-50 text-refined text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Close
          </button>

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video w-full overflow-hidden">
              <iframe
                src={`${portfolioVideos.find(v => v.id === activeVideo)?.videoUrl}?autoplay=1`}
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={portfolioVideos.find(v => v.id === activeVideo)?.title}
              />
            </div>
            
            {/* Caption */}
            <div className="mt-6 text-center">
              <span className="text-refined mb-1 block text-[10px] text-champagne">
                {portfolioVideos.find(v => v.id === activeVideo)?.category}
              </span>
              <h3 className="font-display text-xl text-foreground">
                {portfolioVideos.find(v => v.id === activeVideo)?.title}
              </h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default VideoPortfolioSection;
