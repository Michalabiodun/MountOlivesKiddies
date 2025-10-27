import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import galleryHeroBg from '../assets/images/gallery-hero.jpg';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [loadedItems, setLoadedItems] = useState(12);

  const galleryItems = [
    {
      id: 1,
      category: 'classroom',
      image: '/images/gallery/classroom-1.jpg',
      title: 'Interactive Learning',
      description: 'Students engaged in hands-on activities'
    },
    {
      id: 2,
      category: 'classroom',
      image: '/images/gallery/classroom-2.jpg',
      title: 'Story Time',
      description: 'Captivating story sessions with our teachers'
    },
    {
      id: 3,
      category: 'playground',
      image: '/images/gallery/playground-1.jpg',
      title: 'Outdoor Play',
      description: 'Fun moments on our safe playground equipment'
    },
    {
      id: 4,
      category: 'playground',
      image: '/images/gallery/playground-2.jpg',
      title: 'Sandbox Adventures',
      description: 'Creative play in our sensory sand area'
    },
    {
      id: 5,
      category: 'events',
      image: '/images/gallery/event-1.jpg',
      title: 'Annual Day',
      description: 'Colorful performances by our talented students'
    },
    {
      id: 6,
      category: 'events',
      image: '/images/gallery/event-2.jpg',
      title: 'Science Fair',
      description: 'Young scientists showcasing their projects'
    },
    {
      id: 7,
      category: 'arts',
      image: '/images/gallery/arts-1.jpg',
      title: 'Creative Painting',
      description: 'Expressing imagination through colors'
    },
    {
      id: 8,
      category: 'arts',
      image: '/images/gallery/arts-2.jpg',
      title: 'Clay Modeling',
      description: 'Developing fine motor skills with clay'
    },
    {
      id: 9,
      category: 'sports',
      image: '/images/gallery/sports-1.jpg',
      title: 'Field Races',
      description: 'Healthy competition and team spirit'
    },
    {
      id: 10,
      category: 'sports',
      image: '/images/gallery/sports-2.jpg',
      title: 'Achievement Celebration',
      description: 'Recognizing our young athletes'
    },
    // Add more items as needed
  ];

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'classroom', label: 'Classroom Activities' },
    { id: 'playground', label: 'Playground Fun' },
    { id: 'events', label: 'School Events' },
    { id: 'arts', label: 'Arts & Crafts' },
    { id: 'sports', label: 'Sports Day' }
  ];

  const filteredItems = galleryItems.filter(item => 
    activeFilter === 'all' || item.category === activeFilter
  ).slice(0, loadedItems);

  const openLightbox = (item) => {
    setCurrentImage(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  const loadMore = () => {
    setLoadedItems(prev => prev + 6);
  };

  const navigateLightbox = (direction) => {
    const currentIndex = filteredItems.findIndex(item => item.id === currentImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    }
    
    setCurrentImage(filteredItems[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox('prev');
        if (e.key === 'ArrowRight') navigateLightbox('next');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentImage]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const lightboxVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const lightboxContentVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
  };

  return (
    <div className="gallery">
      {/* Page Hero */}
      <section className="page-hero" style={{backgroundImage: `url(${galleryHeroBg})`}}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Capturing precious moments of learning, growth, and fun at Mountolives Kiddies School
          </motion.p>
        </div>
      </section>

      {/* Gallery Navigation */}
      <section className="gallery-nav">
        <div className="container">
          <motion.div 
            className="gallery-filter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveFilter(filter.id);
                  setLoadedItems(12);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <motion.div 
            className="gallery-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeFilter}
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="gallery-item"
                  data-category={item.category}
                  variants={itemVariants}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <motion.div 
                    className="gallery-card"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openLightbox(item)}
                  >
                    <div className="gallery-image">
                      <motion.img 
                        src={item.image} 
                        alt={item.title}
                        loading="lazy"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="gallery-overlay">
                      <div className="gallery-info">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <span className="gallery-category">
                          {filters.find(f => f.id === item.category)?.label}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More Button */}
          {loadedItems < galleryItems.length && (
            <motion.div 
              className="gallery-load-more"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button 
                className="btn btn-primary" 
                id="loadMore"
                onClick={loadMore}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Load More Photos
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && currentImage && (
          <motion.div
            id="galleryLightbox"
            className="lightbox"
            variants={lightboxVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-content"
              variants={lightboxContentVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.span 
                className="lightbox-close"
                onClick={closeLightbox}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                &times;
              </motion.span>
              
              <div className="lightbox-image">
                <motion.img 
                  src={currentImage.image} 
                  alt={currentImage.title}
                  id="lightbox-img"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                />
              </div>
              
              <div className="lightbox-info">
                <h3 id="lightbox-title">{currentImage.title}</h3>
                <p id="lightbox-desc">{currentImage.description}</p>
                <span className="lightbox-category" id="lightbox-category">
                  {filters.find(f => f.id === currentImage.category)?.label}
                </span>
              </div>
              
              <div className="lightbox-nav">
                <motion.button 
                  className="lightbox-prev"
                  onClick={() => navigateLightbox('prev')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  &#10094;
                </motion.button>
                <motion.button 
                  className="lightbox-next"
                  onClick={() => navigateLightbox('next')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  &#10095;
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Want to See More?</h2>
            <p>Schedule a visit to experience our vibrant learning environment firsthand</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-schedule-tour">Schedule a Tour</Link>
              <Link to="/admissions" className="btn btn-secondary">Apply Now</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;