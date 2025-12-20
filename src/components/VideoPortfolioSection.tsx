import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Play, X, Image, Video, ChevronLeft, ChevronRight } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  mediaType: 'video' | 'photo';
  orientation: 'horizontal' | 'vertical';
  propertyTag: string;
  thumbnailUrl: string;
  videoUrl?: string;
  platform?: 'youtube' | 'vimeo' | 'cloudflare' | 'bunny';
  aspectRatio: '16:9' | '9:16' | '4:5' | '1:1' | '4:3';
}

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Villa Paraíso',
    mediaType: 'video',
    orientation: 'horizontal',
    propertyTag: 'Cinematic Films',
    thumbnailUrl: 'https://vz-9a81c5ce-46a.b-cdn.net/f11a8152-2c43-4f80-9817-40fb7c04c915/thumbnail_59379444.jpg',
    videoUrl: 'https://player.mediadelivery.net/embed/564906/f11a8152-2c43-4f80-9817-40fb7c04c915',
    platform: 'bunny',
    aspectRatio: '16:9'
  },
  {
    id: '2',
    title: 'Costa Palmas Tower',
    mediaType: 'video',
    orientation: 'vertical',
    propertyTag: 'Pre-Construction',
    thumbnailUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    videoUrl: 'https://player.vimeo.com/video/824804225',
    platform: 'vimeo',
    aspectRatio: '9:16'
  },
  {
    id: '3',
    title: 'Yacht Experience',
    mediaType: 'photo',
    orientation: 'horizontal',
    propertyTag: 'Lifestyle',
    thumbnailUrl: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80',
    aspectRatio: '16:9'
  },
  {
    id: '4',
    title: 'Casa Serena',
    mediaType: 'video',
    orientation: 'horizontal',
    propertyTag: 'Cinematic Films',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    videoUrl: 'https://player.vimeo.com/video/824804225',
    platform: 'vimeo',
    aspectRatio: '16:9'
  },
  {
    id: '5',
    title: 'Desert Oasis',
    mediaType: 'photo',
    orientation: 'vertical',
    propertyTag: 'Architecture',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    aspectRatio: '9:16'
  },
  {
    id: '6',
    title: 'Oceanview Resort',
    mediaType: 'video',
    orientation: 'horizontal',
    propertyTag: 'Pre-Construction',
    thumbnailUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80',
    videoUrl: 'https://player.vimeo.com/video/824804225',
    platform: 'vimeo',
    aspectRatio: '4:3'
  },
  {
    id: '7',
    title: 'Sunset Cliffs Villa',
    mediaType: 'video',
    orientation: 'horizontal',
    propertyTag: 'Cinematic Films',
    thumbnailUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    platform: 'youtube',
    aspectRatio: '16:9'
  },
  {
    id: '8',
    title: 'Marina Bay',
    mediaType: 'photo',
    orientation: 'horizontal',
    propertyTag: 'Lifestyle',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80',
    aspectRatio: '4:5'
  },
  {
    id: '9',
    title: 'Palmilla Estate',
    mediaType: 'video',
    orientation: 'vertical',
    propertyTag: 'Pre-Construction',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    platform: 'youtube',
    aspectRatio: '9:16'
  },
  {
    id: '10',
    title: 'Beachfront Residence',
    mediaType: 'photo',
    orientation: 'horizontal',
    propertyTag: 'Architecture',
    thumbnailUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
    aspectRatio: '16:9'
  },
  {
    id: '11',
    title: 'Modern Villa',
    mediaType: 'video',
    orientation: 'horizontal',
    propertyTag: 'Cinematic Films',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    videoUrl: 'https://player.vimeo.com/video/824804225',
    platform: 'vimeo',
    aspectRatio: '16:9'
  },
  {
    id: '12',
    title: 'Luxury Penthouse',
    mediaType: 'photo',
    orientation: 'vertical',
    propertyTag: 'Architecture',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
    aspectRatio: '9:16'
  },
];

const mediaTypeFilters = [
  { key: 'all', label: 'All', icon: null },
  { key: 'video', label: 'Video', icon: Video },
  { key: 'photo', label: 'Photo', icon: Image },
];

const orientationFilters = [
  { key: 'all', label: 'All' },
  { key: 'horizontal', label: 'Horizontal' },
  { key: 'vertical', label: 'Vertical' },
];

const propertyTags = ['All', 'Cinematic Films', 'Pre-Construction', 'Architecture', 'Lifestyle'];

const FEATURED_COUNT = 9;

const VideoPortfolioSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activePhoto, setActivePhoto] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mediaTypeFilter, setMediaTypeFilter] = useState('all');
  const [orientationFilter, setOrientationFilter] = useState('all');
  const [propertyTagFilter, setPropertyTagFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  // Get photo items only for navigation
  const photoItems = useMemo(() => portfolioItems.filter(item => item.mediaType === 'photo'), []);
  
  const currentPhotoIndex = useMemo(() => {
    if (!activePhoto) return -1;
    return photoItems.findIndex(p => p.id === activePhoto);
  }, [activePhoto, photoItems]);

  const goToPreviousPhoto = () => {
    if (currentPhotoIndex > 0) {
      setActivePhoto(photoItems[currentPhotoIndex - 1].id);
    } else {
      setActivePhoto(photoItems[photoItems.length - 1].id); // Loop to last
    }
  };

  const goToNextPhoto = () => {
    if (currentPhotoIndex < photoItems.length - 1) {
      setActivePhoto(photoItems[currentPhotoIndex + 1].id);
    } else {
      setActivePhoto(photoItems[0].id); // Loop to first
    }
  };

  const filteredItems = useMemo(() => {
    let items = portfolioItems;
    
    if (mediaTypeFilter !== 'all') {
      items = items.filter(item => item.mediaType === mediaTypeFilter);
    }
    if (orientationFilter !== 'all') {
      items = items.filter(item => item.orientation === orientationFilter);
    }
    if (propertyTagFilter !== 'All') {
      items = items.filter(item => item.propertyTag === propertyTagFilter);
    }
    
    return items;
  }, [mediaTypeFilter, orientationFilter, propertyTagFilter]);

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, FEATURED_COUNT);

  const handleItemClick = (item: PortfolioItem) => {
    if (item.mediaType === 'video' && item.videoUrl) {
      setActiveVideo(item.id);
    } else {
      setActivePhoto(item.id);
    }
  };

  // Native aspect ratio classes based on the item's actual aspect ratio
  const getAspectClass = (aspectRatio: string) => {
    switch (aspectRatio) {
      case '16:9': return 'aspect-video'; // 16:9
      case '9:16': return 'aspect-[9/16]'; // 9:16 vertical
      case '4:5': return 'aspect-[4/5]';
      case '1:1': return 'aspect-square';
      case '4:3': return 'aspect-[4/3]';
      default: return 'aspect-video';
    }
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
          <div className="mb-12 text-center">
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
              Featured <span className="text-editorial italic">Work</span>
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

          {/* Streamlined Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 md:mb-12 space-y-4 md:space-y-6"
          >
            {/* Filter Row 1: Media Type & Orientation */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6">
              {/* Media Type */}
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-refined text-[9px] sm:text-[10px] tracking-[0.15em] text-muted-foreground mr-1 sm:mr-2">Type:</span>
                {mediaTypeFilters.map((filter) => {
                  const Icon = filter.icon;
                  return (
                    <motion.button
                      key={filter.key}
                      onClick={() => setMediaTypeFilter(filter.key)}
                      className={`relative px-2.5 sm:px-4 py-1.5 sm:py-2 text-refined text-[10px] sm:text-xs tracking-[0.1em] ${
                        mediaTypeFilter === filter.key
                          ? 'text-champagne'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.span 
                        className="absolute inset-0 border border-champagne/50 bg-champagne/5"
                        initial={false}
                        animate={{ 
                          opacity: mediaTypeFilter === filter.key ? 1 : 0,
                          scale: mediaTypeFilter === filter.key ? 1 : 0.95
                        }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      />
                      <span className="relative flex items-center gap-1 sm:gap-2">
                        {Icon && <Icon className="h-3 w-3" />}
                        {filter.label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              <div className="h-4 w-px bg-border/50 hidden sm:block" />

              {/* Orientation */}
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-refined text-[9px] sm:text-[10px] tracking-[0.15em] text-muted-foreground mr-1 sm:mr-2">Format:</span>
                {orientationFilters.map((filter) => (
                  <motion.button
                    key={filter.key}
                    onClick={() => setOrientationFilter(filter.key)}
                    className={`relative px-2.5 sm:px-4 py-1.5 sm:py-2 text-refined text-[10px] sm:text-xs tracking-[0.1em] ${
                      orientationFilter === filter.key
                        ? 'text-champagne'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span 
                      className="absolute inset-0 border border-champagne/50 bg-champagne/5"
                      initial={false}
                      animate={{ 
                        opacity: orientationFilter === filter.key ? 1 : 0,
                        scale: orientationFilter === filter.key ? 1 : 0.95
                      }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    />
                    <span className="relative">{filter.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Filter Row 2: Property Tags */}
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 px-2">
              {propertyTags.map((tag) => (
                <motion.button
                  key={tag}
                  onClick={() => setPropertyTagFilter(tag)}
                  className={`relative px-3 sm:px-5 py-2 sm:py-2.5 text-refined text-[10px] sm:text-xs tracking-[0.12em] ${
                    propertyTagFilter === tag
                      ? 'text-champagne'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span 
                    className="absolute inset-0 border border-champagne/60 bg-champagne/10"
                    initial={false}
                    animate={{ 
                      opacity: propertyTagFilter === tag ? 1 : 0,
                      scale: propertyTagFilter === tag ? 1 : 0.95
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />
                  <motion.span 
                    className={`absolute inset-0 border transition-colors duration-200 ${
                      propertyTagFilter === tag ? 'border-transparent' : 'border-border/40 hover:border-border/60'
                    }`}
                  />
                  <motion.span 
                    className="absolute bottom-0 left-1/2 h-px bg-champagne"
                    initial={false}
                    animate={{
                      width: propertyTagFilter === tag ? '60%' : '0%',
                      x: '-50%'
                    }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                  <span className="relative">{tag}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Masonry Grid */}
          <motion.div 
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5"
            layout
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <AnimatePresence mode="popLayout">
              {displayedItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      delay: index * 0.06
                    }
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.85,
                    y: -20,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                  className="group relative cursor-pointer break-inside-avoid mb-5"
                  onClick={() => handleItemClick(item)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Card Container - preserves native aspect ratio */}
                  <motion.div 
                    className={`relative overflow-hidden bg-charcoal/20 ${getAspectClass(item.aspectRatio)}`}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {/* Thumbnail with zoom effect */}
                    <motion.img
                      src={item.thumbnailUrl}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      initial={{ scale: 1.05 }}
                      animate={{
                        scale: hoveredItem === item.id ? 1.15 : 1,
                        filter: hoveredItem === item.id ? 'brightness(0.7)' : 'brightness(1)'
                      }}
                      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                    
                    {/* Gradient Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"
                      animate={{
                        opacity: hoveredItem === item.id ? 0.95 : 0.7
                      }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Hover Border Effect */}
                    <motion.div 
                      className="absolute inset-0 border border-champagne/0"
                      animate={{
                        borderColor: hoveredItem === item.id ? 'hsl(40, 45%, 65%, 0.4)' : 'hsl(40, 45%, 65%, 0)'
                      }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Media Type Badge */}
                    <motion.div 
                      className="absolute top-4 left-4 z-10"
                      initial={false}
                      animate={{ 
                        y: hoveredItem === item.id ? 0 : -4,
                        opacity: hoveredItem === item.id ? 1 : 0.8
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <motion.span 
                        className="flex items-center gap-1.5 px-3 py-1.5 text-refined text-[10px] tracking-[0.1em] text-foreground/90 bg-background/50 backdrop-blur-md border border-foreground/10"
                        whileHover={{ scale: 1.05 }}
                        animate={{
                          borderColor: hoveredItem === item.id ? 'hsl(40, 45%, 65%, 0.4)' : 'hsl(0, 0%, 100%, 0.1)',
                          backgroundColor: hoveredItem === item.id ? 'hsl(40, 45%, 65%, 0.15)' : 'hsl(0, 0%, 0%, 0.4)'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.mediaType === 'video' ? <Video className="h-3 w-3" /> : <Image className="h-3 w-3" />}
                        <span className="uppercase">{item.mediaType}</span>
                      </motion.span>
                    </motion.div>

                    {/* Category Badge */}
                    <motion.div 
                      className="absolute top-4 right-4 z-10"
                      initial={false}
                      animate={{ 
                        y: hoveredItem === item.id ? 0 : -4,
                        opacity: hoveredItem === item.id ? 1 : 0,
                        scale: hoveredItem === item.id ? 1 : 0.9
                      }}
                      transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
                    >
                      <motion.span 
                        className="flex items-center gap-1.5 px-3 py-1.5 text-refined text-[10px] tracking-[0.1em] text-champagne bg-champagne/20 backdrop-blur-md border border-champagne/30"
                        whileHover={{ scale: 1.05, backgroundColor: 'hsl(40, 45%, 65%, 0.3)' }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="uppercase">{item.propertyTag}</span>
                      </motion.span>
                    </motion.div>
                    
                    {/* Play Button for Videos */}
                    {item.mediaType === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{ 
                            scale: hoveredItem === item.id ? 1.15 : 1,
                            opacity: hoveredItem === item.id ? 1 : 0.7
                          }}
                          transition={{ duration: 0.4 }}
                          className="relative flex h-14 w-14 md:h-16 md:w-16 items-center justify-center"
                        >
                          <motion.div
                            className="absolute inset-0 rounded-full border border-champagne/30"
                            animate={hoveredItem === item.id ? {
                              scale: [1, 1.3, 1],
                              opacity: [0.5, 0, 0.5]
                            } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          
                          <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border border-foreground/20 bg-background/20 backdrop-blur-md transition-all duration-500 group-hover:border-champagne/50 group-hover:bg-champagne/10">
                            <Play 
                              className="h-4 w-4 md:h-5 md:w-5 text-foreground transition-all duration-300 group-hover:text-champagne ml-0.5" 
                              fill="currentColor" 
                            />
                          </div>
                        </motion.div>
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                      <motion.div
                        animate={{ 
                          y: hoveredItem === item.id ? 0 : 8,
                          opacity: hoveredItem === item.id ? 1 : 0.9
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-refined mb-1 block text-[10px] tracking-[0.2em] text-champagne uppercase">
                          {item.propertyTag}
                        </span>
                        <h3 className="font-display text-base md:text-lg text-foreground tracking-wide">
                          {item.title}
                        </h3>
                      </motion.div>
                      
                      <motion.div
                        animate={{ scaleX: hoveredItem === item.id ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-3 h-px w-10 origin-left bg-champagne/50"
                      />
                    </div>

                    {/* Corner Accent */}
                    <motion.div 
                      className="absolute top-4 right-4 w-6 h-6 border-t border-r border-champagne/0"
                      animate={{
                        borderColor: hoveredItem === item.id ? 'hsl(40, 45%, 65%, 0.4)' : 'hsl(40, 45%, 65%, 0)'
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View All Projects CTA */}
          {filteredItems.length > FEATURED_COUNT && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16 flex justify-center"
            >
              <button 
                onClick={() => setShowAll(!showAll)}
                className="group relative px-8 py-4 overflow-hidden"
              >
                <span className="absolute inset-0 border border-champagne/30 transition-all duration-500 group-hover:border-champagne/60" />
                <span className="absolute inset-0 bg-champagne/0 transition-all duration-500 group-hover:bg-champagne/5" />
                <span className="relative text-refined text-xs tracking-[0.2em] text-champagne transition-all duration-300">
                  {showAll ? 'Show Featured' : `View All Projects (${filteredItems.length})`}
                </span>
              </button>
            </motion.div>
          )}

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
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/98 backdrop-blur-lg"
            onClick={() => setActiveVideo(null)}
          >
            {/* Close Button - Fixed top bar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="absolute top-0 left-0 right-0 z-50 flex justify-end p-4 sm:p-6 bg-gradient-to-b from-background/80 to-transparent"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="group flex items-center gap-3 px-4 py-2 border border-champagne/40 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:bg-champagne/10 hover:border-champagne"
              >
                <span className="text-refined text-[10px] tracking-[0.2em] text-champagne uppercase">Close</span>
                <X className="h-4 w-4 text-champagne transition-transform duration-300 group-hover:rotate-90" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-5xl px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-champagne/30" />
              <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-champagne/30" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-champagne/30" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-champagne/30" />
              
              <div className="aspect-video w-full overflow-hidden border border-border/20 bg-charcoal/50">
                <iframe
                  src={`${portfolioItems.find(v => v.id === activeVideo)?.videoUrl}?autoplay=1`}
                  className="h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={portfolioItems.find(v => v.id === activeVideo)?.title}
                />
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 text-center"
              >
                <span className="text-refined mb-2 block text-[10px] tracking-[0.3em] text-champagne uppercase">
                  {portfolioItems.find(v => v.id === activeVideo)?.propertyTag}
                </span>
                <h3 className="font-display text-2xl text-foreground">
                  {portfolioItems.find(v => v.id === activeVideo)?.title}
                </h3>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Photo Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/98 backdrop-blur-lg"
            onClick={() => setActivePhoto(null)}
          >
            {/* Close Button - Fixed top bar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="absolute top-0 left-0 right-0 z-50 flex justify-end p-4 sm:p-6 bg-gradient-to-b from-background/80 to-transparent"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="group flex items-center gap-3 px-4 py-2 border border-champagne/40 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:bg-champagne/10 hover:border-champagne"
              >
                <span className="text-refined text-[10px] tracking-[0.2em] text-champagne uppercase">Close</span>
                <X className="h-4 w-4 text-champagne transition-transform duration-300 group-hover:rotate-90" />
              </button>
            </motion.div>

            {/* Navigation Arrows */}
            {photoItems.length > 1 && (
              <>
                {/* Previous Arrow */}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPreviousPhoto();
                  }}
                  className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 group"
                >
                  <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-champagne/40 bg-background/80 backdrop-blur-sm transition-all duration-300 hover:bg-champagne/10 hover:border-champagne">
                    <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-champagne transition-transform duration-300 group-hover:-translate-x-0.5" />
                    <div className="absolute inset-0 border border-champagne/20 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                </motion.button>

                {/* Next Arrow */}
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNextPhoto();
                  }}
                  className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 group"
                >
                  <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-champagne/40 bg-background/80 backdrop-blur-sm transition-all duration-300 hover:bg-champagne/10 hover:border-champagne">
                    <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-champagne transition-transform duration-300 group-hover:translate-x-0.5" />
                    <div className="absolute inset-0 border border-champagne/20 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                </motion.button>
              </>
            )}

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-5xl px-16 sm:px-24 pt-16 sm:pt-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative corners - hidden on mobile */}
              <div className="hidden sm:block absolute top-8 left-20 w-12 h-12 border-t-2 border-l-2 border-champagne/30" />
              <div className="hidden sm:block absolute top-8 right-20 w-12 h-12 border-t-2 border-r-2 border-champagne/30" />
              <div className="hidden sm:block absolute -bottom-4 left-20 w-12 h-12 border-b-2 border-l-2 border-champagne/30" />
              <div className="hidden sm:block absolute -bottom-4 right-20 w-12 h-12 border-b-2 border-r-2 border-champagne/30" />
              
              {/* Image Container */}
              <div className="relative bg-card border border-border/20 p-2 sm:p-4">
                <img
                  src={portfolioItems.find(p => p.id === activePhoto)?.thumbnailUrl}
                  alt={portfolioItems.find(p => p.id === activePhoto)?.title}
                  className="w-full max-h-[60vh] sm:max-h-[70vh] object-contain"
                />
              </div>
              
              {/* Caption */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 sm:mt-8 text-center"
              >
                <span className="text-refined mb-2 block text-[10px] tracking-[0.3em] text-champagne uppercase">
                  {portfolioItems.find(p => p.id === activePhoto)?.propertyTag}
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-foreground">
                  {portfolioItems.find(p => p.id === activePhoto)?.title}
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
